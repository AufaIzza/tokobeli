import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "../pages/index/index"
import Cart from "../pages/cart/cart";
import BuySuccess from "../pages/cart/pages/buySuccess/BuySuccess";

const routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Index/>
        },
        {
            path: "/cart",
            element: <Cart/>,
        },
        {
            path: "/cart/success",
            element: <BuySuccess/>
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default routers