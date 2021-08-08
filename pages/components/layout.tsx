import Head from 'next/head'
import Header from "./header";
import "./layout.module.css";

export default function Layout({ children }) {
    // @ts-ignore
    return (
        <>
            <Head>
                <title>Madhouse Miners</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&display=swap"
                    rel="stylesheet"/>
            </Head>
            <Header/>

            <main id="main">{children}</main>
        </>
    )
}