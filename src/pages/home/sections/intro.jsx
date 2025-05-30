import img_1 from "../../../assets/images/intelligent.webp"
import img_3 from "../../../assets/images/sec.webp"
import img_4 from "../../../assets/images/sec-1.webp"
import img_5 from "../../../assets/images/home_1.webp"

import img_6 from "../../../assets/images/home_2.webp"
import img_7 from "../../../assets/images/home_3.webp"
import img_8 from "../../../assets/images/home_4.webp"
import img_9 from "../../../assets/images/home_5.webp"

import img_10 from "../../../assets/images/home_6.webp"
import img_11 from "../../../assets/images/image_1.webp"
import img_12 from "../../../assets/images/image_5.webp"
import img_13 from "../../../assets/images/image_3.webp"

import { Link } from "react-router-dom"

const Intro = ()=>{

    const data = [{
        title : "Driving Digital Transformation with Innovation & Expertise",
        description : "We enable businesses to evolve, scale, and lead by delivering intelligent, future-ready ICT solutions. As a trusted technology partner, we craft tailored strategies that fuse technical excellence with business insight, ensuring seamless integration of complex systems and mission-critical architectures. Our solutions are designed to accelerate performance, enhance agility, and unlock new growth opportunities in an increasingly digital world.",
        images : [img_12,img_5,img_3,img_4],
        link : "/solutions/digital-transformation"
    },{
        title :  "Redefining Modern Workplaces with Blended Innovation & Functionality",
        description : "Our workplace modernization solutions empower organizations to create agile, collaborative, and secure environments that boost productivity and employee engagement. Through seamless integration of digital tools, smart infrastructure, and user-centric design, we transform traditional workspaces into intelligent ecosystems. From hybrid collaboration to space optimization, we deliver scalable solutions that align with your evolving business needs and future-proof your operations.",
        images : [img_9,img_6,img_7,img_8],
        link : "/solutions/workplace-modernization"
    },{
        title : "Unlocking the Transformative Potential of AI to Elevate Performance",
        description : "AI isn’t just technology, it’s a trusted partner in shaping a smarter, more responsible future. Through Responsible AI, we blend ethical frameworks with advanced machine learning, intelligent automation, and predictive analytics to deliver measurable business impact. From strategy and roadmap development to scalable deployment, our AI solutions empower organizations to make smarter decisions, streamline operations, and stay ahead in a competitive digital landscape.",
        images : [img_1,img_11,img_10,img_13],
        link : "/solutions/artificial-intelligence-(ai)"
    }]
    return( <div className="px-5  sm:px-16 md:px-32 py-10 md:py-20 lg:py-32 flex flex-col gap-10 md:gap-20 lg:gap-32">
        <div style={{background:"white"}} className="intro gap-10 ">
            <div  style={{position:"relative"}} className="w-full content-intro flex flex-col gap-2 ">
                <div className="flex gap-2">
                    <div><img  className="one" src={data[0].images[0]} alt="intelligent" /></div>
                    <div><img  className="two"  src={data[0].images[1]} alt="digital" /></div>
                </div>
                <div className="flex gap-2">
                    <div><img className="three" src={data[0].images[2]} alt="intelligent" /></div>
                    <div><img className="four"  src={data[0].images[3]} alt="digital" /></div>
                </div>
                <Link to={data[0].link}><div  className={`icon-center cursor-pointer`}>    
                       <div className="content-icon">
                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 68 68" fill="none">
                            <g clipPath="url(#clip0_313_546)">
                            <path d="M31.3064 2.69388C31.3064 2.33141 31.3795 1.98389 31.5112 1.66514C31.649 1.33311 31.8487 1.03594 32.0955 0.789128C32.5825 0.301595 33.2565 0 33.9997 0C34.3638 0 34.7119 0.0730469 35.0307 0.205306C35.0373 0.208073 35.0434 0.211393 35.0511 0.214714C35.3743 0.351953 35.6637 0.548405 35.905 0.789681C36.3925 1.27666 36.6941 1.95068 36.6941 2.69443C36.6941 2.71104 36.693 2.72764 36.6908 2.74369V31.3094H65.2558C65.2718 31.3078 65.2895 31.3061 65.3056 31.3061C65.6686 31.3061 66.0167 31.3792 66.3354 31.5114C66.3432 31.5142 66.3493 31.5175 66.3559 31.5208C66.6791 31.6581 66.9685 31.8545 67.2098 32.0958C67.6973 32.5828 68 33.2568 68 34C68 34.3619 67.9264 34.71 67.7947 35.0287C67.6575 35.3608 67.4577 35.6579 67.2098 35.9048C66.9635 36.151 66.6675 36.3508 66.3354 36.4886V36.4891C66.0167 36.6208 65.6686 36.6939 65.3056 36.6939C65.2895 36.6939 65.2718 36.6928 65.2558 36.6906L36.6908 36.6911V65.2563C36.693 65.2724 36.6941 65.2895 36.6941 65.3061C36.6941 65.6691 36.6205 66.0178 36.4888 66.336C36.4855 66.3437 36.4822 66.3498 36.4789 66.3565C36.3416 66.6796 36.1457 66.969 35.905 67.2103C35.4164 67.6984 34.7429 68 33.9997 68C33.6378 68 33.2897 67.927 32.971 67.7947C32.639 67.6575 32.3418 67.4577 32.095 67.2103C31.8487 66.9646 31.649 66.668 31.5112 66.336C31.3789 66.0178 31.3053 65.6691 31.3053 65.3061C31.3053 65.2895 31.3064 65.2724 31.3086 65.2563V36.6911H2.74366C2.72761 36.6933 2.71101 36.6944 2.69386 36.6944C2.33195 36.6944 1.98387 36.6214 1.66512 36.4891C1.33309 36.3519 1.03593 36.1521 0.789121 35.9048C0.542867 35.6585 0.343096 35.3624 0.205304 35.0304C0.0730463 34.7117 0 34.3636 0 34C0 33.6375 0.0730463 33.29 0.205304 32.9713C0.343096 32.6392 0.542867 32.3421 0.789675 32.0952C1.2772 31.6077 1.95067 31.3061 2.69441 31.3061C2.71157 31.3061 2.72817 31.3072 2.74422 31.3094H31.3097V2.74369C31.3075 2.72708 31.3064 2.71048 31.3064 2.69388Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_313_546">
                            <rect width="68" height="68" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                       </div>
                       </div>
                </Link>
                    
            </div>
            <div  className="w-full justify-between flex flex-col gap-5 ">
                    <h2>{data[0].title}</h2>
                    <p>{data[0].description}</p>
                    <div><Link aria-label={`See more details about ${data[0].title}`}  to={data[0].link}><span className="learn">Learn More</span></Link></div>
            </div>
        </div>
        <div style={{background:"white"}} className="intro intro-second gap-10">
            <div  className="w-full justify-between flex flex-col gap-5 ">
                    <h2>{data[1].title}</h2>
                    <p>{data[1].description}</p>
                    <div><Link aria-label={`See more details about ${data[1].title}`}  to={data[1].link}><span className="learn">Learn More</span></Link></div>
            </div>
            <div  style={{position:"relative"}} className="w-full content-intro flex flex-col gap-2 ">
                <div className="flex gap-2">
                    <div><img  className="one" src={data[1].images[0]} alt="intelligent" /></div>
                    <div><img  className="two"  src={data[1].images[1]} alt="digital" /></div>
                </div>
                <div className="flex gap-2">
                    <div><img className="three" src={data[1].images[2]} alt="intelligent" /></div>
                    <div><img className="four"  src={data[1].images[3]} alt="digital" /></div>
                </div>
                <Link to={data[0].link}><div  className={`icon-center  cursor-pointer`}>    
                       <div>
                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 68 68" fill="none">
                            <g clipPath="url(#clip0_313_546)">
                            <path d="M31.3064 2.69388C31.3064 2.33141 31.3795 1.98389 31.5112 1.66514C31.649 1.33311 31.8487 1.03594 32.0955 0.789128C32.5825 0.301595 33.2565 0 33.9997 0C34.3638 0 34.7119 0.0730469 35.0307 0.205306C35.0373 0.208073 35.0434 0.211393 35.0511 0.214714C35.3743 0.351953 35.6637 0.548405 35.905 0.789681C36.3925 1.27666 36.6941 1.95068 36.6941 2.69443C36.6941 2.71104 36.693 2.72764 36.6908 2.74369V31.3094H65.2558C65.2718 31.3078 65.2895 31.3061 65.3056 31.3061C65.6686 31.3061 66.0167 31.3792 66.3354 31.5114C66.3432 31.5142 66.3493 31.5175 66.3559 31.5208C66.6791 31.6581 66.9685 31.8545 67.2098 32.0958C67.6973 32.5828 68 33.2568 68 34C68 34.3619 67.9264 34.71 67.7947 35.0287C67.6575 35.3608 67.4577 35.6579 67.2098 35.9048C66.9635 36.151 66.6675 36.3508 66.3354 36.4886V36.4891C66.0167 36.6208 65.6686 36.6939 65.3056 36.6939C65.2895 36.6939 65.2718 36.6928 65.2558 36.6906L36.6908 36.6911V65.2563C36.693 65.2724 36.6941 65.2895 36.6941 65.3061C36.6941 65.6691 36.6205 66.0178 36.4888 66.336C36.4855 66.3437 36.4822 66.3498 36.4789 66.3565C36.3416 66.6796 36.1457 66.969 35.905 67.2103C35.4164 67.6984 34.7429 68 33.9997 68C33.6378 68 33.2897 67.927 32.971 67.7947C32.639 67.6575 32.3418 67.4577 32.095 67.2103C31.8487 66.9646 31.649 66.668 31.5112 66.336C31.3789 66.0178 31.3053 65.6691 31.3053 65.3061C31.3053 65.2895 31.3064 65.2724 31.3086 65.2563V36.6911H2.74366C2.72761 36.6933 2.71101 36.6944 2.69386 36.6944C2.33195 36.6944 1.98387 36.6214 1.66512 36.4891C1.33309 36.3519 1.03593 36.1521 0.789121 35.9048C0.542867 35.6585 0.343096 35.3624 0.205304 35.0304C0.0730463 34.7117 0 34.3636 0 34C0 33.6375 0.0730463 33.29 0.205304 32.9713C0.343096 32.6392 0.542867 32.3421 0.789675 32.0952C1.2772 31.6077 1.95067 31.3061 2.69441 31.3061C2.71157 31.3061 2.72817 31.3072 2.74422 31.3094H31.3097V2.74369C31.3075 2.72708 31.3064 2.71048 31.3064 2.69388Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_313_546">
                            <rect width="68" height="68" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                       </div>
                       </div>
                </Link>
                    
            </div>

        </div>
        <div style={{background:"white"}} className="intro gap-10">
            <div style={{position:"relative"}} className="w-full content-intro flex flex-col gap-2 ">
                <div className="flex gap-2">
                    <div><img  className="one" src={data[2].images[0]} alt="intelligent" /></div>
                    <div><img  className="two"  src={data[2].images[1]} alt="digital" /></div>
                </div>
                <div className="flex gap-2">
                    <div><img className="three" src={data[2].images[2]} alt="intelligent" /></div>
                    <div><img className="four"  src={data[2].images[3]} alt="digital" /></div>
                </div>
                <Link to={data[0].link}><div  className={`icon-center cursor-pointer`}>    
                       <div>
                         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 68 68" fill="none">
                            <g clipPath="url(#clip0_313_546)">
                            <path d="M31.3064 2.69388C31.3064 2.33141 31.3795 1.98389 31.5112 1.66514C31.649 1.33311 31.8487 1.03594 32.0955 0.789128C32.5825 0.301595 33.2565 0 33.9997 0C34.3638 0 34.7119 0.0730469 35.0307 0.205306C35.0373 0.208073 35.0434 0.211393 35.0511 0.214714C35.3743 0.351953 35.6637 0.548405 35.905 0.789681C36.3925 1.27666 36.6941 1.95068 36.6941 2.69443C36.6941 2.71104 36.693 2.72764 36.6908 2.74369V31.3094H65.2558C65.2718 31.3078 65.2895 31.3061 65.3056 31.3061C65.6686 31.3061 66.0167 31.3792 66.3354 31.5114C66.3432 31.5142 66.3493 31.5175 66.3559 31.5208C66.6791 31.6581 66.9685 31.8545 67.2098 32.0958C67.6973 32.5828 68 33.2568 68 34C68 34.3619 67.9264 34.71 67.7947 35.0287C67.6575 35.3608 67.4577 35.6579 67.2098 35.9048C66.9635 36.151 66.6675 36.3508 66.3354 36.4886V36.4891C66.0167 36.6208 65.6686 36.6939 65.3056 36.6939C65.2895 36.6939 65.2718 36.6928 65.2558 36.6906L36.6908 36.6911V65.2563C36.693 65.2724 36.6941 65.2895 36.6941 65.3061C36.6941 65.6691 36.6205 66.0178 36.4888 66.336C36.4855 66.3437 36.4822 66.3498 36.4789 66.3565C36.3416 66.6796 36.1457 66.969 35.905 67.2103C35.4164 67.6984 34.7429 68 33.9997 68C33.6378 68 33.2897 67.927 32.971 67.7947C32.639 67.6575 32.3418 67.4577 32.095 67.2103C31.8487 66.9646 31.649 66.668 31.5112 66.336C31.3789 66.0178 31.3053 65.6691 31.3053 65.3061C31.3053 65.2895 31.3064 65.2724 31.3086 65.2563V36.6911H2.74366C2.72761 36.6933 2.71101 36.6944 2.69386 36.6944C2.33195 36.6944 1.98387 36.6214 1.66512 36.4891C1.33309 36.3519 1.03593 36.1521 0.789121 35.9048C0.542867 35.6585 0.343096 35.3624 0.205304 35.0304C0.0730463 34.7117 0 34.3636 0 34C0 33.6375 0.0730463 33.29 0.205304 32.9713C0.343096 32.6392 0.542867 32.3421 0.789675 32.0952C1.2772 31.6077 1.95067 31.3061 2.69441 31.3061C2.71157 31.3061 2.72817 31.3072 2.74422 31.3094H31.3097V2.74369C31.3075 2.72708 31.3064 2.71048 31.3064 2.69388Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_313_546">
                            <rect width="68" height="68" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                       </div>
                       </div>
                </Link>
                    
            </div>
            <div  className="w-full justify-between flex flex-col gap-5 ">
                    <h2>{data[2].title}</h2>
                    <p>{data[2].description}</p>
                    <div><Link aria-label={`See more details about ${data[2].title}`}  to={data[2].link}><span className="learn">Learn More</span></Link></div>
            </div>
        </div>
    </div>)
}

export default Intro