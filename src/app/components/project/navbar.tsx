import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [category, setCategroy] = useState([
    'All Projects',
    'Featured Work',
    'Client Work',
  ])
  const [active, setActive] = useState('All Projects')
  return (
    <nav className={`${className} flex justify-between items-center p-2 py-4 ring-1 ring-slate-400 rounded-full`}>
      <ul className="flex">
        {
          category.map((item, index) => {
            return (
              <li key={index} className="px-4 last:border-r-0 border-r-2 ">
              <motion.a
                onClick={()=>setActive(item)}
                className={`p-1 px-2 text-base font-medium ${active == item ? "bg-slate-200 text-neutral-900": "text-slate-200 bg-slate-900" }  rounded-lg hover:bg-slate-200 hover:text-neutral-900 hover:bg-opacity-50`}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {item}
              </motion.a>
            </li>
            )
          })
        }
       
      </ul>
    </nav>
  );
};

export default Navbar;