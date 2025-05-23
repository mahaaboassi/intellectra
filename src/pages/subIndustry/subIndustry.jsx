import { useParams } from "react-router-dom"
import robot from "../../assets/images/robot.webp"
import LottieHero from "../../components/heroAnimation"
import { useEffect, useState } from "react"
import { hostCanonical, industryData, solutionData } from "../../data/data"
import Path from "../../components/path"
import Card from "../../components/card"
import { Helmet } from "react-helmet-async"

const SubIndustry = () => {
    const { name } = useParams()
    const [data, setData] = useState({})
    const [solutions, setSolutions] = useState([])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setData(industryData.children.find((e) => e.link == `/industries/${name}`))
        const temp = solutionData.children;


        const getThreeUniqueItems = (array) => {
            if (!Array.isArray(array)) return [];

            const shuffled = [...array].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 2);
        };

        const threeItems = getThreeUniqueItems(temp);
        setSolutions(threeItems);
    }, [name])
    return (<div>
        <LottieHero />
        <Helmet>
            <title>{"title" in data ? data.title : ""} | Intellectra</title>
            <link rel="canonical" href={`${hostCanonical}/${"link" in data && data.link}`} />
        </Helmet>
        <div className="robot-card  pt-32 px-5 sm:px-16 md:px-32  ">
            <div className="blur-bg  radius-border flex gap-3 flex-col robot-card p-4 sm:p-6  md:p-10 lg:p-16 ">
                <Path first={"Industries"} second={data.title} link={"/industries"} />
                <div className="flex  flex-col gap-2">
                    <h1>{data.title}</h1>
                    <p>{data.subTitle}</p>
                    <div className="des">
                        {data.description}
                    </div>
                </div>
                <div className="container-image-abs">
                    <img src={robot} alt="Robot" />
                </div>

            </div>

        </div>
        <div className=" container-cards flex-wrap py-10  px-5 sm:px-16 md:px-32   justify-between">
            {solutions.length > 0 && solutions.map((ele, idx) => (<Card key={`solutions_Card_${ele.title}_${idx}`}
                img={ele.img}
                description={ele.description}
                title={ele.title}
                link={ele.link}
                type="solutions"
                subTitle={ele.subTitle} />))}
        </div>
    </div>)
}
export default SubIndustry