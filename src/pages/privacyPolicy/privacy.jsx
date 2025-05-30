import { useEffect } from "react"
import Hero from "../../components/hero"
import LottieHero from "../../components/heroAnimation"
import { Helmet } from "react-helmet-async"
import { hostCanonical, privacyPolicy } from "../../data/data"


const PrivacyPolicy = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
        <LottieHero/>
        <Helmet>
            <title>Privacy Policy | INTELLECTRA</title>
            <link rel="canonical" href={`${hostCanonical}/privacy-policy`} />
        </Helmet>
        <div className="pages relative" style={{background:"white"}}>
            <Hero data={[{
                    words : "Privacy Policy",
                    des : "See how we protect your data. Read our policy"
            }]} />
            <div className="layout pt-32 px-5 sm:px-16 md:px-32 pb-16">
                <div className="blur-bg radius-border flex flex-col gap-3">
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

        </div>
    </div>)
}

export default PrivacyPolicy