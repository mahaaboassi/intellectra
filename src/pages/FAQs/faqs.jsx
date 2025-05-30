import { useEffect } from "react"
import LottieHero from "../../components/heroAnimation"
import Path from "../../components/path"
import { Helmet } from "react-helmet-async"


const FAQs = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div className="contact pages">
        <Helmet>
            <title>FAQs | INTELLECTRA</title>
            {/* <link rel="canonical" href={`${hostCanonical}/esg`} /> */}
        </Helmet>
        <LottieHero/>
        <div className="pt-32 px-5 sm:px-16 md:px-32 ">
            <div className="blur-bg radius-border flex flex-col gap-3 content-about p-4 sm:p-6  md:p-10 lg:p-16">
                <Path first={"Home"} link={"/"} second={"FAQs"} />
                <h1>FAQs </h1>
                {/* <div className="des-pages" >{solutionData.description}</div> */}
            </div>
           <div className=" container-cards flex-wrap py-10 justify-between">
                
            </div>

        </div>

    </div>)
}
export default FAQs