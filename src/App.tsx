// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";

// // // Pages
// // import Home from "./pages/Home";
// // import Shop from "./pages/Shop";
// // import Blog from "./pages/Blog";
// // import Contact from "./pages/Contact";
// // import Cart from "./pages/Cart";
// // import { Toaster } from "./components/ui/toaster";


// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Navbar />

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/shop" element={<Shop />} />
// //         <Route path="/blog" element={<Blog />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/cart" element={<Cart />} />
// //       </Routes>
// //       <Toaster />
// //     </BrowserRouter>
    
// //   );
// // }

// // export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import Cart from "./pages/Cart";



// function App() {
//   return (
    
//       <BrowserRouter>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>

       
//       </BrowserRouter>

//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "@/context/CartProvider";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import { Toaster } from "./components/ui/sonner";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>

      <Toaster />
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;