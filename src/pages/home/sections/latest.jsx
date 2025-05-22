
// components/MySwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { dataBlog } from '../../../data/data';
import { Link } from 'react-router-dom';

const Latest = ()=>{

    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 29 46" fill="none">
                    <path d="M0 40.595L17.9244 23L0 5.405L5.51822 0L29 23L5.51822 46L0 40.595Z" fill="white"/>
                </svg>
    const nextSlider = ()=> document.querySelector(".swiper-button-next").click()
    const lastSlider = ()=> document.querySelector(".swiper-button-prev").click()
    return(<div className='latest  py-5 md:py-10 lg:py-20'>
        <div onClick={nextSlider} className="arrow-next">{arrow}</div>
        <div onClick={lastSlider} className="arrow-prev">{arrow}</div>
        <div className="px-5 sm:px-16 md:px-32">
            <div className='flex flex-col gap-2 pb-10'>
                <h2 className='text-center '> Pulse</h2>
                <p className='text-center '>Wired for Tomorrow: What’s Shaping the Digital World Today</p>
            </div>
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
                    
                        {dataBlog.map((ele,idx)=>( <SwiperSlide key={`News_Latest_${ele.title}_${idx}`}>
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
                                <Link to={`/news/${ele.link}`}><div><span className='learn'>Learn More</span></div></Link>
                            </div>
                        </SwiperSlide>))}

                        </Swiper>
            </div>
        </div>
    </div>)
}
export default Latest