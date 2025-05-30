import { useEffect, useState } from "react"
import Hero from "../../components/hero"
import LottieHero from "../../components/heroAnimation"
import { Helmet } from "react-helmet-async"
import {  contactData, hostCanonical } from "../../data/data"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import logo from "../../assets/images/logo.webp"
// for validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format') // Ensures the email is valid
    .required('Email is required'),
    name: Yup.string().min(2,"Name must be at least 2 characters long").required('Name is required'),
    company: Yup.string().min(2,"Name must be at least 2 characters long"),
    job_title: Yup.string(), 
    country : Yup.string(), 
    phone : Yup.string().matches(/^[0-9+\-() ]*$/, 'Phone number is not valid'),   
    message : Yup.string().min(2,"Name must be at least 2 characters long").required('Message is required'),   
  });

const Contact = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])
    const { register, handleSubmit, formState: { errors } } = useForm(
        {resolver: yupResolver(validationSchema), 
            mode: 'onChange'   }
    );
    const [ loading, setLoading ] = useState(false)
    const [ openPopup, setOpenPopup ] = useState({
        isOpen : false,
        message : <></>
    })
    const onSubmit = async(value)=>{
        console.log(value);
        return
        
        setLoading(true)
        const temp = {}
        temp.body = ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
                        <h2 style="color: #2c3e50; text-align: center;">📩 New Contact Message</h2>

                        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Name:</td>
                            <td style="padding: 8px; color: #555;">${value.name || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
                            <td style="padding: 8px; color: #555;">${value.email || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Company:</td>
                            <td style="padding: 8px; color: #555;">${value.company || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Country:</td>
                            <td style="padding: 8px; color: #555;">${value.country || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Job Title:</td>
                            <td style="padding: 8px; color: #555;">${value.job_title || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td>
                            <td style="padding: 8px; color: #555;">${value.phone || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Message:</td>
                            <td style="padding: 8px; color: #555;">${value.message || '-'}</td>
                        </tr>
                        </table>

                        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ccc;" />
                        <p style="font-size: 13px; color: #888; text-align: center;">This message was submitted from the website contact form.</p>
                    </div>`

        temp.subject = "New Contact Form Submission from Intellectra Website"
        temp.to = "eng.mahaab96@gmail.com"

        const res = await fetch("http://localhost:5000/api/sendMail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(temp),
        });
        const data = await res.json();
        if (data.success) {
            setOpenPopup({
                    isOpen : true,
                    message : <>
                        <p><strong>Thank you for reaching out to us!</strong> </p>
                        <p className="py-2">Your message has been successfully sent. </p> 
                        <p>Our team will get back to you as soon as possible.</p>
                    </>
                })
                setLoading(false)
        } else {
                setOpenPopup({
                    isOpen : true,
                    message : <>
                        <p><strong>Oops! Something went wrong.</strong></p>
                        <p className="py-2">We couldn't send your message.</p>
                        <p>Please try again in a moment.</p>
                    </>
                })
                 setLoading(false)
        }
    }
    const reset = ()=> setOpenPopup({
        isOpen : false,
        message : <></>
    })
    return(<div>
        {openPopup.isOpen && <div className="pop-up p-12">
            <div className="flex justify-center  ">
                <img className="w-42" src={logo} alt="logo" />
            </div>
            <div className="py-4">
                {openPopup.message}
            </div>
            <div className="flex justify-center">
                <button onClick={reset}>Close</button>
            </div>
        </div>}
        <Navbar/>
        <LottieHero/>
        <Helmet>
            <title>Contact Us | INTELLECTRA</title>
            <link rel="canonical" href={`${hostCanonical}/contact`} />
        </Helmet>
        <div className="pages" style={{background:"white"}}>
            <Hero data={[{
                    words : "Let's Connect",
                    des : "Start the Conversation — Our Team Is Ready to Assist You"
            }]} />
            <div className="layout-details pt-32 px-5 sm:px-16 md:px-32 pb-16">
              <div className="flex gap-10 blog-details w-full">
                <div className="blog-first  blur-bg radius-border flex flex-col gap-3 ">
                     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                            <div className="w-full">
                                <input {...register("name")} className="w-full" placeholder="Name"  />
                                {errors.name && <p className="p-0.5 text-error">{errors.name.message}</p>}
                            </div>
                            <div className="w-full">
                                <input {...register("email")} className="w-full" placeholder="Email"  />
                                {errors.email && <p className="p-0.5 text-error">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="w-full">
                                <input {...register("company")} className="w-full" placeholder="Company"  />
                                {errors.company && <p className="p-0.5 text-error">{errors.company.message}</p>}
                            </div>
                            <div className="w-full">
                                <input {...register("job_title")} className="w-full" placeholder="Job Title"  />
                                {errors.job_title && <p className="p-0.5 text-error">{errors.job_title.message}</p>}
                            </div>
                        </div>
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="w-full">
                                <input {...register("country")} className="w-full" placeholder="Country"  />
                                {errors.country && <p className="p-0.5 text-error">{errors.country.message}</p>}
                            </div>
                            <div className="w-full ">
                                <input {...register("phone")} type="number" className="w-full" placeholder="Phone"  />
                                {errors.phone && <p className="p-0.5 text-error">{errors.phone.message}</p>}
                            </div>
                        </div>
                        <div>
                            <textarea {...register("message")} className="w-full" placeholder="Message" rows={4} />
                            {errors.message && <p className="p-0.5 text-error">{errors.message.message}</p>}
                        </div>
                        <div className="flex justify-center ">
                            <button className="relative w-30 h-10 flex justify-center items-center" type="submit">{loading ?  <span class="spinner"></span>  :"Submit"}</button>
                        </div>

                    </form>
                </div>
                <div className="blur-bg blog-second radius-border flex flex-col gap-3  px-5 pb-4 ">
                    <div className="content-sticky ">
                        <h2 className="path mb-5">Contact Info</h2>
                        <p className="mb-5"> 
                            Whether you have a question, need support, or are interested in learning more about our solutions, we're here to help.
                            </p>
                        <div className="flex flex-col gap-5">{
                            contactData.map((e,idx)=>(<Link to={`${e.link}`} target="_blank"  key={`contact_Info_${e.title}_${idx}`}>
                            <div className="flex gap-2 p-4  contact-card side-blog">
                                <div className="w-20 flex items-center   ">{e.icon}</div>
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