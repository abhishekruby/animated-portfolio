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
    className={`text-base font-medium rounded-lg p-2 ${pathName === link.url && "bg-slate-900 text-slate-100"} text-slate-100`} 
    href={link.url}
  >
    {link.title}
  </Link>
  );
};

export default NavLink;
