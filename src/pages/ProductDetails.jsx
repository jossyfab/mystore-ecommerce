import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-5 text-center">
      <img src={product.thumbnail} className="w-60 mx-auto" />
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="mt-2 text-green-600 font-bold">${product.price}</p>
      <p className="text-gray-600 mt-2">{product.description}</p>
    </div>
  );
};

export default ProductDetails;