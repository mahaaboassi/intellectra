import { useLottie } from "lottie-react";
import animationData from "../data/moveCube.json"; // or use a URL
import img from "../assets/images/cubes.png"

const ContactBanner = ()=>{
    const options = {
    animationData: animationData,
    loop: true,
    speed:"0.05"
  };

  const { View } = useLottie(options);

    return(<div className="contact-banner py-10">
        <div className="view-banner">
            {View}
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
            <h2>How can we help?</h2>
            <button>Contact us</button>
        </div>
    </div>)
}
export default ContactBanner