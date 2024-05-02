import Navbar from "../../components/navbar/navbar"
import { useHistoryList } from "../../store/historyList"
import HistoryCard from "./components/historyCard/historyCard"
import { useEffect } from "react"


const History = () => {
    const historyList = useHistoryList(state => state.data)

    useEffect(() => {
        console.log(historyList)
    }, [])

    return(
        <div>
            <Navbar/>
            {
                historyList.map((element) => (
                    <HistoryCard name={element.name} price={element.price} amount={element.amount}/>
                ))
            }
        </div>
    )
}

export default History