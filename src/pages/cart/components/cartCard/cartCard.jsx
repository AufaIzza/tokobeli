import { useCartList } from "../../../../store/cartList"

const cartCard = ({name, price, id, amount}) => {
    const removeCartList = useCartList((state) => state.removeData)

    return (
        <div>
            <div>{name}</div>
            <div>{price}</div>
            <div>{amount}</div>
            <button onClick={() => {
                removeCartList(id)
            }}>Remove</button>
        </div>
    )
}

export default cartCard