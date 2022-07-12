import { PerspectiveCamera as ThPerspectiveCamera } from "three";

class PerspectiveCamera extends ThPerspectiveCamera {
    constructor(fov?: number, aspect?: number, near?: number, far?: number) {
        super(fov, aspect, near, far);
        this.position.set(-1.8, 0.6, 2.7);
    }
}

export default PerspectiveCamera;
