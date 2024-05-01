import NavBar from "../../components/navbar/navbar"
import { useStoreList } from "../../store/storeList"
import { useCartList } from "../../store/cartList"

import { useEffect } from "react"

const index = () => {
    const storeList = useStoreList((state) => state.data)
    const cartList = useCartList((state) => state.data)
    const addCartList = useCartList((state) => state.addData)
    const removeCartList = useCartList((state) => state.removeData)

    useEffect(() => {
        console.log(cartList)
    })

    return(
        <div>
            <NavBar/>
            <div>
                {storeList.map((data) => (
                   <div>
                        <p>{data.name}</p>
                        <p>{data.price}</p>
                        <button onClick={() => {
                            addCartList(data.name, data.price)
                        }}>Add To Cart</button>
                   </div> 
                ))}
            </div>
            <div>
                {cartList.map((data) => (
                    <div>
                        <div>{data.name}</div>
                        <div>{data.price}</div>
                        <button onClick={() => {
                            removeCartList(data.id)
                        }}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default index