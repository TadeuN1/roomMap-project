import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Room from "./pages/Room/Room";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children:[
            {
                path: "/",
                element: <Home />

            },
            {
                path: "/create",
                element: <Create />

            },{
                path: "/room",
                element: <Room />

            }
        ]
    }
])