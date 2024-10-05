import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24' id="skills">
            <h2 className='my-20 text-center text-4xl'>Skills & Expertise</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine  className='text-7xl text-cyan-400'/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAngular  className='text-7xl text-red-500'/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript  className='text-7xl text-yellow-500'/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript  className='text-7xl text-blue-400'/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5  className='text-7xl text-orange-500'/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt  className='text-7xl text-blue-400'/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs  className='text-7xl text-green-400'/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMongodb  className='text-7xl text-green-500'/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiBootstrap className='text-7xl text-white-500'/>
                </div>
            </div>
        </div>
    )
}

export default Technologies;