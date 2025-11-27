import { Link } from "react-router-dom"

const Path = ({first, second, link})=>{
    return( <div className="flex items-center path gap-2  mb-5">
            <div className="first-path"><Link aria-label={first || "link"} to={link}>{first}</Link></div>
            <div>/</div>
            <div className="second-path">{second}</div>
        </div>)
}
export default Path