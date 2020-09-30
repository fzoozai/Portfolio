import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Aboutme() {
  return (
    <div className={styles.container}>
        <div>About me</div>
        <Link href="/">Home</Link>
    </div>
  )
}
