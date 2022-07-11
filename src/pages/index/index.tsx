import React from "react";
import styles from "./index.module.less";
import Page404 from "pages/erreo";
import { useStore } from "hooks/useStore";
import Input from "antd/lib/input/Input";
import { StepBackwardOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";

const Index = () => {
    const store = useStore();
    console.log(12);

    return (
        <div
            className={styles.page}
            onClick={() => {
                store.name = "12";
                console.log(store);
            }}
        >
            {store.name}
            {/* <Button>asdasd</Button> */}
            <Page404 />
            {/* index */}
            <Input />
            <StepBackwardOutlined />
        </div>
    );
};

export default observer(Index);
