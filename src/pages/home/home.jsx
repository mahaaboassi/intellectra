import { useEffect } from "react"
import Hero from "../../components/hero"
import Intro from "./sections/intro"
import Latest from "./sections/latest"
import Services from "./sections/services"
import Video from "./sections/video"
import LottieHero from "../../components/heroAnimation"
import { Helmet } from "react-helmet-async"
import { hostCanonical } from "../../data/data"

const Home = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
        <Helmet>
            <title>Intellectra | IT and business consulting services </title>
            <link rel="canonical" href={`${hostCanonical}`} />
        </Helmet>
        <LottieHero/>
        <div style={{background:"white"}}>
            <Hero/>
            <Services/>
            <Intro/>
            <Video/>
            <Latest/>
        </div>
    </div>)
}

export default Home