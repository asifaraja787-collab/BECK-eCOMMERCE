
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50">

      {/* 🟢 HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Modern Furniture
          </h1>
          <p className="mt-4 text-gray-600">
            Discover stylish and comfortable furniture for your home.
          </p>

          <Link to="/shop">
            <button className="mt-6 bg-black text-white px-6 py-3 rounded">
              Shop Now
            </button>
          </Link>
        </div>

        <img
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3dvcmxkZmFjZXNsYWJfYV9zdGlsbF9saWZlX3Bob3Rvc2hvdF9vZl9hX21vZGVybl9saXZpbmdyb29tX21vZF84YmNmZDkwOS03N2I0LTRjYjktYTI3Ni03OWVmNjRlYjc1MmQucG5n.png"
          className="w-[400px] mt-6 md:mt-0"
        />
      </div>

      {/* 🟣 FEATURED PRODUCTS */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Luxury Sofa",
              price: "$500",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGq9aZYEVAewb0JqG8v12Sf6Om9LMVTSfZA&s",
            },
            {
              name: "Wooden Chair",
              price: "$150",
              img: "https://www.customcreation.com.pk/wp-content/uploads/2024/06/COPENHAGEN-Ergonomic-Triangular-Wooden-Chair-1-new.jpg",
            },
            {
              name: "Modern Table",
              price: "$200",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JxkyCuv3WVnNeBGIqs4eji3ddBGqvxwQHA&s",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img src={item.img} className="h-40 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-center">
                {item.name}
              </h3>
              <p className="text-center text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔵 CUSTOMER FEEDBACK */}
      <div className="bg-gray-100 p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Ali Khan",
              review: "Amazing quality furniture! Highly recommended.",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTK02SR18pYHIM7DKX5BDHkIgNKhSQxp-LA&s",
            },
            {
              name: "Sara Ahmed",
              review: "Fast delivery and great customer service.",
              image:
                "https://media.licdn.com/dms/image/v2/D4D03AQHLgxN3EBajBg/profile-displayphoto-scale_400_400/B4DZiqrWGjH4Ag-/0/1755210148044?e=2147483647&v=beta&t=As8qfQyLpjLCVzA59hUPy49RZUh999Ugi_stZvzsSac",
            },
            {
              name: "Usman Ali",
              review: "Stylish and affordable. Loved it!",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziJZ4_Zkntr40upIG4ao5qvrsqvWdnTrUEg&s",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              {/* ✅ IMAGE ADDED */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h4 className="mt-4 font-semibold">
                - {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      
      {/* 🟤 FOOTER */}
<div className="bg-black text-white py-4 px-6 mt-10">
  <div className="flex flex-col md:flex-row items-center justify-between">

    {/* LOGO */}
    <h1 className="text-lg font-bold">BECK</h1>

    {/* LINKS - ONE LINE */}
    <ul className="flex space-x-6 text-gray-400 mt-2 md:mt-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>

    {/* CONTACT */}
    <div className="text-gray-400 text-sm mt-2 md:mt-0">
      support@beck.com | +92 300 0000000
    </div>
  </div>

  {/* COPYRIGHT */}
  
</div>
    </div>
  );
}