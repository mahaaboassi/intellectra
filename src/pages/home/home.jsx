import { useEffect } from "react"
import Hero from "../../components/hero"
import Intro from "./sections/intro"
import Latest from "./sections/latest"
import Services from "./sections/services"
import Video from "./sections/video"
import LottieHero from "../../components/heroAnimation"

const Home = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
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