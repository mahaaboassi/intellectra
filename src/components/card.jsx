import { Link } from "react-router-dom"

const Card = ({title, isImage,content=[],type, subTitle,note, title_2, description, img="", link=""})=>{
    return(<div className="card p-2" >
                <div className="p-3  blur-bg content-card  radius-border h-full sm:p-4  md:p-5 lg:p-10 flex flex-col gap-4">
                    <div className="flex items-center gap-5">
                        {img != "" && <div>{isImage?<img className="w-16  sm:w-20" src={img} alt={title} />:img}</div>}
                        <div>
                            <h2>{title}</h2>
                            <p className="sub-title">{subTitle}</p>
                        </div>
                    </div>
                    <p>{description}</p>
                    { type == "validation" && <h4>{title_2}</h4> }
                    {content.length > 0 &&  <ul className="flex flex-col gap-1 ">
                            {content.map((e,idx)=>(<li key={`Content_${title}_${e}_${idx}`}>{e}</li>))}
                        </ul>}
                    {link && <div><Link aria-label={`See more details about ${title}`} to={link}>
                        <span className="sr-only">See more details about {title}</span>
                        <span className="learn">See More</span>
                     </Link></div>}
                     {type == "validation" && note}
                    
                </div>
            </div>)
}

export default Card