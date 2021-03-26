import Head from '../../components/Head'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import * as skills from "../../utilities/skills";
import Section from "../../components/section";
import cards from "../../utilities/cards"
import React, { useEffect } from 'react'
import Image from 'next/image'


export default function Home({card: {keywords, cardDesc, name, date, image, banner, icon, fullDesc, conclusioni, materiali}}) {
    return (
        <div className="page flex flex-col min-h-screen">
            <Head
                keywords={keywords}
                description={cardDesc}
                title={`Mattia Ferrari | ${name}`}
            />

            <Navbar />
            <main className="text-gray-200 md:flex px-2 mt-20 flex-grow">
                <article className=" w-full ">
                    <header className="text-gray-300 mx-2 md:mx-20 text-3xl my-4">
                        <img className="object-cover rounded-xl" width={1920} height={280} alt="progetto" src={banner}/>
                        <time dateTime={date} ></time>
                    </header>
                    <main className="mx-2 md:mx-20 mb-10">
                        <div className="bg-gray-700 rounded-xl p-10">
                            <div className="text-gray-300 text-3xl border-b-2 border-gray-300 mb-4">
                                <h2 className=""><span role="img" aria-label="iconcina_del_progetto">📓</span> Descrizione</h2>
                            </div>
                            <div className="text-xl">
                                {fullDesc}
                            </div>
                            <div className="text-gray-300 text-3xl border-b-2 border-gray-300 my-4">
                                <h2 className=""><span role="img" aria-label="iconcina_del_progetto">{icon}</span> Conclusioni</h2>
                            </div>
                            <div className="text-xl">
                                {conclusioni}
                            </div>
                            <div className="text-gray-300 text-3xl border-b-2 border-gray-300 my-4">
                                <h2 className=""><span role="img" aria-label="iconcina_del_progetto">🔍</span> Materiali</h2>
                            </div>
                            <div className="flex flex-row flex-wrap text-xl justify-center">
                                {
                                    materiali? materiali.map(({link, text}) =>{
                                        return <a className="text-center mr-2 mb-2 px-12 py-2 border border-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-50"
                                        href={link} target="blank"> {text} </a>
                                    }): ""
                                }
                            </div>
                        </div>
                    </main>
                </article>
            </main>
            <Footer />
        </div>
    );
}





















export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    /*const res = await fetch('https://.../posts')
    const posts = await res.json()*/

    // Get the paths we want to pre-render based on posts
    const paths = cards.map((card) => ({
        params: { id: card.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    /*const res = await fetch(`https://.../posts/${params.id}`)
    const post = await res.json()*/

        for(let i = 0; i<cards.length; i++){
            if (params.id == cards[i].id) return { props: { card: cards[i] } }
        }
}
