import { useEffect } from "react"
import LottieHero from "../../components/heroAnimation"
import Path from "../../components/path"
import { privacyPolicy } from "../../data/data"


const PrivacyPolicy = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div className="contact pages">
        <LottieHero/>
        <div className="pt-32 pb-14 px-5 sm:px-16 md:px-32 ">
            <div className="blur-bg radius-border flex flex-col gap-3 content-about p-4 sm:p-6  md:p-10 lg:p-16">
                <Path first={"Home"} link={"/"} second={"Privacy Policy"} />
                <h1>Privacy Policy </h1>
                  <div className="des" >
                    {privacyPolicy.children.map((ele, idx)=>(<div className="mb-4" key={`Privacy${ele.title}_${idx}`}>
                            <h3>{ele.title}</h3>
                            <p>{ele.description}</p>
                            <ul className="mt-2">
                                {ele.content.map((e,i)=>(<li key={`Privacy${ele.title}_${i}_${e}`}>{e}</li>))}
                            </ul>
                    </div>))}

                </div>
            </div>

        </div>

    </div>)
}
export default PrivacyPolicy