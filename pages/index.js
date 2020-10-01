import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const styling = {
  backgroundImage: `url("./marburg.jpg")`,
  width:"100%",
  height:"100%"
}

export default function Home() {
  return (
    <div className={styles.container} style={styling}>
      <h1>Hello Marburg.</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/aboutme">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
      <blockquote>Motivated by soosap</blockquote>
    </div>
  )
}
