import { useEffect } from "react"
import LottieHero from "../../components/heroAnimation"
import { hostCanonical } from "../../data/data"
import Path from "../../components/path"
import { Helmet } from "react-helmet-async"


const Pulse = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div className="industry pages">
        <Helmet>
            <title>Pulse | Intellectra</title>
            <link rel="canonical" href={`${hostCanonical}/pulse`} />
        </Helmet>
        <LottieHero/>
        <div className="pt-32 px-5 sm:px-16 md:px-32 ">
            <div className="blur-bg radius-border flex flex-col gap-3 content-about p-4 sm:p-6  md:p-10 lg:p-16">
                <Path first={"Home"} link={"/"} second={"Pulse"} />
                <h1>Pulse</h1>
                {/* <h3 className="des-pages" >{solutionData.description}</h3> */}
            </div>

        </div>

    </div>)
}
export default Pulse