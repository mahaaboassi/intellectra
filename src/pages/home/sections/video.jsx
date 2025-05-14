import img from "../../../assets/images/bg-video.webp"

const svg = <svg xmlns="http://www.w3.org/2000/svg" width="34" height="42" viewBox="0 0 54 62" fill="none">
<path d="M0 62V0L54 31L0 62Z" fill="#FEFEFE"/>
</svg>
const Video = ()=>{
    return(<div className="px-5 sm:px-16 md:px-32 py-10 lg:py-20">
        <div className="video-container gap-5">
            <h2 className="text-center">EMPOWERING BUSINESSES WITH TECHNOLOGY</h2>
            <div className="img">
                <img src={img} alt="video" />
                <div>
                    {svg}
                </div>
            </div>
        </div>
    </div>)
}

export default Video