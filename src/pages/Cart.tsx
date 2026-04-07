import { useState } from "react";
//import { useCart } from "../context/CartContext";
import { useCart } from "@/context/useCart";
import { toast } from "sonner";

// shadcn dialog
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

const Footer = () => (
  <footer className="bg-black text-white py-4 px-6 mt-auto w-full">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-lg font-bold">BECK</h1>

      <ul className="flex flex-wrap gap-4 text-gray-400 mt-2 md:mt-0">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="text-gray-400 text-sm mt-2 md:mt-0">
        support@beck.com
      </div>
    </div>
  </footer>
);

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();

  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // ✅ Only selected items total
  const total = cart
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ✅ Select item
  const toggleSelect = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const handleRemove = (id: number) => {
    removeItem(id);
    toast.success("Item removed ❌", {
      style: {
        background: "#7f1d1d",
        color: "#fff",
      },
    });
  };

  const handleConfirm = () => {
    if (selectedItems.length === 0) {
      setError("Please select items to checkout!");
      return;
    }

    if (!name || !address || !phone) {
      setError("All fields are required!");
      return;
    }

    // ✅ Remove ONLY selected items
    selectedItems.forEach((id) => removeItem(id));

    toast.success("Order Placed 🎉", {
      description: `Thanks ${name}, your selected items are confirmed!`,
      style: {
        background: "#022c22",
        color: "#fff",
        border: "1px solid #22c55e",
      },
    });

    // Reset
    setSelectedItems([]);
    setName("");
    setAddress("");
    setPhone("");
    setError("");
    setOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">

      {/* MAIN */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            Your cart is empty 🛒
          </p>
        ) : (
          <div className="space-y-4">

            {cart.map((item: {id: number; name: string; price: number; quantity: number}) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                {/* CHECKBOX */}
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelect(item.id)}
                  className="w-5 h-5"
                />

                {/* INFO */}
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500">${item.price}</p>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* PRICE */}
                <div className="font-bold text-center w-24">
                  ${item.price * item.quantity}
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TOTAL */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold">
            Selected Total: ${total}
          </h2>

          <button
            onClick={() => setOpen(true)}
            disabled={selectedItems.length === 0}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 cursor-pointer"
          >
            Checkout Selected
          </button>
        </div>
      </main>

      {/* DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-xl">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-3 rounded"
            />

            <input
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border p-3 rounded"
            />

            <input
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 rounded"
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              onClick={handleConfirm}
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 cursor-pointer"
            >
              Confirm Payment
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}