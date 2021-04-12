import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Funny Poop | Home</title>
        <meta name="keywords" content="panagia"/>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome.</h1>
        <p className={styles.text}>This is a Next JS page that displays my current ergasies for the semester. Check them out, you're not going to be dissappointed. I kind of am, to be honest.</p>
        <p className={styles.text}>I have a lot of ergasies to do right now, but instead I'm taking time to study Web Dev on my own. It's ok though, since a lot of this practice right now will come in handy on the final stages of some of my ergasies.</p>
        <Link href="/ergasies"><a className={styles.btn}>Go to Ergasies</a></Link>
      </div>
    </>
  )
}

export default Home;