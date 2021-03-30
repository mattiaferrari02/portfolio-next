import React, { useEffect } from 'react'
import { FaInstagram, FaGithub, FaEnvelope, FaPhoneSquareAlt, FaLinkedin } from "react-icons/fa";
import { SiNextDotJs, SiReact, SiNetlify, SiGmail, SiTailwindcss, SiMongodb } from "react-icons/si";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastProvider, useToasts } from "react-toast-notifications";

export default function Footer(){
    

    return (
        <ToastProvider>
            <Toaster />
        </ToastProvider>
    );
}


const Toaster = () =>{
    const { addToast } = useToasts();
    return (
    <footer id="footer">
        <div className="bg-gray-800 text-gray-300 pt-10 px-8 py-4">
            <div className="grid grid-flow-row  grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                <div>
                    <p className="text-2xl" >Informazioni</p>
                    <p className="break-words text-base" >
                        Ho creato questo sito per parlare di ciò che ho fatto a scuola, andando dai progetti fino al PCTO sin dall'inizio. <br />
                        Alcuni dei progetti probabilmente non sono belli o ben fatti ma questo è il mio punto di partenza.<br />
                        Questo Portfolio è stato creato utilizzando la maggior parte delle mie conoscenze da web developer essendo un vero e proprio sito full-stack<br />
                        Nello specifico ho utilizzato Next.js e React.js per realizzare la parte client e server. Ho utilizzato MongoDb per mantenere le informazioni dei progetti. <br />
                        Ho utilizzato Tailwind per creare lo stile delle pagine e netlify per hostare il sito.
                    </p>
                </div>
                <div>
                    <p className="text-2xl" >Referenze</p>
                        <ul className="text-base pointer">
                            <li className="mb-1">
                                <a href="https://github.com/IlSassone" target="blank"><div className="inline-block align-bottom">
                                        <FaGithub size="28px"/>
                                    </div> 
                                    <div className="pl-1 inline-block align-baseline	">
                                        Github
                                    </div></a>
                            </li>
                            <li className="mb-1">
                                <a href="https://www.instagram.com/matty_105/" target="blank"><div className="inline-block align-bottom">
                                        <FaInstagram size="28px"/>
                                    </div> 
                                    <div className="pl-1 inline-block align-baseline	">
                                        Instagram
                                    </div></a>
                            </li>
                            <li className="mb-1">
                                <a href="https://www.linkedin.com/in/mattia-ferrari-70105620a/" target="blank"><div className="inline-block align-bottom">
                                        <FaLinkedin size="28px"/>
                                    </div> 
                                    <div className="pl-1 inline-block align-baseline	">
                                        Linkedin
                                    </div></a>
                            </li>
                            <li className="mb-1">
    
                                    <div className="inline-block align-bottom">
                                        <SiGmail size="28px"/>
                                    </div> 
                                    <div className=" pl-1 inline-block align-baseline	">
                                        <CopyToClipboard
                                            text={"mattia.ferrari@studenti.iispascal.it"}
                                            onCopy={()=>{
                                                addToast('Email Copiata', { appearance: 'success' });
                                            }}
                                        >
                                            <p className="break-all"> mattia.ferrari@studenti.iispascal.it</p>
                                        </CopyToClipboard>
                                    </div>
                                    
                            </li>
                            <li className="mb-1">
    
                                    <div className="inline-block align-bottom">
                                        <SiGmail size="28px"/>
                                    </div> 
                                    <div className=" pl-1 inline-block align-baseline	">
                                        <CopyToClipboard
                                            text={"mattia2002.ferrari@gmail.com"}
                                            onCopy={()=>{
                                                addToast('Email Copiata', { appearance: 'success' });
                                            }}
                                        >
                                            <p className="break-all"> mattia2002.ferrari@gmail.com</p>
                                        </CopyToClipboard>
                                    </div>
                                    
                            </li>
                            <li className="mb-1">
    
                                    <div className="inline-block align-bottom">
                                        <FaPhoneSquareAlt size="28px"/>
                                    </div> 
                                    <div className=" pl-1 inline-block align-baseline	">
                                        <CopyToClipboard
                                            text={"+393703236717"}
                                            onCopy={()=>{
                                                addToast('Cellulare Copiato', { appearance: 'success' });
                                            }}
                                        >
                                            <p className="break-all"> +39 370 3236717</p>
                                        </CopyToClipboard>
                                    </div>
                                    
                            </li>

                        </ul>
                    
                </div>
                
                
                
            </div>
            
        </div>
        <div className="text-gray-300 col-span-1 md:col-span-2 bg-gray-700 w-full p-2">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <div className="text-lg flex justify-center md:justify-start">
                                <a href="/" className="pl-1">
                                    Portfolio di Mattia Ferrari
                                </a>
                            </div>
                </div>
                <div>
                    <div className="pointer text-2xl gap-3 flex justify-center pb-1">
                                    <a href="https://www.mongodb.com/cloud"><SiMongodb /></a>
                                    <a href="https://it.reactjs.org/"><SiReact /> </a>
                                    <a href="https://nextjs.org/"><SiNextDotJs /></a> 
                                    <a href="https://tailwindcss.com/"><SiTailwindcss /></a>
                                    <a href="https://www.netlify.com/"><SiNetlify /></a>
                    </div>
                </div>
                <div>
                    <div className="text-base lg:text-lg align-bottom hidden lg:flex justify-end pr-1">
                                2018 - {new Date(Date.now()).getFullYear()}
                            </div>
                </div>
            </div>
        </div>
    </footer>
    );
}