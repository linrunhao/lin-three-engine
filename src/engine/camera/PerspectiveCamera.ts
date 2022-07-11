import { PerspectiveCamera as ThPerspectiveCamera } from "three";

class PerspectiveCamera extends ThPerspectiveCamera {
    constructor(fov?: number, aspect?: number, near?: number, far?: number) {
        super(fov, aspect, near, far);
    }
}

export default PerspectiveCamera;
