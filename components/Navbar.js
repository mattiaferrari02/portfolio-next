import Link from "next/link";
export default function Navbar(){
    return(
        <header className="shadow-md bg-red-600 ">

            <nav className=" z-50 text-gray-200 container mx-auto  select-none flex items-stretch w-full justify-center lg:justify-between">
                <div className="text-3xl flex p-4 justify-center lg:justify-start">
                    <a href="/" className="brand-logo justify-self-center"><span role="img" aria-label="dragon">🐲</span>&nbsp;Mattia&nbsp;Ferrari</a>
                </div>
                <div className="text-lg align-bottom hidden lg:flex justify-end p-4">
                    <ul className="flex  space-x-4">
                        <li><a className="rounded-full py-3 px-3 hover:bg-red-400 " href="#about"><span role="img" aria-label="coffee">☕</span> About Me</a></li>
                        <li><a className="rounded-full py-3 px-3 hover:bg-red-400 " href="#contacts"><span role="img" aria-label="cartellon">🚧</span> Activities & Projects</a></li>
                        <li><a className="rounded-full py-3 px-3 hover:bg-red-400 " href="#footerx"><span role="img" aria-label="book">📕</span> Contacts</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
