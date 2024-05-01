import { Link } from "react-router-dom"
import { useStoreList } from "../../store/storeList"

const index = () => {
    const amount = useStoreList(state => state.amount)
    const increaseAmountByOne = useStoreList(state => state.increaseAmountByOne)

    return(
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/cart"}>Cart</Link>
            <h1>TOKOBELI</h1>
            <p>{amount}</p>
            <button onClick={increaseAmountByOne}>Add one</button>
        </div>
    )
}

export default index