"use client";

import Link from "next/link";
import { TwitterIcon, LinkedinIcon, GithubIcon } from 'next-share';
import NavLink from "./navLink";
import NavMenu from "./navMenu";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/project", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Abhishek Ruby</span>
          <span className="w-12 h-8 rounded bg-[#ffffff] text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex items-center justify-center gap-8 w-1/3">
        <Link href="/">
          {/* <Image src="/github.png" alt="github" width={26} height={26} /> */}
        </Link>
        <Link href="/">
        <GithubIcon size={55} round />
        </Link>
        <Link href="/">
          <LinkedinIcon size={35} round />
        </Link>
        <Link href="/">
        <TwitterIcon size={35} round />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <NavMenu links={links} />
    </div>
  );
};

export default Navbar;
