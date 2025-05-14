import { useEffect } from "react"
import Hero from "../../components/hero"
import Intro from "./sections/intro"
import Latest from "./sections/latest"
import Services from "./sections/services"
import Video from "./sections/video"

const Home = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
        <Hero/>
        <Services/>
        <Intro/>
        <Video/>
        <Latest/>
    </div>)
}

export default Home