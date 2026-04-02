// // import { useState } from "react";
// // import { useCart } from "../context/CartContext";
// // import { Dialog } from "../components/ui/dialog";

// // const Footer = () => (
// //   <footer className="bg-black text-white py-4 px-6 mt-auto w-full">
// //     <div className="flex flex-col md:flex-row items-center justify-between">
// //       <h1 className="text-lg font-bold">BECK</h1>

// //       <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-400 mt-2 md:mt-0">
// //         <li><a href="/">Home</a></li>
// //         <li><a href="/shop">Shop</a></li>
// //         <li><a href="/blog">Blog</a></li>
// //         <li><a href="/contact">Contact</a></li>
// //       </ul>

// //       <div className="text-gray-400 text-sm mt-2 md:mt-0 text-center md:text-right">
// //         support@beck.com | +92 300 0000000
// //       </div>
// //     </div>

    
// //   </footer>
// // );

// // export default function Cart() {
// //   const { cart, increaseQty, decreaseQty, removeItem } = useCart();
// //   const [open, setOpen] = useState(false);

// //   const [name, setName] = useState("");
// //   const [address, setAddress] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [error, setError] = useState("");

// //   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

// //   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const value = e.target.value;
// //     if (/^\d*$/.test(value) && value.length <= 11) {
// //       setPhone(value);
// //       setError("");
// //     } else {
// //       setError("Only numbers allowed, max 11 digits!");
// //     }
// //   };
// //   const handleRemove = (id: number) => {
// //   removeItem(id);
// //   toast({
// //     title: "Item Removed",
// //     description: "The item has been removed from your cart.",
// //     variant: "destructive",
// //   });
// // };

// //   const handleConfirm = () => {
// //     if (!name || !address || !phone) {
// //       setError("All fields are required!");
// //       return;
// //     }
// //     if (!/^\d{1,11}$/.test(phone)) {
// //       setError("Phone must contain only numbers (max 11 digits)!");
// //       return;
// //     }
// //     alert(`Order Placed ✅\nName: ${name}\nAddress: ${address}\nPhone: ${phone}`);
// //     setName("");
// //     setAddress("");
// //     setPhone("");
// //     setError("");
// //     setOpen(false);
// //   };

// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       {/* MAIN CONTENT */}
// //       <div className="p-10 flex-grow">
// //         <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

// //         {cart.length === 0 ? (
// //           <p className="text-gray-500">No items in cart</p>
// //         ) : (
// //           <div className="space-y-4">
// //             {cart.map((item) => (
// //               <div
// //                 key={item.id}
// //                 className="flex justify-between items-center border p-4 rounded"
// //               >
// //                 <div>
// //                   <p className="font-semibold">{item.name}</p>
// //                   <p className="text-gray-500">${item.price}</p>
// //                 </div>

// //                 <div className="flex items-center gap-3">
// //                   <button
// //                     onClick={() => decreaseQty(item.id)}
// //                     className="px-3 py-1 bg-gray-200 rounded"
// //                   >
// //                     -
// //                   </button>
// //                   <span className="font-semibold">{item.quantity}</span>
// //                   <button
// //                     onClick={() => increaseQty(item.id)}
// //                     className="px-3 py-1 bg-gray-200 rounded"
// //                   >
// //                     +
// //                   </button>
// //                 </div>

// //                 <p className="font-bold">${item.price * item.quantity}</p>

// //                 <button
// //                   onClick={() => removeItem(item.id)}
// //                   className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
// //                 >
// //                   Remove
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         <h2 className="mt-6 text-xl font-bold">Total: ${total}</h2>

// //         <button
// //           onClick={() => setOpen(true)}
// //           disabled={cart.length === 0}
// //           className="mt-4 bg-green-600 text-white px-6 py-2 rounded disabled:bg-gray-400"
// //         >
// //           Checkout
// //         </button>

// //         <Dialog open={open} onClose={() => setOpen(false)}>
// //           <h2 className="text-xl font-bold mb-4">Checkout</h2>

// //           <input
// //             type="text"
// //             placeholder="Full Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             className="w-full border p-2 mb-2"
// //           />

// //           <input
// //             type="text"
// //             placeholder="Address"
// //             value={address}
// //             onChange={(e) => setAddress(e.target.value)}
// //             className="w-full border p-2 mb-2"
// //           />

// //           <input
// //             type="text"
// //             placeholder="0123456789"
// //             value={phone}
// //             onChange={handlePhoneChange}
// //             className="w-full border p-2 mb-2"
// //           />

// //           {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

// //           <button
// //             onClick={handleConfirm}
// //             className="w-full bg-black text-white py-2 rounded"
// //           >
// //             Confirm Payment
// //           </button>
// //         </Dialog>
// //       </div>

// //       {/* FOOTER */}
// //       <Footer />
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import { Dialog } from "../components/ui/dialog";
// import { useToast } from "../components/ui/use-toast"; // ✅ FIXED

// const Footer = () => (
//   <footer className="bg-black text-white py-4 px-6 mt-auto w-full">
//     <div className="flex flex-col md:flex-row items-center justify-between">
//       <h1 className="text-lg font-bold">BECK</h1>

//       <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-400 mt-2 md:mt-0">
//         <li><a href="/">Home</a></li>
//         <li><a href="/shop">Shop</a></li>
//         <li><a href="/blog">Blog</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>

