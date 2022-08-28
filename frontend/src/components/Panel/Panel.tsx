import styles from "./Panel.module.scss"
import { usePanel } from "../../hooks/usePanel"
import { useUser } from "../../hooks/useUser"
import { useState } from "react"
import Link from "next/link"
import Head from "next/head"

function Panel() {

    const { panel, setPanel } = usePanel()
    const { user, setUser } = useUser()

    const [name, setName] = useState<String>()
    const [pass, setPass] = useState<String>()

    function inputs(e: any) {
        if (e.target.name === 'name') setName(e.target.value)
        if (e.target.name === 'pass') setPass(e.target.value)
    }

    function login(e: any) {
        e.preventDefault()
        setPanel(true)
        setUser([name, pass])
    }

    return (
        <div className={styles.panelContainer}>
            <Head>
                <title>Sign In</title>
            </Head>
            <form>
                <div className={styles.title}>
                    <h1>Sign In</h1>
                    <h2>Please login for use plataform</h2>
                </div>
                <div className={styles.inputCollection}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onInput={(e) => { inputs(e) }} />
                    <input
                        type="password"
                        placeholder="Password"
                        name="pass"
                        onInput={(e) => { inputs(e) }} />
                </div>
                <div className={styles.signInOptions}>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                    <Link href={'#'}>
                        Forgot my password
                    </Link>
                </div>
                <div className={styles.btnCollection}>
                    <button onClick={(e) => { login(e) }} >Login</button>
                </div>
                <div className={styles.createAccount}>
                    <span>Don't have a account? <Link href={"#"}>Create a free account here</Link></span>
                </div>
            </form>
        </div>
    )
}

export default Panel