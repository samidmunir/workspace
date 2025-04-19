import Topbar from '../layout/Topbar.tsx';
import Navbar from './Navbar.tsx';

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
        <Topbar />
        <Navbar />
    </header>
  );
};

export default Header;