import { Link } from "react-router-dom"

const Card = ({title, type,content=[], subTitle, description, img="", link=""})=>{
    return(<div className="card p-2" >
                <div className="p-3  blur-bg content-card  radius-border h-full sm:p-4  md:p-5 lg:p-10 flex flex-col gap-4">
                    <div className="flex items-center gap-5">
                        {img != "" && <div>{img}</div>}
                        <div>
                            <h2>{title}</h2>
                            <p className="sub-title">{subTitle}</p>
                        </div>
                    </div>
                    <p>{description}</p>
                    {content.length > 0 &&  <ul className="flex flex-col gap-1 ">
                            {content.map((e,idx)=>(<li key={`Content_${title}_${e}_${idx}`}>{e}</li>))}
                        </ul>}
                    {link && <div><Link aria-label={`See more details about ${title}`} to={link}>
                        <span className="sr-only">See more details about {title}</span>
                        <span className="learn">See More</span>
                     </Link></div>}
                    
                </div>
            </div>)
}

export default Card