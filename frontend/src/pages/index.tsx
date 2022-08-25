import { useState } from "react"
import Dashboard from "../components/Dashboard/Dashboard"
import Panel from "../components/Panel/Panel"
import { usePanel } from "../hooks/usePanel"

function Home() {

    const { panel, setPanel } = usePanel()

    return (
        <>
            {panel ? <Dashboard /> : <Panel />}
        </>
    )
}

export default Home