"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


interface NavLinkProps {
  link : {
    title: string;
    url: string;
  }
}

const NavLink = ({ link }:NavLinkProps) => {
  const pathName = usePathname();

  return (
    <Link 
    className={`text-base font-medium rounded-lg p-2 text-neutral-200 ${pathName === link.url ? "bg-slate-200 text-neutral-900":"hover:bg-slate-200 hover:bg-opacity-60 hover:text-slate-900"}`} 
    href={link.url}
  >
    {link.title}
  </Link>
  );
};

export default NavLink;
