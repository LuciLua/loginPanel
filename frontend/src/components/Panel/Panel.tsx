import styles from "./Panel.module.scss"
import { usePanel } from "../../hooks/usePanel"
import { useUser } from "../../hooks/useUser"
import { useState } from "react"
import Head from "next/head"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"

import { useSign } from "../../hooks/useSign"

function Panel() {

    const { sign, setSign } = useSign()

    return (
        <div className={styles.panelContainer}>
            <Head>
                <title>Panel</title>
            </Head>
            {sign ? <SignIn /> : <SignUp />}
        </div>
    )
}

export default Panel