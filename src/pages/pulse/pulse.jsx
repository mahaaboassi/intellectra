import { useEffect } from "react"
import Hero from "../../components/hero"
import LottieHero from "../../components/heroAnimation"
import { Helmet } from "react-helmet-async"
import { dataBlog, hostCanonical } from "../../data/data"
import { Link } from "react-router-dom"


const Pulse = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
        <LottieHero/>
        <Helmet>
            <title>Pulse | INTELLECTRA</title>
            <link rel="canonical" href={`${hostCanonical}/pulse`} />
        </Helmet>
        <div className="pages" style={{background:"white"}}>
            <Hero data={[{
                    words : "Pulse : Wired for Tomorrow",
                    des : "What’s Shaping the Digital World Today"
            }]} />
            <div className="layout pt-32 px-5 sm:px-16 md:px-32 pb-16">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {dataBlog.map((ele,idx)=>(<div key={`News_Latest_Pulse_Page_${ele.title}_${idx}`} className="blog flex flex-col gap-3 ">
                                <div className='container-img'>
                                    <img src={ele.image} alt={ele.title}/>
                                </div>
                                <div className='flex gap-2'>
                                    {ele.hashtag.map((hash,index)=>(<div className='hastag p-1' key={`Hashtag_${hash}_${index}_${idx}`}>
                                        {hash}
                                    </div>))}
                                </div>
                                <h3>{ele.title}</h3>
                                {/* <p>{ele.description.substring(0,80)+"..."}</p> */}
                                <Link aria-label={`See more details about ${ele.title}`}  to={`/pulse/${ele.link}`}><div>
                                    <span className="sr-only">See more details about {ele.title}</span>
                                    <span className='learn'>Learn More</span>
                                </div></Link>
                            </div>))}
                </div>     
            </div>
        </div>
    </div>)
}

export default Pulse