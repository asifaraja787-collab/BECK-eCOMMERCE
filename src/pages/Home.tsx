import { Link } from "react-router-dom";
import { useCart } from "@/context/useCart";
import { toast } from "sonner";
import Container from "../components/Container";

// IMAGES
const homesofa = new URL("../assets/homesofa.png", import.meta.url).href;
const sofa = new URL("../assets/fsofa.png", import.meta.url).href;
const chair = new URL("../assets/wooden chair.png", import.meta.url).href;
const table = new URL("../assets/modrentable.png", import.meta.url).href;
const boy1 = new URL("../assets/boy1.jpeg", import.meta.url).href;
const boy2 = new URL("../assets/boy2.jpeg", import.meta.url).href;
const girl = new URL("../assets/girl.jpg", import.meta.url).href;

// ✅ Product type
type ProductType = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export default function Home() {
  const { addToCart } = useCart();

  const products: ProductType[] = [
    { id: 1, name: "Luxury Sofa", price: 500, img: sofa },
    { id: 2, name: "Wooden Chair", price: 150, img: chair },
    { id: 3, name: "Modern Table", price: 200, img: table },
  ];

  const handleAdd = (item: ProductType) => {
    addToCart(item);

    toast.success(`${item.name} added to cart`, {
      style: {
        background: "#111",
        color: "#fff",
        border: "1px solid #22c55e",
      },
    });
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* HERO */}
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between py-12">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Modern Furniture</h1>
            <p className="mt-4 text-gray-600">
              Discover premium furniture crafted for comfort and style.
            </p>
            <Link to="/shop">
              <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
                Shop Now
              </button>
            </Link>
          </div>
          <img src={homesofa} className="w-full max-w-md mt-8 md:mt-0" alt="Modern Sofa" />
        </div>
      </Container>

      {/* PRODUCTS */}
      <Container>
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:scale-105 transition duration-300 text-center"
            >
              <img src={item.img} className="h-40 mx-auto mb-4 object-contain" alt={item.name} />
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-500">${item.price}</p>
              <button
                onClick={() => handleAdd(item)}
                className="mt-4 bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </Container>

      {/* TESTIMONIALS */}
      <div className="bg-gray-100 mt-12 py-12">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Ali Khan", img: boy1, review: "Amazing quality!" },
              { name: "Usman Ali", img: boy2, review: "Loved it!" },
              { name: "Sara Ahmed", img: girl, review: "Excellent service!" },
            ].map((item) => (
              <div key={item.name} className="bg-white p-6 rounded-xl shadow text-center">
                <img src={item.img} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" alt={item.name} />
                <p className="italic text-gray-600">"{item.review}"</p>
                <h4 className="mt-3 font-semibold">- {item.name}</h4>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center mt-10">© 2026 BECK Furniture. All rights reserved.</footer>
    </div>
  );
}