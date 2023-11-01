
import Home from "./home/home"
import GlassReplacmentPage from "./glassReplacement/GlassReplacmentPage"
import Page404 from "./404/404.js"
import WindscreenRepair from "./WindscreenRepair/WindscreenRepair"

export const routes = [
    {
        path: "*",
        element: <Page404/>
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/glassreplacment",
        element: <GlassReplacmentPage />
    },
    {
        path: "/WindscreenRepair",
        element: <WindscreenRepair />
    }



]
