import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { useState } from "react"

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
    const [ isOpen , setIsOpen ] = useState(false)
    const close = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_17_1174)">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#4D75F4"/>
        </g>
        <defs>
        <clipPath id="clip0_17_1174">
        <rect width="24" height="24" fill="#4D75F4"/>
        </clipPath>
        </defs>
        </svg>
    return(<div className="navbar px-5 sm:px-16 md:px-32">
          {isOpen && <div  onClick={()=>setIsOpen(false)}  className="close-icon">{close}</div>}
        <div>
            <Link to="/"><img src={logo} alt="logo" /> </Link>
            
        </div>
        <div>
            <ul className={`gap-5 ${isOpen?"fixed-menu":""}`}>
                {data.map((ele,idx)=>(<li onClick={() => setIsOpen(false)} key={`Menu_Navbar_${ele.name}_${idx}`}>
                        <Link to={ele.link} >{ele.name}</Link>
                </li>))}
            </ul>
        </div>
        <div onClick={()=>setIsOpen(true)}  className="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_483_74)">
                <path d="M14 18H21V16H14V18ZM3 6V8H21V6H3ZM9 13H21V11H9V13Z" fill="#4D75F4"/>
                </g>
                <defs>
                <clipPath id="clip0_483_74">
                <rect width="24" height="24" fill="#4D75F4"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </div>)
}

export default Navbar