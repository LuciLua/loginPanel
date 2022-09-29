import styles from "./Dashboard.module.scss"
import { BiArrowBack, BiUser } from "react-icons/bi"
import { usePanel } from "../../hooks/usePanel"
import { useUser } from "../../hooks/useUser"
import Head from "next/head"
import { AiFillCode, AiOutlineTwitter } from 'react-icons/ai'

import { useEffect, useState } from "react"

import axios from 'axios'
import Image from "next/image"

function Dashboard() {

    const { setPanel } = usePanel()
    const { user } = useUser()

    const [githubUser, setGithubUser] = useState<any>()

    async function searchUserGitHub() {
        const url = `https://api.github.com/users/${user.name}`
        const json = await axios.get(url)
        const data = await json.data
        setGithubUser(data)
    }

    useEffect(() => {
        searchUserGitHub()
    }, [])


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
                        <span className={styles.image}>
                            <Image src={githubUser ? githubUser.avatar_url : '/'} layout='fill' />
                        </span>
                        <span className={styles.text}>{user.name}</span>
                        <span className={styles.email}>{user.email}</span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.others}>{githubUser ? githubUser.bio : ''}</span>
                        <span className={styles.others}>{githubUser ? githubUser.location : ''}</span>
                        <span className={styles.others}><AiOutlineTwitter />{githubUser ? githubUser.twitter_username : ''}</span>
                        <span className={styles.others}>{githubUser ? githubUser.blog : ''}</span>
                    </div>
                </div>
                <div className={styles.contentUser}>
                    <div className={styles.cardContentUser}>
                        <div className={styles.posts}>
                            <div className={styles.writePost}>
                                <textarea placeholder="Write a post here..." name="" id=""></textarea>
                                <button onClick={() => searchUserGitHub()}>Send</button>
                            </div>
                            <div className={styles.postsContainer}>
                                <div className={styles.post}>
                                    <h1>
                                        Title
                                    </h1>
                                    <h2>
                                        subtitle
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptatibus possimus numquam enim vitae. Ad, maiores corrupti, neque odit natus suscipit dignissimos recusandae tempora velit mollitia omnis rerum voluptatem! Beatae.
                                    </p>
                                </div>
                                <div className={styles.post}>
                                    <h1>
                                        Title
                                    </h1>
                                    <h2>
                                        subtitle
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptatibus possimus numquam enim vitae. Ad, maiores corrupti, neque odit natus suscipit dignissimos recusandae tempora velit mollitia omnis rerum voluptatem! Beatae.
                                    </p>
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