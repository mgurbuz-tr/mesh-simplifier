import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { disposeObject } from './disposal.js';

/**
 * Tek bir 3D modeli gösteren, orbit kontrollü viewport.
 * Ham 100-200MB mesh asla buraya girmez — sunucudan gelen hafif GLB yüklenir.
 */
export class Viewer {
  constructor(canvas) {
    this.canvas = canvas;
    this.current = null; // sahnedeki aktif model (Object3D)

    // --- Renderer ---
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;

    // --- Scene ---
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0d0f12);

    // PBR (GLTF) materyaller ortam haritası olmadan kararık görünür.
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    // Tekstürsüz STL/PLY/OBJ için klasik ışıklandırma.
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x33373d, 1.0));
    const dir = new THREE.DirectionalLight(0xffffff, 1.6);
    dir.position.set(4, 8, 6);
    this.scene.add(dir);

    // --- Camera ---
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 5000);
    this.camera.position.set(3, 2, 4);

    // --- Controls ---
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;

    // --- Grid ---
    this.grid = new THREE.GridHelper(20, 20, 0x303641, 0x20242c);
    this.grid.position.y = 0;
    this.scene.add(this.grid);

    this._onResize = this._resize.bind(this);
    window.addEventListener('resize', this._onResize);
    this._resize();
    this._animate();
  }

  _resize() {
    const w = this.canvas.clientWidth || this.canvas.parentElement.clientWidth;
    const h = this.canvas.clientHeight || this.canvas.parentElement.clientHeight;
    if (w === 0 || h === 0) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  _animate() {
    this._raf = requestAnimationFrame(() => this._animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  /** Sahnedeki mevcut modeli kaldırır ve GPU kaynaklarını serbest bırakır. */
  clear() {
    if (this.current) {
      this.scene.remove(this.current);
      disposeObject(this.current);
      this.current = null;
    }
  }

  /**
   * Yeni bir model gösterir (önce eskisini dispose eder).
   * @param {import('three').Object3D} object3D
   */
  setModel(object3D) {
    this.clear();
    this.current = object3D;
    this.scene.add(object3D);
    this.fitToView();
  }

  /** Modeli kameraya/grid'e oturtur. Boş/dejenere bbox'a karşı korumalı. */
  fitToView() {
    if (!this.current) return;
    const box = new THREE.Box3().setFromObject(this.current);
    if (box.isEmpty()) return;

    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (!isFinite(maxDim) || maxDim === 0) return;

    // Modeli grid üstüne, merkezi yatayda orijine taşı.
    this.current.position.x += -center.x;
    this.current.position.z += -center.z;
    this.current.position.y += -box.min.y;

    // Grid'i model boyutuna göre ölçekle.
    const gridSpan = Math.max(2, maxDim * 2);
    this.grid.scale.setScalar(gridSpan / 20);

    const fov = (this.camera.fov * Math.PI) / 180;
    const dist = (maxDim / 2 / Math.tan(fov / 2)) * 1.6;

    this.camera.near = maxDim / 1000;
    this.camera.far = maxDim * 1000;
    this.camera.position.set(dist * 0.8, maxDim * 0.7, dist);
    this.camera.lookAt(0, maxDim * 0.3, 0);
    this.camera.updateProjectionMatrix();

    this.controls.target.set(0, maxDim * 0.3, 0);
    this.controls.update();
  }

  dispose() {
    cancelAnimationFrame(this._raf);
    window.removeEventListener('resize', this._onResize);
    this.clear();
    this.controls.dispose();
    this.renderer.dispose();
  }
}
