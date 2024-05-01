import NavBar from "../../components/navbar/navbar"
import CartCard from "./components/cartCard/cartCard"
import { useCartList } from "../../store/cartList"
import { useState, useEffect } from "react"

const cart = () => {
    const cartList = useCartList((state) => state.data)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(state => state = 0)
        cartList.map(data => {
            setTotalPrice(state => state + data.price)
        });
    },[cartList])

    if (cartList.length > 0) {
        return(
            <div>
                <NavBar/>
                <div>
                    {cartList.map((data) => (
                        <div>
                            <CartCard name={data.name} price={data.price} id={data.id} amount={data.amount}/>
                        </div>
                    ))}
                </div>
                <div>{totalPrice}</div>
            </div>
        )
    } else {
        return(
            <div>
                <NavBar/>
                <div>
                    <p>Cart is empty</p>
                </div>
            </div>
        )
    }
}

export default cart