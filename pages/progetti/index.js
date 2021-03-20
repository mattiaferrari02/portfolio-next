import Head from '../../components/Head'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import * as skills from "../../utilities/skills";
import Section from "../../components/section";

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
                pagina dei progetti

            </main>
            <Footer />
        </div>
    );
}
