import "../styles/globals.scss"
import { PanelProvider } from "../context/PanelContext"
import { UserProvider } from "../context/UserContext"
import { SignProvider } from "../context/SignContext"

function App({ Component, pageProps }) {
    return (
        <PanelProvider>
            <SignProvider>
                <UserProvider>
                    <Component {...pageProps} />
                </UserProvider>
            </SignProvider>
        </PanelProvider>
    )
}

export default App