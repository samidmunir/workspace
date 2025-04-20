import { useState } from 'react';
import { MdHive, MdAddBox, MdPerson } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-zinc-950 text-white p-4 shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8'>
        <NavLink to='/' className='text-amber-500 outline-none focus-within:outline-none'>
          <h1 className='text-3xl flex items-center gap-2 font-bold'>Career Dock <MdHive /></h1>
        </NavLink>

        {/* Desktop Menu */}
        <div className='hidden md:flex text-lg items-center gap-8'>
          <NavLink to='/create' className='flex items-center gap-1 text-zinc-500 font-semibold hover:text-amber-500 transition-all'>Create<MdAddBox /></NavLink>
          <NavLink to='/' className='flex items-center gap-1 text-zinc-500 font-semibold hover:text-amber-500 transition-all'>Profile<MdPerson /></NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        } mt-2 px-4 space-y-4`}
      >
        <NavLink to='/create' onClick={() => setIsOpen(false)} className='text-lg flex items-center gap-1 text-zinc-300 hover:text-amber-500 transition-all'>Create<MdAddBox /></NavLink>
        <NavLink to='/' onClick={() => setIsOpen(false)} className='text-lg flex items-center gap-1 text-zinc-300 hover:text-amber-500 transition-all'>Profile<MdPerson /></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
