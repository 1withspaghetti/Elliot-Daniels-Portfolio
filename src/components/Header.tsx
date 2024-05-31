import Link from "next/link";

export default function Header() {
    return (
        <header className="flex bg-gray-900 h-14 items-center justify-between sm:justify-start px-4 sm:px-8 gap-x-4 sm:gap-x-8">
            <div>
                <Link href="/" className="text-lg font-bold py-4 hover:text-purple-300 transition">Elliot Daniels</Link>
            </div>
            <ul className="flex gap-x-4 items-center">
                <li>
                    <Link href="/" className="py-4 hover:text-purple-300 transition">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="py-4 hover:text-purple-300 transition">About</Link>
                </li>
                <li>
                    <Link href="/hobbies" className="py-4 hover:text-purple-300 transition">Hobbies</Link>
                </li>
                <li>
                    <Link href="https://elliotdaniels.darkroom.com/" className="py-4 hover:text-purple-300 transition">Store</Link>
                </li>
            </ul>
        </header>
    );
}