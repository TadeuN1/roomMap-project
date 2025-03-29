import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";

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

            }
        ]
    }
])