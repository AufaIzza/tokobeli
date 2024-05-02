import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "../pages/index/index"
import Cart from "../pages/cart/cart";
import BuySuccess from "../pages/cart/pages/buySuccess/BuySuccess";
import History from "../pages/history/history";

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
        },
        {
            path: "/history",
            element: <History/>
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default routers