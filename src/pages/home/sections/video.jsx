import { useState } from "react"
import img from "../../../assets/images/bg-video.webp"

const svg = <svg xmlns="http://www.w3.org/2000/svg" width="34" height="42" viewBox="0 0 54 62" fill="none">
<path d="M0 62V0L54 31L0 62Z" fill="#FEFEFE"/>
</svg>
const Video = ()=>{
    const [isPopup, setIsPopup ] = useState(false)
    const close = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipath="url(#clip0_17_1174)">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_17_1174">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    return(<div className="px-5 sm:px-16 md:px-32 py-5 lg:py-10 lg:py-20">
        {isPopup && <div className="popup">
            <div onClick={()=>setIsPopup(false)} className="close-icon">{close}</div>
            <div className="popup-content">
                    <iframe  width="660" height="415" src="https://www.youtube.com/embed/rdIkAgsAtO8?si=vwiygo0CcJvQ12m7"
                     title="YouTube video player"
                     allow="autoplay; encrypted-media"
                     allowFullScreen ></iframe>
                </div> 
        </div>}
        <div className="video-container ">
            <div className="video-content gap-5">
                <h2 className="text-center">EMPOWERING BUSINESSES WITH TECHNOLOGY</h2>
                <div className="img">
                    <img src={img} alt="video" />
                    <div onClick={()=>setIsPopup(true)} className="cursor-pointer">
                        {svg}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Video