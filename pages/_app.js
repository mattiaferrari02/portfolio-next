import '../styles/tailwind.css'
import '../styles/index.css'
import {IconContext} from "react-icons"

function MyApp({ Component, pageProps }) {
  return <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    <Component {...pageProps} />
  </IconContext.Provider>
}

export default MyApp
