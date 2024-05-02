import NavBar from "../../../../components/navbar/navbar"
import { useCartList } from "../../../../store/cartList"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import CartCard from "../../components/cartCard/cartCard"

const CartNotEmpty = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()
    const cartList = useCartList((state) => state.data)

    const buyCart = () => {
        navigate('/cart/success')
    }

    useEffect(() => {
        setTotalPrice(state => state = 0)
        cartList.map(data => {
            setTotalPrice(state => state + (data.price * data.amount))
        });
    },[cartList])

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
            <button onClick={buyCart}>Buy</button>
        </div>
    )
}

export default CartNotEmpty