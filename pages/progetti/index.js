import Head from '../../components/Head'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import * as skills from "../../utilities/skills";
import Section from "../../components/section";
import cards from "../../utilities/cards"
import React, { useEffect } from 'react'
import { VscGithub} from "react-icons/vsc"
import { HiOutlineGlobeAlt} from "react-icons/hi"
import Image from 'next/image'

export default function Home() {
    return (
        <div className="page flex flex-col min-h-screen">
            <Head
                keywords={
                    "portfolio, mattia ferrari, mattia, ferrari, web-dev, next.js, MERN"
                }
                description="mattia ferrari portfolio home page"
                title="Mattia Ferrari | Progetti"
            />

            <Navbar />
            <main className="text-gray-200 md:flex px-2 mt-20 flex-grow">
                <article className=" w-full ">
                    <header className="text-gray-300 mx-2 md:mx-20 text-3xl border-b-2 border-gray-300 my-4">
                        <h2 className=""><span role="img" aria-label="workinprogress">🚧</span> I miei Progetti</h2>
                        <time dateTime="2021-03-18" ></time>
                    </header>
                    <main className="mx-2 md:mx-20 grid gap-y-6 grid-col-1 grid-flow-row  lg:grid-cols-2 xl:grid-cols-3  md:gap-16 mb-10">
                        
                        {
                            cards.map((o, i) => {
                                if (o.hasPage) return <HasLink link={`./progetti/${o.id}`}  key={i}> <Card data={o} key={i} /></HasLink>
                                else return <Card data={o} key={i} />
                            })
                        }
                    
                    </main>
                </article>
            </main>
            <Footer />
        </div>
    );
}




const Card = ({data: {image, name, cardDesc, anno, github, pillColor, linkAzienda}}) => {
    console.log(github);
    return (
        <div className="card col-span-1 row-span-1 bg-gray-700 rounded-xl shadow-lg w-full sm:w-1/2 md:w-full place-self-center h-full" style={{maxWidth: "500px"}}>
            <div className="relative">
                <Image className="object-cover " width={500} height={280} alt="progetto" src={image} />
                {github ? <Link  href={github} ><a target="blank"><div className="pointer absolute bottom-2 right-2 hover:text-red-500 ">
                    <VscGithub size={28} />
                </div></a></Link>: ""}
                {linkAzienda ? <Link href={linkAzienda} ><a target="blank"><div className="pointer absolute bottom-2 right-2 shadow-2xl hover:text-red-500 ">
                    <HiOutlineGlobeAlt size={28} />
                </div></a></Link> : ""}
            </div>
            <div className="p-7 block text-lg">
                <div className="text-2xl mb-2">
                    {name}
                </div>
                <p>
                    {cardDesc}
                </p>
                <div className="mt-4">
                    <span className="rounded-lg text-gray-800 p-2" style={{backgroundColor: pillColor}}>{anno}</span>
                </div>
            </div>
        </div>
    );
}


const HasLink = (props) =>{
    return(
        <Link href={props.link}><a>
            {props.children}
        </a></Link>
    );
}