import Link from 'next/link';

export default function Footer(props: any) { 
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 text-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://roogle.com/" className="hover:underline">Roogle™</a> 
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 justify-center">
                <li>
                    <Link className="mr-4 hover:underline md:mr-6" href={{ pathname: '/about' }}>
                    About
                    </Link>
                </li>
                <li>
                    <Link className="mr-4 hover:underline md:mr-6" href={{ pathname: '/license' }}>
                    License
                    </Link>
                </li>
                <li>
                    <a href="https://github.com/joeFong/roogle" className="hover:underline">GitHub</a>
                </li>
            </ul>
        </footer>
    )
}