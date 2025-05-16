import { useEffect } from "react"
import Card from "../../components/card"
import LottieHero from "../../components/heroAnimation"
import { esgData } from "../../data/data"
import Path from "../../components/path"
import { Helmet } from "react-helmet-async"

const ESG = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div className="pages">
        <Helmet>
            <title>ESG | Intellectra</title>
            {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
        </Helmet>
        <LottieHero/>
        <div className="pt-32 px-5 sm:px-16 md:px-32 ">
            <div className="blur-bg radius-border flex flex-col gap-3 content-about p-4 sm:p-6  md:p-10 lg:p-16">

                <Path first={"About"} second={"ESG"} link={"/about"} />
                <h1>Our Commitment to ESG</h1>
                <h3 className="des-pages" >{esgData.description}</h3>
            </div>
           <div className="container-cards flex-wrap py-10 justify-between">
                {esgData.children.map((ele,idx)=>(<Card key={`ESG_Card_${ele.title}_${idx}`} 
                                                             img={ele.img}
                                                             description={ele.description}
                                                             title={ele.title}
                                                             type="esg"
                                                             content={ele.content}
                                                             subTitle={ele.subTitle} />))}

            </div>

        </div>

    </div>)
}
export default ESG