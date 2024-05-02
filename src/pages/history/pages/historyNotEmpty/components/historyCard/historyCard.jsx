import { Link } from "react-router-dom"
const HistoryCard = ({name, price, amount, group_id}) => {
    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{amount}</p>
            <Link to={`/history/show/${group_id}`}>show more</Link>
        </div>
    )
}

export default HistoryCard