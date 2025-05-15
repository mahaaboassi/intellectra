import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ContactBanner from "../components/contactBanner"

const Layout = ()=>{
    return (<div>
        <Navbar/>
        <Outlet/>
        <ContactBanner/>
        <Footer/>
    </div>)
}

export default Layout