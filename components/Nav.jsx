"use client";
import SignInButton from "@/components/SignInButton";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/ailogo.png";
function Navbar() {
  return (
    <div className="flex justify-center px-2 py-1.5 navbar-sticky">
      <nav className="navbar max-w-8xl navbar-glass font-bold   ">
        <div className="navbar-start gap-3">
          <Link href="/" className=" whitespace-nowrap font-semibold mr-4">
            <Image
              src={logo}
              alt="logo"
              className="w-12 h-12 hover:scale-105 transition-all"
            />
            {/* AI Dude */}
          </Link>
          <Link
            href="/"
            className="navbar-item whitespace-nowrap transition-all font-semibold text-xs lg:text-sm "
          >
            AI List
          </Link>
          {/* <Link
            href="/"
            className="navbar-item whitespace-nowrap  font-semibold transition-all text-xs lg:text-sm"
          >
            Ranking
          </Link> */}
          <Link
            href="/create-post"
            className="navbar-item  whitespace-nowrap font-semibold  transition-all text-xs lg:text-sm"
          >
            Create Post
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <SignInButton />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
