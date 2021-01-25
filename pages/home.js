import Head from 'next/head'
import Navbar from '../components/Navbar'
export default function Home() {
    return (
        <>
            <Head>
                <title>Mattia Ferrari | Home page</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Mattia Ferrari's Portfolio Home Page" />
                <meta name="keywords" content="portfolio, mattia ferrari, mattia, ferrari, web-dev, next.js, MERN" />
                <meta name="author" content="Mattia Ferrari" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="bus.ico" type="image/x-icon" />
            </Head>
            
                <Navbar />
            
            <main className='md:flex dark:bg-gray-900 bg-white p-24 justify-center'>
                <div className='text-center md:text-left'>
                        asdsgd
                </div>
            </main>
        </>
    );
}
