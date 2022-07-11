import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { ConfigProvider } from "antd";
import RouterComponent from "./router";
import { stores } from "./stores";
import "antd/dist/antd.css";
import zhCN from "antd/lib/locale-provider/zh_CN";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider {...stores}>
            <React.Suspense fallback={null}>
                <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
                    <BrowserRouter>
                        <RouterComponent />
                    </BrowserRouter>
                </ConfigProvider>
            </React.Suspense>
        </Provider>
    </React.StrictMode>
);
