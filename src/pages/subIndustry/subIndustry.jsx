import { useParams } from "react-router-dom"
import robot from "../../assets/images/robot.webp"
import LottieHero from "../../components/heroAnimation"
import { useEffect, useState } from "react"
import { industryData } from "../../data/data"
import Path from "../../components/path"

const SubIndustry = ()=>{
    const { name } = useParams()
    const [ data , setData ] = useState({})
    useEffect(()=>{
        window.scrollTo({top:0,behavior: "smooth"})
        setData(industryData.children.find(( e)=> e.link == `/industry/${name}`))
    },[name])
    return(<div>
        <LottieHero/>
        <div className="robot-card pt-32 px-5 sm:px-16 md:px-32  pb-10">
            <div className="blur-bg flex gap-10 flex-col robot-card p-4 sm:p-6  md:p-10 lg:p-16 ">
                <Path first={"Industry"} second={data.title} link={"/industry"} />
                <div className="flex  flex-col gap-2">
                    <h1>{data.title}</h1>
                    <p>{data.subTitle}</p>
                    <div className="des">
                        {data.description}
                    </div>
                </div>
                <img src={robot} alt="Robot" />
            </div>
            
        </div>
    </div>)
}
export default SubIndustry