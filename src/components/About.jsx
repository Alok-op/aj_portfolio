import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4" id="about">
            <h2 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div style={{ marginTop: "32px" }}>
                        {
                            ABOUT_TEXT.map((para, index) => (
                                <p className="max-w-xl mt-4" key={index}>{para}</p>
                            ))
                        }
                    </div>
                    <div className="mt-10 flex items-center gap-8 text-3xl">
                        <a href="https://www.linkedin.com/in/alok-jha-dev/" target="_blank"><FaLinkedin /></a>
                        <a href="https://github.com/alok-op" target="_blank"><FaGithub /></a>
                        <a href="https://leetcode.com/u/alokjha08/" target="_blank"><SiLeetcode /></a>
                        <a href="https://x.com/?lang=en" target="_blank"><FaSquareXTwitter /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;