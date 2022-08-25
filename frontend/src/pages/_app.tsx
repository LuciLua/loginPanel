import "../styles/globals.scss"
import { PanelProvider } from "../context/PanelContext"
import { UserProvider } from "../context/UserContext"

function App({ Component, pageProps }) {
    return (
        <PanelProvider>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </PanelProvider>
    )
}

export default App