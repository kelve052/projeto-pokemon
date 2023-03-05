import Footer from "./footer";
import NavBar from "./nav-bar";
import Head from "next/head";

export default function Layouts({children}){
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="/Imagens/favicon.ico" />
                <title>PokeNext</title>
            </Head>
            <NavBar/>
            <main className="main-container">{children}</main>
            <Footer />
        </>
    )
}