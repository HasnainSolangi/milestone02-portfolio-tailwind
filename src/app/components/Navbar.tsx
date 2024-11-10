// src/app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar bg-primary p-4 text-white flex justify-between items-center">
      <div className="text-xl font-semibold">Portfolio</div>
      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
