// import { useEffect } from "react"
// import LottieHero from "../../components/heroAnimation"
// import Path from "../../components/path"
// import { hostCanonical, termsAndConsitionData } from "../../data/data"
// import { Helmet } from "react-helmet-async"


// const TermsAndConditions = ()=>{
//     useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
//     return(<div className="contact pages">
//         <LottieHero/>
//         <Helmet>
            // <title>Terms And Conditions | Intellectra </title>
            // <link rel="canonical" href={`${hostCanonical}/terms-&-conditions`} />
//         </Helmet>
//         <div className="pt-32 pb-14 px-5 sm:px-16 md:px-32 ">
//             <div className="blur-bg radius-border flex flex-col gap-3 content-about p-4 sm:p-6  md:p-10 lg:p-16">
//                 <Path first={"Home"} link={"/"} second={"Terms And Conditions"} />
//                 <h1>Terms And Conditions</h1>
//                 <div className="des" >
//                     {termsAndConsitionData.children.map((ele, idx)=>(<div className="mb-4" key={`Terms_${ele.title}_${idx}`}>
//                             <h3>{ele.title}</h3>
//                             <p>{ele.description}</p>
//                     </div>))}

//                 </div>
//             </div>

//         </div>

//     </div>)
// }
// export default TermsAndConditions

import { useEffect } from "react"
import Hero from "../../components/hero"
import LottieHero from "../../components/heroAnimation"
import { Helmet } from "react-helmet-async"
import { hostCanonical, termsAndConsitionData } from "../../data/data"


const TermsAndConditions = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div>
        <LottieHero/>
        <Helmet>
            <title>Terms And Conditions | Intellectra </title>
            <link rel="canonical" href={`${hostCanonical}/terms-&-conditions`} />
        </Helmet>
        <div className="pages" style={{background:"white"}}>
            <Hero data={[{
                    words : "Terms And Conditions",
                    des : "Know your rights and responsibilities. Read our terms"
            }]} />
            <div className="layout pt-32 px-5 sm:px-16 md:px-32 pb-16">
                <div className="blur-bg radius-border flex flex-col gap-3">
                <div className="des" >
                    {termsAndConsitionData.children.map((ele, idx)=>(<div className="mb-4" key={`Terms_${ele.title}_${idx}`}>
                            <h3>{ele.title}</h3>
                            <p>{ele.description}</p>
                    </div>))}

                </div>          
            </div>
                
            </div>

        </div>
    </div>)
}

export default TermsAndConditions