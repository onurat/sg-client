
import Home from "./home/home"
import GlassReplacmentPage from "./glassReplacement/GlassReplacmentPage"
import Page404 from "./404/404.js"

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
    }


]
