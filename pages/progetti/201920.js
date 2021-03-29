import Head from '../../components/Head'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import HasLink from '../../components/HasLink';
import React, { useEffect } from 'react'
import AOS from "aos";
import { getData } from '../api/data'

export default function Progetti({ cards }) {

    useEffect(() => {
        AOS.init();
    });


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
                        <h2 className=""><span role="img" aria-label="workinprogress">🚧</span> I miei Progetti nell'anno 2019/20</h2>
                        <time dateTime="2021-03-18" ></time>
                    </header>
                    <main className="mx-2 md:mx-20 grid gap-y-6 grid-col-1 grid-flow-row  lg:grid-cols-2 xl:grid-cols-3  md:gap-16 mb-10">

                        {
                            cards.map((o, i) => {
                                if (o.hasPage) return <HasLink link={`/progetti/${o.id}`} key={i}> <Card data={o} key={i} /></HasLink>
                                else return <HasLink link={o.github}> <Card data={o} key={i} /></HasLink>
                            })
                        }

                    </main>
                </article>
            </main>
            <Footer />
        </div>
    );
}


export async function getStaticProps() {
    //data fetch here
    const cards = await getData();

    const res = cards.filter(o => {
        if (o.anno == "2019/2020") return true;
        return false;
    });

    return {
        props: {
            cards: res
        }
    }
}