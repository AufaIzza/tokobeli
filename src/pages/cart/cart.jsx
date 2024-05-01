import { Link } from "react-router-dom"
import { useStoreList } from "../../store/storeList"

const cart = () => {
    const amount = useStoreList(state => state.amount)

    return(
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/cart"}>Cart</Link>
            <p>{amount}</p>
        </div>
    )
}

export default cart