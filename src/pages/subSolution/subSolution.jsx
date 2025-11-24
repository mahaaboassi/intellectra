
import { useEffect, useState } from "react"
import Hero from "../../components/hero"
import LottieHero from "../../components/heroAnimation"
import Card from "../../components/card"
import { Helmet } from "react-helmet-async"
import { hostCanonical, solutionData } from "../../data/data"
import { useNavigate, useParams } from "react-router-dom"
import { nav } from "framer-motion/client"


const SubSolution = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
        const { name } = useParams()
    const [ data , setData ] = useState({})
    useEffect(()=>{
        window.scrollTo({top:0,behavior: "smooth"})
        const value = solutionData.children.find((e) => e.link == `/solutions/${name}`)
        if(!value) navigate("/404")
        setData(value)
    
    },[name])
    return(<div>
        <LottieHero/>
         <Helmet>
            <title>{"title" in data? data.title:""} | INTELLECTRA</title>
            <link rel="canonical" href={`${hostCanonical}${"link" in data && data.link}`} />
        </Helmet>
        <div className="pages relative" style={{background:"white"}}>
            <Hero label={" OTHER SOLUTIONS "} link={"/solutions"} data={[{
                    words : data.heading && data.heading.title,
                    des :  data.heading && data.heading.subTitle
            }]} />
            <div className="layout pt-32 px-5 sm:px-16 md:px-32">
                {data.finalDescription}
                <div className="container-about gap-10 py-10">
                    {data && data.srcImg && data.srcImg.length > 0 && data.srcImg.map((e,i)=>{
                        if(i==0){
                            return(<div key={`Sub_Solutions_Image_${i}_${"title" in data? data.title:""}`} className="w-full flex justify-end"><img  className="layout-one" src={e} alt={"title" in data? data.title:"image"} /></div>)
                        }else{
                            return(<div key={`Sub_Solutions_Image_${i}_${"title" in data? data.title:""}`} className="w-full"><img className="layout-two" src={e} alt={"title" in data? data.title+"_":"image"} /></div>)
                        }
                    })}
                </div>
                
            </div>
            <div style={{background:"white"}} className="px-3 sm:px-14 md:px-30 container-cards flex-wrap py-10  justify-between">
                {data && data.capabilities && data.capabilities.children.length > 0 && data.capabilities.children.map((ele,idx)=>(<Card key={`Sub_Solutions_Card_${ele.title}_${idx}`} 
                                                              description={ele.description}
                                                              title={ele.title}
                                                              type="industry"
                                                             />))}
            </div>
        </div>
    </div>)
}

export default SubSolution