import '../styles/tailwind.css'
import '../styles/index.css'
import { useEffect } from 'react'
import {IconContext} from "react-icons"
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    <Component {...pageProps} />
  </IconContext.Provider>
}

export default MyApp
