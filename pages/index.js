import Logo from '../components/Logo'
import Link from 'next/link'
import Head from 'next/head'
import Typewriter from 'typewriter-effect'
import { FiChevronsRight} from 'react-icons/fi';
export default function Index (){
  
  return(
    <>
    <Head>
      <title>Mattia Ferrari | Portfolio</title>
      <meta charSet="UTF-8" />
      <meta name="description" content="This is Mattia Ferrari's Portfolio" />
      <meta name="keywords" content="portfolio, mattia ferrari, mattia, ferrari, web-dev, next.js, MERN" />
      <meta name="author" content="Mattia Ferrari" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="bus.ico" type="image/x-icon" />
    </Head>
    <div className='dark:bg-gray-900'>
      <main className="landing grid grid-cols-1">
        <div className="mx-auto w-10/12 md:w-2/4 lg:w-5/12 ">
          <Logo />
        </div>
        
        <div className="typewriter text-2xl md:text-3xl lg:text-5xl dark:text-gray-300 mx-auto text-center w-screen md:w-1/3 lg:w-1/2 ">
          <Typewriter
            options={{
              strings: ['Hi, I\'m Mattia.',
                'I\'m a web developer wannabe.',
                'This is my portfolio.',
                'I hope you\'ll like it.',
                'Click Next!'
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="mx-auto text-center w-screen md:w-1/3 lg:w-1/2 ">
          <Link href='/home'>
            <button className='focus:bg-red-700 focus:outline-none inline-flex shadow-md text-gray-200 bg-red-600 pr-3 pl-5 py-4'>NEXT <FiChevronsRight size="1.5em" /></button>
          </Link>
        </div>

      </main>
    </div>
    </>
  );
}