import PerspectiveCamera from "./camera/PerspectiveCamera";
import Scene from "./scene";
import Render from "./render";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EquirectangularReflectionMapping, Clock } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

class engine {
    canvas;

    /**场景实例 */
    scene: Scene;

    /**透视相机实例 */
    camera: PerspectiveCamera;

    /**渲染器实例 */
    renderer: Render;

    /**鼠标旋转、缩放、平移控制器 */
    orbitControls: OrbitControls;

    /**用于更新轨道控制器 */
    clock: Clock;

    delta: number | undefined;

    constructor(canvas: HTMLCanvasElement) {
        this.scene = new Scene();
        this.canvas = canvas;
        this.camera = new PerspectiveCamera(45, this.canvas.clientWidth / this.canvas.clientHeight, 0.25, 20);
        this.renderer = new Render({
            antialias: true, //开启锯齿
            alpha: true, //透明度
            canvas: canvas,
        });

        this.clock = new Clock(); //用于更新轨道控制器
        this.orbitControls = new OrbitControls(this.camera, this.canvas);
        this.orbitControls.target = new THREE.Vector3(0, 0, 0); //控制焦点
        this.orbitControls.autoRotate = false; //将自动旋转关闭

        //给场景添加光源
        //自然光
        const ambientLight = new THREE.AmbientLight(0x606060);
        this.scene.add(ambientLight);
        //平行光源
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(1, 0.75, 0.5).normalize();
        this.scene.add(directionalLight);

        this.hdrLoad("src/assets/model/abandoned_factory_canteen_02_4k.hdr");
        this.modleLoad("src/assets/model/DamagedHelmet.glb");
        window.addEventListener("resize", () => this.onResize());
    }

    modleLoad(path: string) {
        const loader = new GLTFLoader();
        // 加载地图模型
        loader.load(path, (gltf) => {
            //将模型添加至场景
            this.scene.add(gltf.scene);
            //设置模型位置
            gltf.scene.position.set(0, 0, 0);
        });
        this.render();
    }

    hdrLoad(path: string) {
        const load = new RGBELoader();
        load.load(path, (texture) => {
            texture.mapping = EquirectangularReflectionMapping;
            this.scene.environment = texture; // 给场景添加环境光效果
            this.scene.background = texture; // 给场景添加背景图
            this.render();
        });
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.render();
    }

    render() {
        this.delta = this?.clock.getDelta();
        this?.orbitControls.update(this.delta);
        requestAnimationFrame(() => this.render());
        this.renderer.render(this.scene, this.camera);
    }
}

export default engine;
