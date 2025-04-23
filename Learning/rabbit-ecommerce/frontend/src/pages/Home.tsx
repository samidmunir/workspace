import Hero from '../components/layout/Hero.tsx';
import GenderCollection from '../components/products/GenderCollection.tsx';
import NewArrivals from '../components/products/NewArrivals.tsx';
import ProductDetails from '../components/products/ProductDetails.tsx';

const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollection />
            <NewArrivals />
            <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
            <ProductDetails />
        </div>
    );
};

export default Home;