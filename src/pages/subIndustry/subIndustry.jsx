// import { useParams } from "react-router-dom"
// import robot from "../../assets/images/robot.webp"
// import LottieHero from "../../components/heroAnimation"
// import { useEffect, useState } from "react"
// import { hostCanonical, industryData, solutionData } from "../../data/data"
// import Path from "../../components/path"
// import Card from "../../components/card"
// import { Helmet } from "react-helmet-async"

// const SubIndustry = () => {
//     const { name } = useParams()
//     const [data, setData] = useState({})
//     const [solutions, setSolutions] = useState([])
//     useEffect(() => {
//         window.scrollTo({ top: 0, behavior: "smooth" })
//         setData(industryData.children.find((e) => e.link == `/industries/${name}`))
        // const temp = solutionData.children;


        // const getThreeUniqueItems = (array) => {
        //     if (!Array.isArray(array)) return [];

        //     const shuffled = [...array].sort(() => 0.5 - Math.random());
        //     return shuffled.slice(0, 2);
        // };

        // const threeItems = getThreeUniqueItems(temp);
        // setSolutions(threeItems);
//     }, [name])
//     return (<div>
//         <LottieHero />
//         <Helmet>
//             <title>{"title" in data ? data.title : ""} | Intellectra</title>
//             <link rel="canonical" href={`${hostCanonical}/${"link" in data && data.link}`} />
//         </Helmet>
//         <div className="robot-card  pt-32 px-5 sm:px-16 md:px-32  ">
//             <div className="blur-bg  radius-border flex gap-3 flex-col robot-card p-4 sm:p-6  md:p-10 lg:p-16 ">
//                 <Path first={"Industries"} second={data.title} link={"/industries"} />
//                 <div className="flex  flex-col gap-2">
//                     <h1>{data.title}</h1>
//                     <p>{data.subTitle}</p>
//                     <div className="des">
//                         {data.description}
//                     </div>
//                 </div>
//                 <div className="container-image-abs">
//                     <img src={robot} alt="Robot" />
//                 </div>

//             </div>

//         </div>
//         <div className=" container-cards flex-wrap py-10  px-5 sm:px-16 md:px-32   justify-between">
//             {solutions.length > 0 && solutions.map((ele, idx) => (<Card key={`solutions_Card_${ele.title}_${idx}`}
//                 img={ele.img}
//                 description={ele.description}
//                 title={ele.title}
//                 link={ele.link}
//                 type="solutions"
//                 subTitle={ele.subTitle} />))}
//         </div>
//     </div>)
// }
// export default SubIndustry


import { useEffect, useState } from "react"
import Hero from "../../components/hero"
import LottieHero from "../../components/heroAnimation"
import { Helmet } from "react-helmet-async"
import { industryData, hostCanonical } from "../../data/data"
import { Link, useParams } from "react-router-dom"


const SubIndustry = ()=>{
    const { name } = useParams()
    const [ data , setData ] = useState({})
    const [ randomData, setRandomData ] = useState([])
    useEffect(()=>{
        window.scrollTo({top:0,behavior: "smooth"})
        setData(industryData.children.find((e) => e.link == `/industries/${name}`))
        const temp = industryData.children;


        const getThreeUniqueItems = (array) => {
            if (!Array.isArray(array)) return [];

            const shuffled = [...array].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 5);
        };

        const threeItems = getThreeUniqueItems(temp);
        setRandomData(threeItems);
    },[name])
    return(<div>
        <LottieHero/>
        <Helmet>
            <title>{"title" in data? data.title:""} | Intellectra</title>
            <link rel="canonical" href={`${hostCanonical}/${"link" in data && data.link}`} />
        </Helmet>
        <div className="pages" style={{background:"white"}}>
            <Hero data={[{
                    words : "title" in data? data.title:"",
                    des : data.subTitle
            }]} />
            <div className="layout-details pt-32 px-5 sm:px-16 md:px-32 pb-16">
              <div className="flex gap-10 blog-details w-full">
                <div className="blog-first  blur-bg radius-border flex flex-col gap-3 ">
                    <div className="w-full">
                        <img className="w-full" src={data.image} alt={data.title} />
                    </div>
                    <div className="date flex items-center gap-2">
                        {/* <div className="flex items-center ">{calendar}</div> */}
                        <div className="flex items-center ">{data.date}</div>
                    </div>
                    <h1>{ Object.keys(data).length>0 && data.title} </h1>
                    <p>{data.subTitle}</p>
                    <div className="des flex flex-col content-sperate gap-2">
                        {data.description}
                    </div>
                </div>
                <div className="blur-bg blog-second radius-border flex flex-col gap-3  px-5 py-4 ">
                    <div className="content-sticky">
                        <h2 className="path mb-5">Related Solutions</h2>
                        <div className="flex flex-col gap-5">{
                            randomData.length > 0 &&  randomData.map((e,idx)=>{
                                if( idx <   5 ){
                                    return <Link to={`${e.link}`}  key={`Solution_Details_${e.title}_${idx}`}>
                                    <div className="flex  card-sperate p-4">
                                        <div className="content-first flex justify-center">{e.img}</div>
                                        <div className="content-second flex flex-col justify-center">
                                            <h2>{e.title}</h2>
                                        
                                        </div>
                                    </div>
                                    </Link>
                                }
                            })
                        }</div>
                        <div className="pt-5"><Link to={"/industries"}><span className="learn">See More</span> </Link></div>
                    </div>
                </div>
            </div>  
            </div>
        </div>
    </div>)
}

export default SubIndustry