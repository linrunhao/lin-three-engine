import { LinearToneMapping, WebGLRenderer, WebGLRendererParameters } from "three";

class Render extends WebGLRenderer {
    constructor(config?: WebGLRendererParameters) {
        super(config);
        this.setSize(window.innerWidth, window.innerHeight);
        this.setPixelRatio(window.devicePixelRatio);
        this.toneMapping = LinearToneMapping;
        this.toneMappingExposure = 1;
    }
}

export default Render;
