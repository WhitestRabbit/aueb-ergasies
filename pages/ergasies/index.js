import styles from '../../styles/Ergasies.module.css';
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch("https://my-json-server.typicode.com/WhitestRabbit/aueb-ergasies/projects");
    const ergasies = await res.json();

    return {
        props: { ergasies }
    }
}

const ergasies = ({ergasies}) => {
    return (
        <>
            <Head>
                <title>Funny Poop | Ergasies</title>
                <meta name="keywords" content="panagia"/>
            </Head>
            <div>
                <h1>Ergasies</h1>
                {ergasies.map(ergasia => (
                    <Link key={ergasia.id} href={`/ergasies/${ergasia.id}`}>
                        <a className={styles.single}>
                            <h3>{ergasia.name}</h3>
                        </a>
                    </Link>)
                    )
                }
            </div>
        </>
    );
}
 
export default ergasies;