import Head from 'next/head'
import Navbar from '../components/Navbar'
export default function Home() {
    return (
        <>
            <Head>
                <title>Mattia Ferrari | Home page</title>
            </Head>
            <header className="shadow-md dark:bg-gray-800 ">
                <Navbar />
            </header>
            <div className='md:flex dark:bg-coolGray-900 bg-white rounded-lg p-24 justify-center'>
                <div className='text-center md:text-left'>

                </div>
            </div>
        </>
    );
}
