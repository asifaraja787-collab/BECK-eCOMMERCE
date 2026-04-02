
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Dialog } from "../components/ui/dialog";
import { toast } from "sonner"

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();
  const [open, setOpen] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id: number) => {
    removeItem(id);
    toast("Item removed from cart", {
      description: "The item has been removed from your cart.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-10 flex-1">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded"
              >
                {/* PRODUCT INFO */}
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>${item.price}</p>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>

                {/* TOTAL PRICE */}
                <p className="font-bold">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
        )}

        <h2 className="mt-6 text-xl font-bold">Total: ${total}</h2>

        {/* CHECKOUT BUTTON */}
        <button
          onClick={() => setOpen(true)}
          disabled={cart.length === 0}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded disabled:bg-gray-400"
        >
          Checkout
        </button>

        {/* DIALOG */}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Checkout</h2>

          <input placeholder="Full Name" className="w-full border p-2 mb-2" />
          <input placeholder="Address" className="w-full border p-2 mb-2" />
          <input
            type="text"
            placeholder="0123456789"
            className="w-full border p-2 mb-4"
          />

          <button
            onClick={() => {
              toast("Payment successful!", {
                description: "Thank you for your purchase!",
              });
              setOpen(false);
            }}
            className="w-full bg-black text-white py-2 rounded"
          >
            Confirm Payment
          </button>
        </Dialog>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white p-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm md:text-base gap-4 md:gap-0">
          <div>© 2026 BECK Furniture. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/shop" className="hover:underline">
              Shop
            </a>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
          <div>Email: support@beck.com | Phone: +92 300 0000000</div>
        </div>
      </footer>
    </div>
  );
}