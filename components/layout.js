//import Head from 'next/head'
import Header from "./global/header"
import Footer from "./global/footer";

export default function Layout({ children }) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}
