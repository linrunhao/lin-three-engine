import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import Engine from "../engine/index";
class mainStore {
    name = "three-store";

    /** 引擎实例 */
    engine: Engine | null = null;
    constructor() {
        makeAutoObservable(this);
    }

    initEngine(dom: HTMLDivElement) {
        this.engine = new Engine(dom);
    }
}
export const stores = new mainStore();
export const StoresContext = createContext(stores);
export { mainStore };
