import Card from "../../components/card"
import LottieHero from "../../components/heroAnimation"
import { solutionData } from "../../data/data"


const Solutions = ()=>{
    return(<div className="industry pages">
        <LottieHero/>
        <div className="pt-32 px-5 sm:px-16 md:px-32 ">
            <div className="blur-bg radius-border content-about sm:p-6  md:p-10 lg:p-16">
                <div className="des-pages" >{solutionData.description}</div>
            </div>
           <div className=" container-cards flex-wrap py-10 justify-between">
                {solutionData.children.map((ele,idx)=>(<Card key={`solutions_Card_${ele.title}_${idx}`} 
                                                             img={ele.img}
                                                             description={ele.description}
                                                             title={ele.title}
                                                             link={ele.link}
                                                             type="solutions"
                                                             subTitle={ele.subTitle} />))}

            </div>

        </div>

    </div>)
}
export default Solutions