import { makeAutoObservable } from "mobx";
import { createContext } from "react";
class Store {
    name = "three-store";
    constructor() {
        makeAutoObservable(this);
    }
}
export const stores = new Store();
export const StoresContext = createContext(stores);
