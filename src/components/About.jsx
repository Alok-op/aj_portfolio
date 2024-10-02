import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
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
                        <a href=""><FaLinkedin /></a>
                        <a href=""><FaGithub /></a>
                        <a href=""><FaSquareXTwitter /></a>
                        <a href=""><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;