import { WebGLRenderer, WebGLRendererParameters } from "three";

class Render extends WebGLRenderer {
    constructor(config?: WebGLRendererParameters) {
        super(config);
    }
}

export default Render;
