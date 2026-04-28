import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch products"); 
        }
        return res.json();
      })
      .then(data => {
       setProducts(data.products);
       setLoading(false);
      })
      .catch(err => {
        setError(err.message); 
        setLoading(false);
      });
  }, []);


  if (loading) {
  return (
    <div className="text-center py-10 text-lg">
      Loading products...
    </div>
  );
}
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>;

  return (
    <div className="p-5">

      <h2 className="text-2xl font-bold mb-6">
        Products
      </h2>

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search products..."
        className="border rounded p-2 mb-6 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {products
          .filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
          )
          .map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}

      </div>
    </div>
  );
};

export default Products;