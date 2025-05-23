import Card from "../../components/card"
import LottieHero from "../../components/heroAnimation"
import { hostCanonical, industryData } from "../../data/data"
import Path from "../../components/path"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

const Industry = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div className="industry pages">
        <Helmet>
            <title>Industries | Intellectra</title>
            <link rel="canonical" href={`${hostCanonical}/industries`} />
        </Helmet>
        <LottieHero/>
        <div className="pt-32 px-5 sm:px-16 md:px-32 ">
            <div className="blur-bg flex flex-col gap-3 radius-border content-about p-4 sm:p-6  md:p-10 lg:p-16">
                <Path first={"About"} second={"Industries"} link={"/about"} />
                <h1>Industries</h1>
                <h3 className="des-pages" >{industryData.description}</h3>
            </div>
           <div className=" container-cards flex-wrap py-10 justify-between">
                {industryData.children.map((ele,idx)=>(<Card key={`industry_Card_${ele.title}_${idx}`} 
                                                             img={ele.img}
                                                             description={ele.description}
                                                             title={ele.title}
                                                             type="industry"
                                                             link={ele.link}
                                                             subTitle={ele.subTitle} />))}

            </div>

        </div>

    </div>)
}
export default Industry