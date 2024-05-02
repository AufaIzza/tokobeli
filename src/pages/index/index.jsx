import NavBar from "../../components/navbar/navbar"
import ListCard from "./components/listCard/listCard"
import { useStoreList } from "../../store/storeList"

const index = () => {
    const storeList = useStoreList((state) => state.data)

    return(
        <div>
            <NavBar/>
            <div>
                {storeList.map((data) => (
                    <ListCard key={data.id} name={data.name} price={data.price} id={data.id}/>
                ))}
            </div>
        </div>
    )
}

export default index