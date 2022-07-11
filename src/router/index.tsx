import React, { FC, useEffect } from "react";
import routerConfig from "./config";
import { Route, Routes, RouteProps } from "react-router-dom";

export interface IRoute extends RouteProps {
    // 路径
    pathname: string;
    // 名称
    name?: string;
    // 中文描述，可用于侧栏列表
    title?: string;
    // react组件函数
    component: FC;
    // 页面组件创建时执行的hook
    beforeCreate?: (route: IRoute) => void;
    // 页面组件销毁时执行的hook
    beforeDestroy?: (route: IRoute) => void;
    // 属性
    meta?: {
        navigation: string;
        requireAuth: boolean;
    };
}

// 路由装饰器
const RouteDecorator = (props: { route: IRoute }) => {
    const { route } = props;
    // const navigate = useNavigate();

    useEffect(() => {
        // 鉴权路由守卫
        // if (route.meta?.requireAuth) {
        //   if (!isLogin()) {
        //     navigate('/login', { state: { redirect: route.pathname } });
        //   }
        // }

        // 自定义路由守卫
        route.beforeCreate?.(route);
        return () => route.beforeDestroy?.(route);
    }, [route]);

    return <route.component />;
};

const RouterComponent: FC = () => (
    <Routes>
        {routerConfig.map((route) => (
            <Route
                key={route.pathname}
                path={route.pathname}
                element={<RouteDecorator route={route} />}
            />
        ))}
    </Routes>
);

export default RouterComponent;
