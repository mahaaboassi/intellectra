import { useParams } from "react-router-dom"
import robot from "../../assets/images/robot (8).webp"
import LottieHero from "../../components/heroAnimation"
import { useEffect, useState } from "react"
import { solutionData } from "../../data/data"
import Path from "../../components/path"

const SubSolution = ()=>{
    const { name } = useParams()
    const [ data , setData ] = useState({})
    useEffect(()=>{
        window.scrollTo({top:0,behavior: "smooth"})
        setData(solutionData.children.find(( e)=> e.link == `/solutions/${name}`))
    },[name])
    return(<div>
        <LottieHero/>
        <div className="robot-card pt-32 px-5 sm:px-16 md:px-32  pb-10">
            <div className="blur-bg radius-border flex gap-3 flex-col robot-card p-4 sm:p-6  md:p-10 lg:p-16 ">
                <Path first={"Solution"} second={data.title} link={"/solutions"}/>
                <div className="flex  flex-col gap-2">
                    <h1>{data.title}</h1>
                    <p>{data.subTitle}</p>
                    <div className="des flex flex-col gap-2">
                        {data.description}
                        <ul className="flex flex-wrap gap-10 mt-10">
                            {data && "content" in data && data.content.map((e,idx)=>(<li className="!p-5 justify-center items-center text-center flex w-full" key={`Content_Solution_${e}_${idx}`}>{e}</li>))}
                        </ul>
                    </div>
                    
                </div>
                <div className="container-image-abs">
                    <img src={robot} alt="Robot" />
                </div>
            </div>
            
        </div>
    </div>)
}
export default SubSolution