import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold">{product.name}</h2>
      <p>${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-black text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}