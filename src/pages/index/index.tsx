import React, { useEffect, useRef } from "react";
import styles from "./index.module.less";
import { useStore } from "hooks/useStore";
import { observer } from "mobx-react";
import Toolbar from "./components/Toolbar";

const Index = () => {
    const store = useStore();
    const domRef = useRef(null);
    useEffect(() => {
        !store.engine && store.initEngine(domRef.current);
    }, []);
    return (
        <div className={styles.index}>
            {/*threejs渲染元素 */}
            <canvas className={styles.canvas} id='three' ref={domRef} />
            <Toolbar />
        </div>
    );
};

export default observer(Index);
