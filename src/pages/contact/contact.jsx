import { useEffect } from "react"
import LottieHero from "../../components/heroAnimation"
import Path from "../../components/path"


const Contact = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    return(<div className="contact pages">
        <LottieHero/>
        <div className="pt-32 px-5 pb-14 sm:px-16 md:px-32 ">
            <div className="blur-bg radius-border flex flex-col gap-3 content-about p-4 sm:p-6  md:p-10 lg:p-16">
                <Path first={"Home"} link={"/"} second={"Contact"} />
                <h1>Contact Us </h1>
                <div className="des" >
                    <form  className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                            <div className="w-full">
                                <input className="w-full" placeholder="Name"  />
                            </div>
                            <div className="w-full">
                                <input className="w-full" placeholder="Email"  />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="w-full">
                                <input className="w-full" placeholder="Company"  />
                            </div>
                            <div className="w-full">
                                <input className="w-full" placeholder="Job Title"  />
                            </div>
                        </div>
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="w-full">
                                <input className="w-full" placeholder="Country"  />
                            </div>
                            <div className="w-full ">
                                <input type="number" className="w-full" placeholder="Phone"  />
                            </div>
                        </div>
                        <div>
                            <textarea className="w-full" placeholder="Message" rows={4} />
                        </div>
                        <div className="flex justify-center">
                            <button>Submit</button>
                        </div>

                    </form>

                </div>
            </div>
        

        </div>

    </div>)
}
export default Contact