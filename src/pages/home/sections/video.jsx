import { useState } from "react"
import img from "../../../assets/images/bg-video.webp"
import video from "../../../assets/videos/intellectra.mp4"

const svg = <svg xmlns="http://www.w3.org/2000/svg" width="34" height="42" viewBox="0 0 54 62" fill="none">
<path d="M0 62V0L54 31L0 62Z" fill="#FEFEFE"/>
</svg>
const Video = ()=>{
    const [isPopup, setIsPopup ] = useState(false)
    return(<div className="px-5 sm:px-16 md:px-32 py-5 lg:py-10 lg:py-20 ">
        <div className="video-container gap-10 ">
           <h2 className="text-center">EMPOWERING BUSINESSES WITH TECHNOLOGY</h2>
            <div className="video-content">
                {isPopup?<video autoPlay controls height="615" width="700">
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>:
                <>
                <img src={img} alt="video" />
                <div onClick={()=>setIsPopup(true)} className="cursor-pointer icon-play">
                    {svg}
                </div></>}
            </div>
        </div>
    </div>)
}

export default Video