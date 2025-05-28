import { useEffect, useState } from "react"
import Hero from "../../components/hero"
import LottieHero from "../../components/heroAnimation"
import { Helmet } from "react-helmet-async"
import {  contactData, hostCanonical } from "../../data/data"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"


const Contact = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])

    return(<div>
        <Navbar/>
        <LottieHero/>
        <Helmet>
            <title>Contact Us | Intellectra</title>
            <link rel="canonical" href={`${hostCanonical}/contact`} />
        </Helmet>
        <div className="pages" style={{background:"white"}}>
            <Hero data={[{
                    words : "Let's Connect",
                    des : "Start the conversation—our team is ready to assist you"
            }]} />
            <div className="layout-details pt-32 px-5 sm:px-16 md:px-32 pb-16">
              <div className="flex gap-10 blog-details w-full">
                <div className="blog-first  blur-bg radius-border flex flex-col gap-3 ">
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
                <div className="blur-bg blog-second radius-border flex flex-col gap-3  px-5 pb-4 ">
                    <div className="content-sticky ">
                        <h2 className="path mb-5">Contact Info</h2>
                        <p className="mb-5"> Whether you have a question, need support, or are interested in learning more about our solutions, we're here to help.</p>
                        <div className="flex flex-col gap-5">{
                            contactData.map((e,idx)=>(<Link to={`${e.link}`} target="_blank"  key={`contact_Info_${e.title}_${idx}`}>
                            <div className="flex gap-2 p-4  contact-card side-blog">
                                <div className="w-20    ">{e.icon}</div>
                                <div className="w-full flex flex-col justify-center">
                                    <h3>{e.value}</h3> 
                                    
                                </div>

                            </div>
                            </Link>))
                        }</div>
                    </div>
                </div>
            </div>  
            </div>
        </div>
        <Footer/>
    </div>)
}

export default Contact