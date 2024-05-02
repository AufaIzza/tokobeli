import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCartList } from "../../../../store/cartList"

const BuySuccess = () => {
    const navigate = useNavigate()
    const deleteCartList = useCartList(state => state.deleteData)

    useEffect(() => {
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