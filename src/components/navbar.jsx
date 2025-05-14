import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

const Navbar = ()=>{
    const data = [{
        name : "Home",
        link : '/'
    },{
        name : "About",
        link : '/'
    },{
        name : "Industry",
        link : '/'
    },{
        name : "Solution",
        link : '/'
    },{
        name : "Contact",
        link : '/'
    }]
    return(<div className="navbar px-5 sm:px-16 md:px-32">
        <div>
            <img src={logo} alt="logo" />
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