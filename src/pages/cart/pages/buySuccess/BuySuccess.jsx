import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const BuySuccess = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/cart")
        }, 2000)
    }, [])

    return(
        <div>
            Buy Success
        </div>
    )
}

export default BuySuccess