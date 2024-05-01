import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "../pages/index/index"
import Cart from "../pages/cart/cart";

const routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Index/>
        },
        {
            path: "/cart",
            element: <Cart/>
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default routers