import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

const Navbar = ()=>{
    const data = [{
        name : "Home",
        link : '/'
    },{
        name : "About",
        link : '/about'
    },{
        name : "Industry",
        link : '/industry'
    },{
        name : "Solution",
        link : '/solutions'
    },{
        name : "Contact",
        link : '/contact'
    }]
    return(<div className="navbar px-5 sm:px-16 md:px-32">
        <div>
            <Link to="/"><img src={logo} alt="logo" /> </Link>
            
        </div>
        <div>
            <ul className="gap-5">
                {data.map((ele,idx)=>(<li key={`Menu_Navbar_${ele.name}_${idx}`}>
                        <Link to={ele.link} >{ele.name}</Link>
                </li>))}
            </ul>
        </div>
    </div>)
}

export default Navbar