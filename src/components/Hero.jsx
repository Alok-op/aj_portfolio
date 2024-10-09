import { HERO_CONTENT } from "../constants";
import AlokProfile from "../assets/alokProfile.png";
import Resume from "../assets/Alok_Jha_Frontend_developer.pdf";

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
                    <div className='mt-5'>
                        <a href={Resume} download="Alok Jha-Frontend Developer Resume" class="text-white text-xs bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium mt-2 rounded-lg text-sm px-2.5 py-2 text-center me-2 mb-2">Download Resume</a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img style={{width: "380px", height: "410px", marginTop: "20px"}} src={AlokProfile} alt="Alok Jha" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;