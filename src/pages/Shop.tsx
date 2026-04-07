import { useState } from "react";
import { useCart } from "@/context/useCart";
import { toast } from "sonner";

// IMAGES
const sofa = new URL("../assets/fsofa.png", import.meta.url).href;
const chair = new URL("../assets/wooden chair.png", import.meta.url).href;
const table = new URL("../assets/modrentable.png", import.meta.url).href;
const office = new URL("../assets/office furniture.png", import.meta.url).href;
const school = new URL("../assets/school furniture.png", import.meta.url).href;

// ✅ Product type matches CartContext
type ProductType = {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
};

export default function Shop() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const products: ProductType[] = [
    { id: 1, name: "Sofa", price: 500, category: "Home", img: sofa },
    { id: 2, name: "Chair", price: 150, category: "Home", img: chair },
    { id: 3, name: "Table", price: 200, category: "Home", img: table },
    { id: 4, name: "Office Furniture", price: 300, category: "Office", img: office },
    { id: 5, name: "School Furniture", price: 180, category: "School", img: school },
  ];

  const filtered = products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || p.category === category)
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  const handleAdd = (item: ProductType) => {
    addToCart(item);
    toast.success(`${item.name} added to cart`, {
      style: { background: "#111", color: "#fff", border: "1px solid #22c55e", padding: "12px" },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
      {/* MAIN */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">Shop Furniture</h1>

        {/* FILTER BAR */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search furniture..."
            className="border p-3 rounded w-full lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="border p-3 rounded w-full lg:w-60 focus:outline-none" onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort By</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
          </select>
        </div>

        {/* CATEGORY */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {["All", "Home", "Office", "School"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base transition ${
                category === cat ? "bg-black text-white shadow" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No products found 😢</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition duration-300 group">
                <div className="overflow-hidden rounded-lg">
                  <img src={item.img} className="h-48 w-full object-cover group-hover:scale-110 transition duration-300" alt={item.name} />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                  <button
                    onClick={() => handleAdd(item)}
                    className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm sm:text-base">
          <div>© 2026 BECK Furniture</div>
          <div className="flex gap-4">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
          <div>support@beck.com</div>
        </div>
      </footer>
    </div>
  );
}