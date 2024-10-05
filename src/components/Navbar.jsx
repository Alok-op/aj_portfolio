import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="text-3xl" style={{ letterSpacing: '4px' }}>Aj</h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4">
                    <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                        <div class="flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:ps-5 sm:pb-0 sm:overflow-x-visible [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                            <Link to='#about' className="font-medium text-white-600 hover:text-purple-500 focus:outline-none focus:text-gray-400" href="#">About</Link>
                            <Link to='#skills' className="font-medium text-white-600 hover:text-purple-500 focus:outline-none focus:text-gray-400" href="#">Skills</Link>
                            <Link to='#experience' className="font-medium text-white-600 hover:text-purple-500 focus:outline-none focus:text-gray-400" href="#">Experience</Link>
                            <Link to='#projects' className="font-medium text-white-600 hover:text-purple-500 focus:outline-none focus:text-gray-400" href="#">Projects</Link>
                        </div>
                    </nav>
                </header>
                <ul></ul>
            </div>
        </nav>
    )
}

export default Navbar;