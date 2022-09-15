import { useUser } from "../../../hooks/useUser"
import { useState } from "react"
import styles from "../Panel.module.scss"
import { useSign } from "../../../hooks/useSign"

function SignUp() {

    const [name, setName] = useState<String>()
    const [pass, setPass] = useState<String>()
    const [email, setEmail] = useState<String>()
    const [confirmPass, setConfirmPass] = useState<String>()

    const { setUser } = useUser()
    const { setSign } = useSign()


    function inputs(e: any) {
        if (e.target.name === 'name') setName(e.target.value)
        if (e.target.name === 'email') setEmail(e.target.value)
        if (e.target.name === 'pass') setPass(e.target.value)
        if (e.target.name === 'confirmPass') setConfirmPass(e.target.value)
    }

    // late at localStorage...
    function subscribe(e: any) {
        e.preventDefault()
        setUser({ name, email, pass, confirmPass })
        localStorage.setItem('user', JSON.stringify({name, email, pass, confirmPass}))
        setSign(true)
    }

    return (
        <form>
            <div className={styles.title}>
                <h1>Sign Up</h1>
                <h2>Please subscribe for use plataform</h2>
            </div>
            <div className={styles.inputCollection}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onInput={(e) => { inputs(e) }} />
                <input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    onInput={(e) => { inputs(e) }} />
                <input
                    type="password"
                    placeholder="Password"
                    name="pass"
                    onInput={(e) => { inputs(e) }} />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPass"
                    onInput={(e) => { inputs(e) }} />
            </div>
            <div className={styles.btnCollection}>
                <button onClick={(e) => subscribe(e)} >Subscribe Now</button>
            </div>
            <div className={styles.createAccount}>
                <span>Already have a account? <span className={styles.clickable} onClick={(e) => { e.preventDefault; setSign(true) }}>Login here</span></span>
            </div>
        </form>
    )
}

export default SignUp