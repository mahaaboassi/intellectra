import { useEffect } from "react"
import Card from "../../components/card"
import LottieHero from "../../components/heroAnimation"
import { hostCanonical, solutionData } from "../../data/data"
import Path from "../../components/path"
import { Helmet } from "react-helmet-async"


const Solutions = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div className="industry pages">
        <Helmet>
            <title>Solutions | Intellectra</title>
            <link rel="canonical" href={`${hostCanonical}/solutions`} />
        </Helmet>
        <LottieHero/>
        <div className="pt-32 px-5 sm:px-16 md:px-32 ">
            <div className="blur-bg radius-border flex flex-col gap-3 content-about p-4 sm:p-6  md:p-10 lg:p-16">
                <Path first={"About"} link={"/about"} second={"Solutions"} />
                <h1>Solutions</h1>
                <h3 className="des-pages" >{solutionData.description}</h3>
            </div>
           <div className=" container-cards flex-wrap py-10 justify-between">
                {solutionData.children.map((ele,idx)=>(<Card key={`solutions_Card_${ele.title}_${idx}`} 
                                                             img={ele.img}
                                                             description={ele.description}
                                                             title={ele.title}
                                                             link={ele.link}
                                                             type="solutions"
                                                             subTitle={ele.subTitle} />))}
            </div>

        </div>

    </div>)
}
export default Solutions