//       <div className="text-gray-400 text-sm mt-2 md:mt-0 text-center md:text-right">
//         support@beck.com | +92 300 0000000
//       </div>
//     </div>
//   </footer>
// );

// export default function Cart() {
//   const { cart, increaseQty, decreaseQty, removeItem } = useCart();
//   const { toast } = useToast(); // ✅ ADDED

//   const [open, setOpen] = useState(false);

//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [error, setError] = useState("");

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value) && value.length <= 11) {
//       setPhone(value);
//       setError("");
//     } else {
//       setError("Only numbers allowed, max 11 digits!");
//     }
//   };

//   // ✅ UPDATED: now includes toast
//   const handleRemove = (id: number) => {
//     removeItem(id);
//     toast({
//       title: "Item Removed",
//       description: "The item has been removed from your cart.",
//       variant: "destructive",
//     });
//   };

//   const handleConfirm = () => {
//     if (!name || !address || !phone) {
//       setError("All fields are required!");
//       return;
//     }
//     if (!/^\d{1,11}$/.test(phone)) {
//       setError("Phone must contain only numbers (max 11 digits)!");
//       return;
//     }

//     alert(`Order Placed ✅
// Name: ${name}
// Address: ${address}
// Phone: ${phone}`);

//     setName("");
//     setAddress("");
//     setPhone("");
//     setError("");
//     setOpen(false);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* MAIN CONTENT */}
//       <div className="p-10 flex-grow">
//         <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

//         {cart.length === 0 ? (
//           <p className="text-gray-500">No items in cart</p>
//         ) : (
//           <div className="space-y-4">
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center border p-4 rounded"
//               >
//                 <div>
//                   <p className="font-semibold">{item.name}</p>
//                   <p className="text-gray-500">${item.price}</p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => decreaseQty(item.id)}
//                     className="px-3 py-1 bg-gray-200 rounded"
//                   >
//                     -
//                   </button>
//                   <span className="font-semibold">{item.quantity}</span>
//                   <button
//                     onClick={() => increaseQty(item.id)}
//                     className="px-3 py-1 bg-gray-200 rounded"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <p className="font-bold">${item.price * item.quantity}</p>

//                 {/* ✅ ONLY CHANGE HERE */}
//                 <button
//                   onClick={() => handleRemove(item.id)}
//                   className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         <h2 className="mt-6 text-xl font-bold">Total: ${total}</h2>

//         <button
//           onClick={() => setOpen(true)}
//           disabled={cart.length === 0}
//           className="mt-4 bg-green-600 text-white px-6 py-2 rounded disabled:bg-gray-400"
//         >
//           Checkout
//         </button>

//         <Dialog open={open} onClose={() => setOpen(false)}>
//           <h2 className="text-xl font-bold mb-4">Checkout</h2>

//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border p-2 mb-2"
//           />

//           <input
//             type="text"
//             placeholder="Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="w-full border p-2 mb-2"
//           />

//           <input
//             type="text"
//             placeholder="0123456789"
//             value={phone}
//             onChange={handlePhoneChange}
//             className="w-full border p-2 mb-2"
//           />

//           {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//           <button
//             onClick={handleConfirm}
//             className="w-full bg-black text-white py-2 rounded"
//           >
//             Confirm Payment
//           </button>
//         </Dialog>
//       </div>

//       {/* FOOTER */}
//       <Footer />
//     </div>
//   );
// }




import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Dialog } from "../components/ui/dialog";
import { toast } from "sonner"

const Footer = () => (
  <footer className="bg-black text-white py-4 px-6 mt-auto w-full">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-lg font-bold">BECK</h1>

      <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-400 mt-2 md:mt-0">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="text-gray-400 text-sm mt-2 md:mt-0 text-center md:text-right">
        support@beck.com | +92 300 0000000
      </div>
    </div>
  </footer>
);

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();
 

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 11) {
      setPhone(value);
      setError("");
    } else {
      setError("Only numbers allowed, max 11 digits!");
    }
  };

  // ✅ ONLY NEW FUNCTION
  const handleRemove = (id: number) => {
    removeItem(id);
    toast("Item removed from cart", {
      description: "The item has been removed from your cart.",
    });
  };

  const handleConfirm = () => {
    if (!name || !address || !phone) {
      setError("All fields are required!");
      return;
    }
    if (!/^\d{1,11}$/.test(phone)) {
      setError("Phone must contain only numbers (max 11 digits)!");
      return;
    }

    alert(`Order Placed ✅\nName: ${name}\nAddress: ${address}\nPhone: ${phone}`);

    setName("");
    setAddress("");
    setPhone("");
    setError("");
    setOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-10 flex-grow">
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
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">${item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                <p className="font-bold">${item.price * item.quantity}</p>

                {/* ✅ ONLY CHANGE HERE */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <h2 className="mt-6 text-xl font-bold">Total: ${total}</h2>

        <button
          onClick={() => setOpen(true)}
          disabled={cart.length === 0}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded disabled:bg-gray-400"
        >
          Checkout
        </button>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Checkout</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 mb-2"
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-2 mb-2"
          />

          <input
            type="text"
            placeholder="0123456789"
            value={phone}
            onChange={handlePhoneChange}
            className="w-full border p-2 mb-2"
          />

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            onClick={handleConfirm}
            className="w-full bg-black text-white py-2 rounded"
          >
            Confirm Payment
          </button>
        </Dialog>
      </div>

      <Footer />
    </div>
  );
}
