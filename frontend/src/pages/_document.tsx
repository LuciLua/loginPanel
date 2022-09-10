import { Head, Html, Main, NextScript } from "next/document";

function Document() {
    // Fonts
    const poppins = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap";
    // Robotto
    const roboto = "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;1,100;1,200;1,300&display=swap";

    return (

        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href={poppins} rel="stylesheet" />
                <link href={roboto} rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document