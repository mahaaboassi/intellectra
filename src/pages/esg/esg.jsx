import { useEffect } from "react"
import Card from "../../components/card"
import LottieHero from "../../components/heroAnimation"
import { esgData } from "../../data/data"
import { Link } from "react-router-dom"

const ESG = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div className="pages">
        <LottieHero/>
        <div className="pt-32 px-5 sm:px-16 md:px-32 ">
            <div className="blur-bg radius-border flex flex-col gap-3 content-about sm:p-6  md:p-10 lg:p-16">
                <div className="flex items-center path gap-2  mb-5">
                    <div className="first-path"><Link to="/about">About</Link></div>
                    <div>/</div>
                    <div className="second-path">ESG</div>
                </div>
                <h1>Our Commitment to ESG</h1>
                <div className="des-pages" >{esgData.description}</div>
            </div>
           <div className="container-cards flex-wrap py-10 justify-between">
                {esgData.children.map((ele,idx)=>(<Card key={`ESG_Card_${ele.title}_${idx}`} 
                                                             img={ele.img}
                                                             description={ele.description}
                                                             title={ele.title}
                                                             type="esg"
                                                             subTitle={ele.subTitle} />))}

            </div>

        </div>

    </div>)
}
export default ESG