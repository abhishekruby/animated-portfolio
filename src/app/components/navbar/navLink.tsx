"use client";

import { Link } from 'react-scroll';

interface NavLinkProps {
  link : {
    title: string;
    id: string;
  }
}

const NavLink = ({ link }:NavLinkProps) => {

  return (
    <Link
      to={link.id}
      smooth={true}
      duration={500}
      offset={-100}
      spy={true}
      activeClass="active bg-slate-200 text-neutral-900"
      className={`text-base font-medium rounded-lg p-2 text-neutral-200 hover:bg-slate-200 hover:bg-opacity-60 hover:text-slate-900`} 
  >
    {link.title}
  </Link>
  );
};

export default NavLink;
