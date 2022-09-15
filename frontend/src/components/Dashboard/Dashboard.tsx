import styles from "./Dashboard.module.scss"
import { BiArrowBack, BiUser } from "react-icons/bi"
import { usePanel } from "../../hooks/usePanel"
import { useUser } from "../../hooks/useUser"
import Head from "next/head"
import { AiFillCode } from 'react-icons/ai'

function Dashboard() {

    const { panel, setPanel } = usePanel()
    const { user, setUser } = useUser()


    return (
        <div className={styles.dashboardContainer}>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div className={styles.title}>
                <h1>Dashboard</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <span className={styles.logo}><BiUser /></span>
                        <span className={styles.text}>{user.name}</span>
                        <span className={styles.email}>{user.email}</span>
                    </div>
                </div>
                <div className={styles.contentUser}>
                    <div className={styles.cardContentUser}>
                        <div className={styles.posts}>
                            <div className={styles.writePost}>
                                <textarea placeholder="Write a post here..." name="" id=""></textarea>
                                <button>Send</button>
                            </div>
                            <div className={styles.postsContainer}>
                                <div className={styles.post}>
                                    aaa
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btnCollection}>
                <button onClick={(e) => { e.preventDefault(), setPanel(false) }}><span><BiArrowBack /></span>Go back </button>
            </div>
        </div>
    )
}

export default Dashboard