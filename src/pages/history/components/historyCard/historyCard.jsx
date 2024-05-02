const HistoryCard = ({name, price, amount}) => {
    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{amount}</p>
        </div>
    )
}

export default HistoryCard