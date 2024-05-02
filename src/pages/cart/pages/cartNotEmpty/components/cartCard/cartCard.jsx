import { useCartList } from "../../../../../../store/cartList"
import { useState, useEffect } from "react"

const cartCard = ({name, price, id, amount}) => {
    const cartList = useCartList(state => state.data)
    const removeCartList = useCartList((state) => state.removeDataOnId)
    const addItemAmount = useCartList((state) => state.addAmountOnId)
    const substractItemAmount = useCartList((state) => state.substractAmountOnId)
    const updateItemAmount = useCartList(state => state.updateAmountOnId)

    const [ inputAmount, setInputAmount] = useState(amount)

    useEffect(() => {
        console.log(cartList)
        setInputAmount(amount)
    },[cartList])

    function inputChange(value) {
        updateItemAmount(id, parseInt(value))
        setInputAmount(value)
    }

    return (
        <div>
            <div>{name}</div>
            <div>{price}</div>
            <button onClick={() => {
                substractItemAmount(id)
            }}>-</button>
            <input type="number" name="amount" id="amount" value={inputAmount} onChange={e => inputChange(e.target.value)} />
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