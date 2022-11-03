// Imports
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="bg-gray-800 text-gray-100 py-5">
      <div className="max-w-4xl m-auto flex justify-between">
        <div></div>
        <div className="topNav">
          <Link href="/">home</Link>
          <Link href="/projects">projects</Link>
          <Link href="/blog">blog</Link>
          <Link href="/account">dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
