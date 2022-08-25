import styles from "./Dashboard.module.scss"
import { BiArrowBack } from "react-icons/bi"
import { usePanel } from "../../hooks/usePanel"
import { useUser } from "../../hooks/useUser"

function Dashboard() {

    const { panel, setPanel } = usePanel()
    const { user, setUser } = useUser()

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.title}>
                <h1>Dashboard</h1>
            </div>
            <div className={styles.content}>
                <p>user: {user}</p>
                <p>age: {user}</p>
                <p>ocupation: {user} </p>
            </div>
            <div className={styles.btnCollection}>
                <button onClick={(e) => { e.preventDefault(), setPanel(false) }}><span><BiArrowBack /></span>Go back </button>
            </div>
        </div>
    )
}

export default Dashboard