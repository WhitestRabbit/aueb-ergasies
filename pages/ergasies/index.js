import styles from '../../styles/Ergasies.module.css';
import Head from 'next/head';

export const getStaticProps = async () => {
    const res = await fetch("https://mockend.com/aueb-ergasies/Ergasies");
    const data = await res.json();

    return {
        props: { ergasies: data }
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
                    <div key={ergasia.id}>
                        <a>
                            <h3>{ergasia.name}</h3>
                        </a>
                    </div>)
                    )
                }
            </div>
        </>
    );
}
 
export default ergasies;