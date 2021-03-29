import Link from "next/link"
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";

export default function Navbar(){
    const [open, setOpen] = useState(false);
    const drop = useRef();
    
    

    return(
        <header className="fixed w-full z-50 shadow-md bg-red-600 ">

            <nav className=" z-50 text-gray-200 container mx-auto  select-none flex items-stretch w-full justify-center lg:justify-between">
                <div className="text-3xl flex p-4 justify-center lg:justify-start">
                    <Link href="/">
                        <div className="pointer"><span role="img" aria-label="dragon">🐲</span>&nbsp;Mattia&nbsp;Ferrari</div>
                    </Link>
                </div>
                <div className="text-lg align-bottom hidden lg:flex justify-end p-4">
                    <ul className="flex  space-x-4">
                        <li>
                            <Link href="/home#aboutme"><span className="pointer rounded-full py-3 px-3 hover:bg-red-400 " ><span role="img" aria-label="coffee">☕</span> About Me</span></Link>
                        </li>
                        <li className="relative">
                            <span className="pointer rounded-full p-3 hover:bg-red-400 " aria-expanded="true" aria-haspopup="true"
                                ><div className="inline-flex">&nbsp;<Link href="/progetti"><div><span role="img" aria-label="cartellon">🚧</span>&nbsp; Attività e Progetti&nbsp;</div></Link> <div className="p-1" ><FaChevronCircleDown /></div>  </div>
                                <div onClick={()=>{setOpen(!open)}} ref={drop} className="pointer z-50 absolute right-1 w-11 h-11 " style={{top: "-10px", bottom: "0px"}}></div>
                                </span>
                            {open ? <div id="droppino" className={"pointer origin-top-right absolute right-0 mt-1 w-56 rounded-lg shadow-lg bg-gray-700 ring-1 ring-gray-900 ring-opacity-5 focus:outline-none"} role="menu" aria-orientation="vertical" aria-labelledby="options-menu"
                                
                                >
                                <div className="py-1">
                                <Link href="/progetti/201819"><span className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800" role="menuitem">2018/2019</span></Link>
                                <Link href="/progetti/201920"><span className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800" role="menuitem">2019/2020</span></Link>
                                <Link href="/progetti/202021"><span className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800" role="menuitem">2020/2021</span></Link>
                                <Link href="/progetti/orientamento"><span  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800" role="menuitem">Orientamento</span></Link>
                                <Link href="/progetti/personali"><span className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800" role="menuitem">Personali</span></Link>
                                </div>
                            </div>: ""}
                            
                            
                        </li>
                        <li>
                            <Link href="/home#contactme"><span className="pointer rounded-full py-3 px-3 hover:bg-red-400 "><span role="img" aria-label="book">📕</span> Contattami</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
