import { MdHive, MdAddBox, MdPerson } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-zinc-950 flex justify-between items-center py-4 px-16 shadow-lg'>
            <NavLink to='/' className='text-amber-500 outline-none focus-within:outline-none'>
                <h1 className='text-3xl flex items-center gap-2 font-bold'>Career Dock<MdHive /></h1>
            </NavLink>
            <div className='text-lg flex items-center gap-8'>
                <NavLink to='/create' className='flex items-center gap-1 text-zinc-500 font-semibold hover:text-amber-500 transition-all cursor-default'>Create<MdAddBox /></NavLink>
                <NavLink to='/' className='flex items-center gap-1 text-zinc-500 font-semibold hover:text-amber-500 transition-all cursor-default'>Profile<MdPerson /></NavLink>
            </div>
        </nav>
    );
};

export default Navbar;