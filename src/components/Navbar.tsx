import { Link } from "react-router-dom";
//import { useCart } from "../context/CartContext";
import { useCart } from "@/context/useCart";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">BECK</h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <Link className="hover:text-black transition" to="/">Home</Link>
          <Link className="hover:text-black transition" to="/shop">Shop</Link>
          <Link className="hover:text-black transition" to="/blog">Blog</Link>
          <Link className="hover:text-black transition" to="/contact">Contact</Link>

          {/* CART */}
          <Link to="/cart" className="relative text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="relative text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t flex flex-col items-center py-4 space-y-4">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/shop">Shop</Link>
          <Link onClick={() => setOpen(false)} to="/blog">Blog</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}