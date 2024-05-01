import styles from "./styles.module.css"
import { Link } from "react-router-dom"

const navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <p className={styles.title}>TOKOBELI</p>
            </div>
            <div className={styles.right}>
                <Link className={styles.link} to={"/"}>Home</Link>
                <Link className={styles.link} to={"/cart"}>Cart</Link>
            </div>
        </div>
    )
}

export default navbar