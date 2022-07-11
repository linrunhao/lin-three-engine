import React, { useEffect, useRef } from "react";
import styles from "./index.module.less";
import { useStore } from "hooks/useStore";
import { observer } from "mobx-react";

const Index = () => {
    const store = useStore();
    const domRef = useRef(null);
    useEffect(() => {
        store.initEngine(domRef.current);
    }, []);
    return (
        <div className={styles.index}>
            {/*threejs渲染元素 */}
            <div className={styles.canvas} ref={domRef} />
        </div>
    );
};

export default observer(Index);
