import Link from "next/link";
export default function Navbar(){
    return(
        <header className="fixed w-full z-50 shadow-md bg-red-600 ">

            <nav className=" z-50 text-gray-200 container mx-auto  select-none flex items-stretch w-full justify-center lg:justify-between">
                <div className="text-3xl flex p-4 justify-center lg:justify-start">
                    <Link href="/">
                        <div><span role="img" aria-label="dragon">🐲</span>&nbsp;Mattia&nbsp;Ferrari</div>
                    </Link>
                </div>
                <div className="text-lg align-bottom hidden lg:flex justify-end p-4">
                    <ul className="flex  space-x-4">
                        <li>
                            <Link href="/home#aboutme"><span className="pointer rounded-full py-3 px-3 hover:bg-red-400 " ><span role="img" aria-label="coffee">☕</span> About Me</span></Link>
                        </li>
                        <li>
                            <Link href="#contacts"><span className="pointer rounded-full py-3 px-3 hover:bg-red-400 " ><span role="img" aria-label="cartellon">🚧</span> Attività e Progetti</span></Link>
                        </li>
                        <li>
                            <Link href="#footerx"><span className="pointer rounded-full py-3 px-3 hover:bg-red-400 "><span role="img" aria-label="book">📕</span> Contattami</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
