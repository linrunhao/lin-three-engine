import { lazy } from "react";
import { IRoute } from "./index";

const Index = lazy(() => import("../pages/index"));
const Page404 = lazy(() => import("../pages/erreo"));

const routerConfig: IRoute[] = [
    {
        pathname: "/",
        component: Index,
    },
    {
        pathname: "*",
        component: Page404,
    },
];

export default routerConfig;
