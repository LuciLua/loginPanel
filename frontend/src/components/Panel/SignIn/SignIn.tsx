import Link from "next/link"
import { usePanel } from "../../../hooks/usePanel"
import { useUser } from "../../../hooks/useUser"
import styles from "../Panel.module.scss"
import { useState } from "react"
import { useSign } from "../../../hooks/useSign"

function SignIn() {

    const { panel, setPanel } = usePanel()
    const { sign, setSign } = useSign()

    const { user, setUser } = useUser()

    const [name, setName] = useState<String>()
    const [pass, setPass] = useState<String>()

    function inputs(e: any) {
        if (e.target.name === 'name') setName(e.target.value)
        if (e.target.name === 'pass') setPass(e.target.value)
    }

    function login(e: any) {
        e.preventDefault()
        if (validadeLogin()) {
            const userLocal = JSON.parse(localStorage.getItem('user'))
            setUser(userLocal)
            setPanel(true)
        }
        else {
            alert("Usuário ou Senha Incorretos")
        }
    }

    function validadeLogin() {
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user)

        var verification = false
        name === user.name &&  pass === user.pass ? verification = true : verification = false

        return verification
    }

    return (
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
                <span>Don't have a account? <span className={styles.clickable} onClick={(e) => { e.preventDefault; setSign(false) }}>Create a free account here</span></span>
            </div>
        </form>
    )
}

export default SignIn