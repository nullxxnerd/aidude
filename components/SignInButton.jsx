"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import defaultpic from "@/public/defaultpic.jpg";
import Link from "next/link";
export default function SignInButton() {
  const { data, status } = useSession();
  // if (status === "loading") return <p> loading... please wait</p>;

  if (status === "authenticated") {
    return (
      <>
        <div className="dropdown dropdown-hover text-white ">
          <label className="flex flex-row items-center gap-1 my-2" tabIndex="0">
            <Image
              className="rounded-full w-8 h-8"
              src={data.user.image || defaultpic}
              alt={data.user.name + " photo"}
              width={40}
              height={40}
              unoptimized
            />
            {/* <p className="text-sm"> {data.user.name}</p> */}
          </label>
          <div className="dropdown-menu dropdown-menu-bottom-left">
            <Link href="/profile" className="dropdown-item text-sm text-center">
              Profile
            </Link>
            <button
              className="dropdown-item flex flex-row justify-center text-sm"
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <Link href="/login" className="button h-10">
        Login
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 ml-2"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}
