import { DiffOutlined, FileImageOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";
import styles from "./index.module.less";
import { observer } from "mobx-react";
import { useStore } from "hooks/useStore";

enum ItemType {
    BOTTON,
    FILE,
}

interface dataType {
    type: ItemType;
    title: string;
    icon: React.ReactNode;
    onCallBack: (e: any) => void;
    accept?: string;
}

const Toolbar = () => {
    const store = useStore();
    const data: dataType[] = [
        {
            type: ItemType.FILE,
            title: "上传文件",
            icon: <DiffOutlined />,
            onCallBack: (files) => {
                store.engine.modleLoad(getObjectURL(files[0]));
            },
            accept: ".glb",
        },
        {
            type: ItemType.FILE,
            title: "上传hdr",
            icon: <FileImageOutlined />,
            onCallBack: (files) => {
                store.engine.hdrLoad(getObjectURL(files[0]));
            },
            accept: ".hdr",
        },
    ];
    const getObjectURL = (file: any) => {
        return window.URL.createObjectURL(file);
    };
    return (
        <div className={styles.toolbar}>
            {data.map((itme) => (
                <Tooltip key={itme.title} title={itme.title} color='#6B6B6B' className={styles.item}>
                    {itme.icon}
                    {itme.type === ItemType.FILE && (
                        <input
                            className={styles.file_input}
                            type='file'
                            onChange={async (e) => {
                                await itme.onCallBack(e.target.files);
                                e.target.value = "";
                            }}
                            accept={itme.accept}
                        />
                    )}
                </Tooltip>
            ))}
        </div>
    );
};

export default observer(Toolbar);
