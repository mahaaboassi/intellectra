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
            <title>{"title" in data? data.title:""} | INTELLECTRA</title>
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
                        <img className="w-full" src={data.srcImg} alt={data.title} />
                    </div>
                    <div className="date flex items-center gap-2">
                        {/* <div className="flex items-center ">{calendar}</div> */}
                        <div className="flex items-center ">{data.date}</div>
                    </div>
                    <h1>{ Object.keys(data).length>0 && data.title} </h1>
                    <p>{data.subTitle}</p>
                    <div className="des flex flex-col content-sperate gap-2">
                        {data.finalDescription}
                    </div>
                </div>
                <div className="blur-bg blog-second radius-border flex flex-col gap-3  px-5 pb-4 ">
                    <div className="content-sticky">
                        <h2 className="path mb-5">Related Industries</h2>
                        <div className="flex flex-col gap-5">{
                            randomData.length > 0 &&  randomData.map((e,idx)=>{
                                if( idx <   5 ){
                                    return <Link to={`${e.link}`}  key={`Industry_Details_${e.title}_${idx}`}>
                                    <div className="flex h-18 card-sperate p-4">
                                        <div className="content-first flex justify-center">{e.img}</div>
                                        <div className="content-second flex flex-col justify-center">
                                            <h3>{e.title}</h3>
                                        
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