import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/kevinRushProfile.jpg";
import AlokProfile from "../assets/alokProfile.png";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Alok Jha</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-3">Front end Developer</span>
                        <p>{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={AlokProfile} alt="Alok Jha" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;