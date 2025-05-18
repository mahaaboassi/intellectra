// Images
import img_1 from "../../../assets/images/ai.webp"
import img_2 from "../../../assets/images/700x600.png"
import img_3 from "../../../assets/images/cloud.jpg"
import img_4 from "../../../assets/images/5x5c.png"
import img_5 from "../../../assets/images/solutionSection.jpg"

// components/MySwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Latest = ()=>{
    const data = [
        {
            id: 1,
            title: "How AI is Revolutionizing Business Operations",
            description: "Artificial Intelligence is transforming industries by automating tasks, enhancing decision-making, and personalizing customer experiences. Learn how businesses are leveraging AI for growth and efficiency.",
            image: img_1,
            date: "2025-02-25",
            author: "INTELLECTRA admin",
            hashtag: ["#AI" ,"#Business"]
        },
        {
            id: 2,
            title: "The Future of Cloud Computing: Trends to Watch",
            description: "Cloud computing is evolving rapidly, with trends like multi-cloud strategies, serverless computing, and AI-driven cloud services shaping the industry. Discover what the future holds for cloud technology.",
            image: img_3,
            date: "2025-02-25",
            author: "INTELLECTRA admin",
            hashtag: ["#CloudComputing"]
        },
        { 
            id: 3,
            title: "Technology Services: Why Businesses Need Digital Transformation",
            description: "In today's competitive market, technology services play a crucial role in digital transformation. From cybersecurity to IT consulting, explore why businesses must adapt to modern technology solutions.",
            image: img_2,
            date: "2025-02-25",
            author: "INTELLECTRA admin",
            hashtag: ["#Technology", "#DigitalTransformation"]
        },
        {
            id: 4,
            title: "Cybersecurity in the Age of Remote Work",
            description: "As remote work becomes the norm, cybersecurity threats are on the rise. Learn how companies are protecting their data and infrastructure in this new work environment.",
            image: img_4,
            date: "2025-02-26",
            author: "INTELLECTRA admin",
            hashtag: ["#Cybersecurity"]
        },
        {
            id: 5,
            title: "Harnessing Big Data for Business Insights",
            description: "Big Data is more than just a buzzword—it's a powerful tool for gaining insights, predicting trends, and making data-driven decisions. See how organizations are capitalizing on data analytics.",
            image: img_5,
            date: "2025-02-27",
            author: "INTELLECTRA admin",
            hashtag: ["#BigData", "#Analytics"]
        }
    ];
    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 29 46" fill="none">
                    <path d="M0 40.595L17.9244 23L0 5.405L5.51822 0L29 23L5.51822 46L0 40.595Z" fill="white"/>
                </svg>
    const nextSlider = ()=> document.querySelector(".swiper-button-next").click()
    const lastSlider = ()=> document.querySelector(".swiper-button-prev").click()
    return(<div className='latest  py-5 md:py-10 lg:py-20'>
        <div onClick={nextSlider} className="arrow-next">{arrow}</div>
        <div onClick={lastSlider} className="arrow-prev">{arrow}</div>
        <div className="px-5 sm:px-16 md:px-32">
            <h2 className='text-center pb-10'>What’s New in Tech</h2>
            <div >
                <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        autoplay={{ delay: 6000 }}
                        loop={true}
                        breakpoints={{
                            0: {
                            slidesPerView: 1,
                            },
                            640: {
                            slidesPerView: 1,
                            },
                            768: {
                            slidesPerView: 2,
                            },
                            1024: {
                            slidesPerView: 3,
                            },
                            1280: {
                            slidesPerView: 4,
                            },
                        }}
                        >
                    
                        {data.map((ele,idx)=>( <SwiperSlide key={`News_Latest_${ele.title}_${idx}`}>
                            <div className="blog flex flex-col gap-3">
                                <div className='container-img'>
                                    <img src={ele.image} alt={ele.title}/>
                                </div>
                                <div className='flex gap-2'>
                                    {ele.hashtag.map((hash,index)=>(<div className='hastag p-1' key={`Hashtag_${hash}_${index}_${idx}`}>
                                        {hash}
                                    </div>))}
                                </div>
                                <h3>{ele.title}</h3>
                                <p>{ele.description.substring(0,80)+"..."}</p>
                                <div><span className='learn'>Learn More</span></div>
                            </div>
                        </SwiperSlide>))}

                        </Swiper>
            </div>
        </div>
    </div>)
}
export default Latest