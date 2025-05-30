import { useEffect } from "react"
import Hero from "../../components/hero"
import LottieHero from "../../components/heroAnimation"
import Card from "../../components/card"
import { Helmet } from "react-helmet-async"
import { hostCanonical, industryData } from "../../data/data"
// Images
import img_3 from "../../assets/images/image_12.webp"
import img_2 from "../../assets/images/image_11.webp"

const Industry = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
        <LottieHero/>
        <Helmet>
             <title>Industries | INTELLECTRA</title>
             <link rel="canonical" href={`${hostCanonical}/industries`} />
        </Helmet>
        <div className="pages relative" style={{background:"white"}}>
            <Hero data={[{
                    words : "EMPOWERING INDUSTRY WITH TECHNOLOGY",
                    des : "Enabling Agility, Operational Resilience, and Sustainable Impact"
            }]} />
            <div className="layout pt-32 px-5 sm:px-16 md:px-32">
                <p>
                   {industryData.description}
                </p>
                <p className="py-4">
                   {industryData.desc_2}
                </p>
                <p>
                   {industryData.desc_3}
                </p>
                <p className="pt-4">
                   {industryData.desc_4}
                </p>
                <div className="container-about gap-10 py-10">
                    <div className="w-full flex justify-end"><img  className="layout-one" src={img_2} alt="image" /></div>
                    <div className="w-full"><img className="layout-two" src={img_3} alt="image" /></div>

                </div>
                
            </div>
            <div style={{background:"white"}} className="px-3 sm:px-14 md:px-30 container-cards flex-wrap py-10    justify-between">
                {industryData.children.map((ele,idx)=>(<Card key={`industry_Card_${ele.title}_${idx}`} 
                                                              img={ele.img }
                                                              description={ele.description}
                                                              title={ele.title}
                                                              type="industry"
                                                              link={ele.link}
                                                              subTitle={ele.subTitle}  />))}
            </div>
        </div>
    </div>)
}

export default Industry