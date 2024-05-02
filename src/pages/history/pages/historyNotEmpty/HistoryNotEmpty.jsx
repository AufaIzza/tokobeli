import Navbar from "../../../../components/navbar/navbar"
import { useHistoryList } from "../../../../store/historyList"
import { useEffect } from "react"
import HistoryCard from "./components/historyCard/historyCard"


const HistoryNotEmpty = () => {
    const historyList = useHistoryList(state => state.data)

    useEffect(() => {
        console.log(historyList)
    }, [])

    return(
        <div>
            <Navbar/>
            {
                historyList.map((element) => {
                    if (element.mainItem === true) {
                   return ( <HistoryCard name={element.name} price={element.price} amount={element.amount} group_id={element.group_id}/> )
                    }
                })
            }
        </div>
    )
}

export default HistoryNotEmpty