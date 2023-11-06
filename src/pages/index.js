
import Home from "./home/home"
import GlassReplacmentPage from "./glassReplacement/GlassReplacmentPage"
import Page404 from "./404/404.js"
import WindscreenRepair from "./WindscreenRepair/WindscreenRepair"
import Cosmetics from "./CosmeticsPage/Cosmetics.js"
import Bookings from "./BokingsPage/Bookings.js"
import Contacts from "./ContactsPage/Contacts.js"



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
        path: "/windscreenRepair",
        element: <WindscreenRepair />
    },
    {
        path: "/cosmetics",
        element: <Cosmetics />
    },
    {
        path: "/bookings",
        element: <Bookings />
    },
    {
        path: "/contacts",
        element: <Contacts />
    }
]
