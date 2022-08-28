import { Head, Html, Main, NextScript } from "next/document";

function Document() {
    // Fonts
    const poppins = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap";

    return (

        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href={poppins} rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document