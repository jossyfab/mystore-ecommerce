import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 py-20">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
                Shop The Latest Products
            </h1>

            <p className="text-gray-600 max-w-xl mb-8 text-sm sm:text-base">
                Discover amazing deals on top-quality products. Fast, simple, and reliable shopping experience.
            </p>

            <Link to="/products">
                <button className="bg-black text-white px-6 py-3 rounded cursor-pointer text-lg hover:bg-gray-800 active-scale-95 transition">
                Browse Products
                </button>
            </Link>

        </div>
    )
}
 
export default Home;