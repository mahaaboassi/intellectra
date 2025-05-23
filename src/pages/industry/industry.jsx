// import Card from "../../components/card"
// import LottieHero from "../../components/heroAnimation"
// import { hostCanonical, industryData } from "../../data/data"
// import Path from "../../components/path"
// import { useEffect } from "react"
// import { Helmet } from "react-helmet-async"

// const Industry = ()=>{
//     useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
//     return(<div className="industry pages">
//         <Helmet>
//             <title>Industries | Intellectra</title>
//             <link rel="canonical" href={`${hostCanonical}/industries`} />
//         </Helmet>
//         <LottieHero/>
//         <div className="pt-32 px-5 sm:px-16 md:px-32 ">
//             <div className="blur-bg flex flex-col gap-3 radius-border content-about p-4 sm:p-6  md:p-10 lg:p-16">
//                 <Path first={"About"} second={"Industries"} link={"/about"} />
//                 <h1>Industries</h1>
//                 <h3 className="des-pages" >{industryData.description}</h3>
//             </div>
//            <div className=" container-cards flex-wrap py-10 justify-between">
//                 {industryData.children.map((ele,idx)=>(<Card key={`industry_Card_${ele.title}_${idx}`} 
//                                                              img={ele.img}
//                                                              description={ele.description}
//                                                              title={ele.title}
//                                                              type="industry"
//                                                              link={ele.link}
//                                                              subTitle={ele.subTitle} />))}

//             </div>

//         </div>

//     </div>)
// }
// export default Industry
import { useEffect } from "react"
import Hero from "../../components/hero"
import LottieHero from "../../components/heroAnimation"
import Card from "../../components/card"
import { Helmet } from "react-helmet-async"
import { hostCanonical, industryData } from "../../data/data"
// Images
import img_1 from "../../assets/images/1.webp"
import img_2 from "../../assets/images/2.webp"
import img_3 from "../../assets/images/3.webp"

const Industry = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
        <LottieHero/>
        <Helmet>
             <title>Industries | Intellectra</title>
             <link rel="canonical" href={`${hostCanonical}/industries`} />
        </Helmet>
        <div className="pages" style={{background:"white"}}>
            <Hero data={[{
                    words : "Empowering Intelligence through Technology",
                    des : "Enabling Agility, Operational Resilience, and Sustainable Impact"
            }]} />
            <div className="layout pt-32 px-5 sm:px-16 md:px-32">
                <p>
                    At INTELLECTRA, we deliver future-ready, technology-driven solutions that empower organizations across industries to thrive in a rapidly evolving digital world. By aligning strategic innovation with intelligent IT investments, we help businesses unlock new growth opportunities, streamline operations, and stay ahead of the curve. Our expertise in cutting-edge digital technologies, spanning AI, cloud, cybersecurity, IoT, and automation, enables us to create scalable, resilient, and high-performing environments that drive long-term success.
                </p>
                <div className="container-about gap-10 py-10">
                    <div className="w-full flex justify-end"><img  className="layout-one" src={img_2} alt="image" /></div>
                    <div className="w-full"><img className="layout-two" src={img_3} alt="image" /></div>

                </div>
                
            </div>
            <div style={{background:"white"}} className="px-3 sm:px-14 md:px-30 container-cards flex-wrap py-10    justify-between">
                {industryData.children.map((ele,idx)=>(<Card key={`industry_Card_${ele.title}_${idx}`} 
                                                              img={ele.img }
                                                              description={ele.description}
                                                              title={ele.title}
                                                              type="industry"
                                                              link={ele.link}
                                                              subTitle={ele.subTitle}  />))}
            </div>
        </div>
    </div>)
}

export default Industry