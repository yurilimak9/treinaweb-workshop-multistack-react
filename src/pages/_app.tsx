import '@styles/globals.css';
import {ThemeProvider} from "@material-ui/core";
import theme from "ui/themes/theme";
import Head from "next/head";
import Header from "ui/components/surfaces/Header/Header";
import Footer from "ui/components/surfaces/Footer/Footer";
import {AppContainer} from "@styles/pages/_app.style";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>e-diaristas</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet"/>
            </Head>
            <ThemeProvider theme={theme}>
                <AppContainer>
                    <Header/>
                    <Component {...pageProps} />
                    <Footer/>
                </AppContainer>
            </ThemeProvider>
        </>
)
}

export default MyApp;
