import { useParams } from "react-router-dom"
import Navbar from "../../../../components/navbar/navbar"
import { useHistoryList } from "../../../../store/historyList"
import HistoryCardShow from "./components/historyCardShow/historyCardShow"
import { Link } from "react-router-dom"

const ShowHistory = () => {
    const { id } = useParams()
    const historyList = useHistoryList(state => state.data)

    return (
        <div>
            <Navbar/>
            <Link to={"/history"}>{"<-"}Back To History</Link>
            { historyList.map((element) => {
                if ( element.group_id === parseInt(id) ) {
                    return (
                        <HistoryCardShow name={element.name} price={element.price} amount={element.amount} />
                    )
                }             
                })}
        </div>
    )
}

export default ShowHistory