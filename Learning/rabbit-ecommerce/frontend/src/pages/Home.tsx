import Hero from '../components/layout/Hero.tsx';
import GenderCollection from '../components/products/GenderCollection.tsx';
import NewArrivals from '../components/products/NewArrivals.tsx';

const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollection />
            <NewArrivals />
        </div>
    );
};

export default Home;