import PerspectiveCamera from "./camera/PerspectiveCamera";
import Scene from "./scene";
import Render from "./render";

class engine {
    /**场景实例 */
    Scene: Scene;

    /**透视相机实例 */
    PerspectiveCamera: PerspectiveCamera;

    /**渲染器实例 */
    Render: Render;

    constructor(dom: HTMLDivElement) {
        this.Scene = new Scene();
        this.PerspectiveCamera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.Render = new Render();
        this.Render.setSize(window.innerWidth, window.innerHeight);
        dom.appendChild(this.Render.domElement);
    }
}

export default engine;
