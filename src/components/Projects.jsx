import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
    const handleClick = () => {
        console.log("called.")
    }
    return (
        <div className='border-b border-neutral-900 pb-4' id="projects">
            <h2 className='my-20 text-center text-4xl'>Projects</h2>
            <div>
                {
                    PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className="w-full lg:w-1/4">
                            <img src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded' />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {
                                project.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                                        {tech}
                                    </span>
                                ))
                            }
                            <div className='mt-3'>
                                <button onClick={handleClick} type="button" class="text-white text-xs bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-2.5 py-2 text-center me-2 mb-2">View more</button>
                            </div>
                        </div>
                    </div>      
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;