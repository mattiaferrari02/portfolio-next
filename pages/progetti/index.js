import Head from '../../components/Head'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import * as skills from "../../utilities/skills";
import Section from "../../components/section";
import cards from "../../utilities/cards"
import React, { useEffect } from 'react'
export default function Home() {

    //dummy data
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
                            cards.map(o => <Card data={o} />)
                        }
                    
                    </main>
                </article>
            </main>
            <Footer />
        </div>
    );
}




const Card = ({data: {image, name, cardDesc, anno}}) => {
    
    return (
        <div key={name} className="card col-span-1 row-span-1 bg-gray-700 rounded-xl shadow-lg w-full sm:w-1/2 md:w-full place-self-center h-full" style={{maxWidth: "500px"}}>
            <div>
                <img className="object-cover " style={{ width: "500px", height: "280px" }} alt="progetto" src={image} />
            </div>
            <div className="p-7 block text-lg">
                <div className="text-2xl mb-2">
                    {name}
                </div>
                <p>
                    {cardDesc}
                </p>
                <div className="mt-4">
                    <span className="rounded-lg bg-green-400 text-gray-800 p-2" >{anno}</span>
                </div>
            </div>
        </div>
    );
}