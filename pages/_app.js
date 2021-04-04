import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
  <div className="mx-auto w-9/12">
    <nav>
      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
          
        </li>
        <Link href="/about"><a>Acerca de</a></Link>
      </ul>
    </nav>
    <Component {...pageProps} />
    
  </div>
  )
  
}

export default MyApp
