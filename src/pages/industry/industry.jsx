import Card from "../../components/card"
import LottieHero from "../../components/heroAnimation"
import { industryData } from "../../data/data"

const Industry = ()=>{
    return(<div className="industry pages">
        <LottieHero/>
        <div className="pt-32 px-5 sm:px-16 md:px-32 ">
            <div className="blur-bg radius-border content-about sm:p-6  md:p-10 lg:p-16">
                <div className="des-pages" >{industryData.description}</div>
            </div>
           <div className=" container-cards flex-wrap py-10 justify-between">
                {industryData.children.map((ele,idx)=>(<Card key={`industry_Card_${ele.title}_${idx}`} 
                                                             img={ele.img}
                                                             description={ele.description}
                                                             title={ele.title}
                                                             type="industry"
                                                             link={ele.link}
                                                             subTitle={ele.subTitle} />))}

            </div>

        </div>

    </div>)
}
export default Industry