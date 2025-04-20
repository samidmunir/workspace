import Header from '../common/Header.tsx';
import Footer from '../common/Footer.tsx';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  );
};

export default UserLayout;