import { useCartList } from "../../../../store/cartList"

const cartCard = ({name, price, id, amount}) => {
    const removeCartList = useCartList((state) => state.removeData)
    const addItemAmount = useCartList((state) => state.addAmountOnId)
    const substractItemAmount = useCartList((state) => state.substractAmountOnId)

    return (
        <div>
            <div>{name}</div>
            <div>{price}</div>
            <button onClick={() => {
                substractItemAmount(id)
            }}>-</button>
            <div>{amount}</div>
            <button onClick={() => {
                addItemAmount(id)
            }}>+</button>
            <button onClick={() => {
                removeCartList(id)
            }}>Remove</button>
        </div>
    )
}

export default cartCard