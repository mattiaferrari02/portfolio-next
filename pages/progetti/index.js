import Head from '../../components/Head'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import * as skills from "../../utilities/skills";
import Section from "../../components/section";
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
                title="Mattia ferrari | Home Page"
            />

            <Navbar />
            <main className="text-gray-300 md:flex px-2 md:px-10 lg:px-20 xl:px-30 mt-20 flex-grow">
                <article id="aboutme" className=" w-full ">

                    <header className="text-gray-300 md:col-span-2  text-3xl w-full border-b-2 border-gray-300 my-4">
                        <h2><span role="img" aria-label="workinprogress">🚧</span> I miei Progetti</h2>
                        <time dateTime="2021-03-18" ></time>
                    </header>
                    <main className="grid  grid-col-1 grid-rows-9   sm:grid-cols-2 sm:grid-rows-3   lg:grid-cols-2 lg:grid-rows-3  xl:grid-cols-3  xl:grid-rows-3 grid-flow-row gap-3 mb-10">

                        



                        <div className="card text-3xl col-span-1 row-span-1 bg-gray-700 p-10 rounded-xl">
                            <div>
                                <span role="img" aria-label="computer">💻</span>  Software developer
                    </div>
                            <div className="block text-lg">
                                <p>Grazie alla scuola ho imparato a creare software nativi per dispositivi desktop, utilizzando per esempio C++ o Java. <br />
                        Personalmente invece ho imparato ad utilizzare Python e Flutter.
                      </p>
                            </div>
                        </div>

                    </main>
                </article>
                
            </main>
            <Footer />
        </div>
    );
}
