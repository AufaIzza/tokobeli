import { useCartList } from "../../../../store/cartList"

const ListCard = ({name, price, id}) => {
    const addCartList = useCartList((state) => state.addData)

    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => {
                addCartList(name, price, id)
            }}>Add To Cart</button>
        </div> 
    )
}

export default ListCard