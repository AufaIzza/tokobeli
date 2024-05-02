import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCartList } from "../../../../store/cartList"
import { useHistoryList } from "../../../../store/historyList"

const BuySuccess = () => {
    const navigate = useNavigate()
    const cartList = useCartList(state => state.data)
    const deleteCartList = useCartList(state => state.deleteData)
    const addHistoryList = useHistoryList(state => state.addData)

    useEffect(() => {
        cartList.forEach(element => {
            addHistoryList(element.name, element.price, element.amount)
        });
        deleteCartList()
        setTimeout(() => {
            navigate("/cart")
        }, 2000)
    }, [])

    return(
        <div>
            Buy Success
        </div>
    )
}

export default BuySuccess