import Link from "next/link"
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";

export default function Navbar(){
    const [classi, setClassi] = useState("hidden transform opacity-0 scale-95 transition ease-out duration-100");
    const drop = useRef();
    const change = () =>{
        setClassi(
          classi ==
            "hidden transition ease-in duration-75 transform opacity-0 scale-95"
            ? "transition ease-out duration-100 transform opacity-100 scale-100"
            : "hidden transition ease-in duration-75 transform opacity-0 scale-95"
        );
    }
    const handleClick = e => {
    if (drop.current.contains(e.target)) {
        // inside click
        return;
    }
    // outside click 
    setClassi("hidden transition ease-in duration-75 transform opacity-0 scale-95")
    };
    useEffect(() => {
      // add when mounted
      document.addEventListener("mousedown", handleClick);
      // return function to be called when unmounted
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, []);

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
                                <div onClick={change}
                                ref={drop} className="pointer z-50 absolute right-1 w-10 h-10" style={{top: "-5px", bottom: "0px"}}>

                            </div>
                                </span>
                            <div className={classi+" origin-top-right absolute right-0 mt-1 w-56 rounded-lg shadow-lg bg-gray-700 ring-1 ring-gray-900 ring-opacity-5 focus:outline-none"} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <div className="py-1" role="none">
                                <a href="#sex" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800" role="menuitem">2018/2019</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800" role="menuitem">2019/2020</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 " role="menuitem">2020/2021</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 " role="menuitem">Orientamento</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 " role="menuitem">Personali</a>
                                </div>
                            </div>
                            
                        </li>
                        <li>
                            <Link href="#footer"><span className="pointer rounded-full py-3 px-3 hover:bg-red-400 "><span role="img" aria-label="book">📕</span> Contattami</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
