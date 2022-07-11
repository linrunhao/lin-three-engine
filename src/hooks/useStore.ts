import React from "react";

//
import { StoresContext } from "stores/index";

export const useStore = () => {
    const stores: any = React.useContext(StoresContext);
    if (!stores) {
        throw new Error("You have forgot to use StoreProvider, shame on you.");
    }
    return stores;
};
