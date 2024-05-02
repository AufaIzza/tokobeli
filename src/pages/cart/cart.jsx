import NavBar from "../../components/navbar/navbar"
import CartCard from "./components/cartCard/cartCard"
import { useCartList } from "../../store/cartList"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const cart = () => {
    const cartList = useCartList((state) => state.data)
    const deleteCartList = useCartList((state) => state.deleteData)
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()

    const buyCart = () => {
        deleteCartList()
        navigate('/cart/success')
    }

    useEffect(() => {
        setTotalPrice(state => state = 0)
        cartList.map(data => {
            setTotalPrice(state => state + (data.price * data.amount))
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
                <button onClick={buyCart}>Buy</button>
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