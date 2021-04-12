import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <Image src="/logo.png" width={125} height={128}/>
                </div>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/ergasies"><a>Ergasies</a></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;