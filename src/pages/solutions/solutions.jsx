import { useEffect } from "react"
import Hero from "../../components/hero"
import LottieHero from "../../components/heroAnimation"
import Card from "../../components/card"
import { Helmet } from "react-helmet-async"
import { hostCanonical, solutionData } from "../../data/data"
// Images
import img_3 from "../../assets/images/industry_1.webp"
import img_2 from "../../assets/images/2.webp"

const Solutions = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
        <LottieHero/>
        <Helmet>
            <title>Solutions | Intellectra</title>
            <link rel="canonical" href={`${hostCanonical}/solutions`} />
        </Helmet>
        <div className="pages" style={{background:"white"}}>
            <Hero data={[{
                    words : "Empowering Intelligence through Technology",
                    des : "Enabling Agility, Operational Resilience, and Sustainable Impact"
            }]} />
            <div className="layout pt-32 px-5 sm:px-16 md:px-32">
                <p>
                    {solutionData.description}
                </p>
                <div className="container-about gap-10 py-10">
                    <div className="w-full flex justify-end"><img  className="layout-one" src={img_2} alt="image" /></div>
                    <div className="w-full"><img className="layout-two" src={img_3} alt="image" /></div>

                </div>
                
            </div>
            <div style={{background:"white"}} className="px-3 sm:px-14 md:px-30 container-cards flex-wrap py-10    justify-between">
                {solutionData.children.map((ele,idx)=>(<Card key={`solutions_Card_${ele.title}_${idx}`} 
                                                             img={ele.img}
                                                             description={ele.description}
                                                             title={ele.title}
                                                             link={ele.link}
                                                             type="solutions"
                                                             subTitle={ele.subTitle}  />))}
            </div>
        </div>
    </div>)
}

export default Solutions