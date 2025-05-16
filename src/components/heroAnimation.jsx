import { useLottie } from "lottie-react";
import animationData from "../data/cubes_moreHeight.json"; // or use a URL

const LottieHero = () => {

const options = {
    animationData: animationData,
    loop: true,
    speed:"0.05"
  };

  const { View } = useLottie(options);

  return <div className="overlay-lottie">{View}</div>;
};

export default LottieHero;