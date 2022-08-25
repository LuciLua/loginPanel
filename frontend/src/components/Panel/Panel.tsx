import styles from "./Panel.module.scss"
import { usePanel } from "../../hooks/usePanel"
import { useUser } from "../../hooks/useUser"
import { useState } from "react"

function Panel() {

    const { panel, setPanel } = usePanel()
    const { user, setUser } = useUser()

    const [name, setName] = useState<String>()
    const [age, setAge] = useState<String>()
    const [ocupation, setOcupation] = useState<String>()

    function inputs(e: any) {
        if (e.target.name === 'name') setName(e.target.value)
        if (e.target.name === 'age') setAge(e.target.value)
        if (e.target.name === 'ocupation') setOcupation(e.target.value)
    }

    function login(e: any) {
        e.preventDefault()
        setPanel(true)
        setUser([name, age, ocupation])
    }

    return (
        <div className={styles.panelContainer}>
            <form>
                <div className={styles.title}>
                    <h1>Login Form</h1>
                </div>
                <div className={styles.inputCollection}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onInput={(e) => { inputs(e) }} />
                    <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        onInput={(e) => { inputs(e) }} />
                    <input
                        type="text"
                        placeholder="Ocupation"
                        name="ocupation"
                        onInput={(e) => { inputs(e) }} />
                </div>
                <div className={styles.btnCollection}>
                    <button onClick={(e) => { login(e) }} >Login</button>
                </div>
            </form>
        </div>
    )
}

export default Panel