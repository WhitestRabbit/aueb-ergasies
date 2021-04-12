import Link from "next/link";
import Head from 'next/head';
import { useEffect } from "react";
import { useRouter } from 'next/router';

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <>
            <Head>
                <title>Funny Poop | 404...</title>
                <meta name="keywords" content="panagia"/>
            </Head>
            <div className="not-found">
                <h1>Hey!</h1>
                <h2>That page does not exist.</h2>
                <p>Redirecting you to the <Link href="/"><a>Homepage</a></Link>...</p>
            </div>
        </>
    );
}
 
export default NotFound;