import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { dataBlog, hostCanonical } from "../../data/data"
import LottieHero from "../../components/heroAnimation"
import Path from "../../components/path"
import Latest from "../home/sections/latest"
import { Helmet } from "react-helmet-async"

const Blog = ()=>{
    const { title } = useParams()
    const [ data, setData ] = useState({})
    useEffect(()=>{
        setData(dataBlog.find((e)=> e.link == title))
        window.scrollTo({ top: 0, behavior: "smooth" })     
    },[title])
    const calendar = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <g clipPath="url(#clip0_1222_36636)">
        <path d="M1.5 2C1.23478 2 0.98043 2.10536 0.792893 2.29289C0.605357 2.48043 0.5 2.73478 0.5 3V12.5C0.5 12.7652 0.605357 13.0196 0.792893 13.2071C0.98043 13.3946 1.23478 13.5 1.5 13.5H12.5C12.7652 13.5 13.0196 13.3946 13.2071 13.2071C13.3946 13.0196 13.5 12.7652 13.5 12.5V3C13.5 2.73478 13.3946 2.48043 13.2071 2.29289C13.0196 2.10536 12.7652 2 12.5 2H10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.5 5.5H13.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 0.5V3.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 0.5V3.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 2H8.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1222_36636">
        <rect width="14" height="14" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    return(<div className="">
        <Helmet>
            <title> Pulse | Intellectra</title>
            <link rel="canonical" href={`${hostCanonical}/news/${"link" in data && data.link}`} />
        </Helmet>
        <LottieHero/>
        <div className="pt-32 px-5  pb-14 sm:px-16 md:px-32">
            <div className="flex gap-2 blog-details w-full">
                <div className="blog-first  blur-bg radius-border flex flex-col gap-3 content-about p-4 sm:p-6  md:p-10 lg:p-16">
                    <Path first={"Home"} link={"/"} second={"Latest News"} />
                    <div className="w-full">
                        <img className="w-full" src={data.image} alt={data.title} />
                    </div>
                    <div className="date flex items-center gap-2">
                        <div className="flex items-center ">{calendar}</div>
                        <div className="flex items-center ">{data.date}</div>
                    </div>
                    <h1>{ Object.keys(data).length>0 && data.title} </h1>
                    <div className="des" >
                        {data.description}
                    </div>
                </div>
                <div className="blur-bg blog-second radius-border flex flex-col gap-3 content-about px-5 py-4 sm:py-6  md:py-10 lg:py-16">
                    <div className="content-sticky">
                        <h2 className="path mb-5">Latest News</h2>
                        <div className="flex flex-col gap-5">{
                            dataBlog.map((e,idx)=>(<Link to={`/news/${e.link}`}  key={`Latest_Blog_Inside_Details_${e.title}_${idx}`}>
                            <div className="flex gap-3 side-blog">
                                <div className="content-first "><img className="w-full h-20 object-cover" src={e.image} alt={e.title} /></div>
                                <div className="content-second flex flex-col justify-center">
                                    <h2>{e.title}</h2> 
                                    <div className="date flex items-center gap-2">
                                        <div className="flex items-center ">{calendar}</div>
                                        <div className="flex items-center ">{e.date}</div>
                                    </div>   
                                </div>

                            </div>
                            </Link>))
                        }</div>
                    </div>
                </div>
            </div>
        </div>


    </div>)
}

export default Blog