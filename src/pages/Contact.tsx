import { toast } from "sonner";
const contactBg = "../assets/homesofa.png"; // you can change image
// import contactBg2 from "../assets/chair.png"; // you can change image 

export default function Contact() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("Message Sent Successfully ✅", {
      description: "We will get back to you soon!",
      style: {
        background: "#111827",
        color: "#fff",
        border: "1px solid #22c55e",
      },
    });

    e.currentTarget.reset();
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* HERO BACKGROUND */}
      <div
        className="flex-1 flex items-center justify-center bg-cover bg-center px-4 py-10"
        style={{ backgroundImage: `url(${contactBg})` }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* FORM CARD */}
        <div className="relative bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-lg">

          <h1 className="text-3xl font-bold mb-2 text-center">
            Contact Us
          </h1>

          <p className="text-gray-600 text-center mb-6">
            Have questions? We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Your Message"
              required
              className="w-full border p-3 rounded-lg h-32 focus:ring-2 focus:ring-black outline-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 BECK Furniture
      </footer>
    </div>
  );
}