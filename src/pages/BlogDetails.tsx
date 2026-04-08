import { useParams, useNavigate } from "react-router-dom";
const blog1 = new URL("../assets/blog1.png", import.meta.url).href;
const blog2 = new URL("../assets/blog2.png", import.meta.url).href;
const blog3 = new URL("../assets/blog3.png", import.meta.url).href;
type BlogType = {
  id: number;
  title: string;
  content: string;
  image: string;
};

const blogs: BlogType[] = [
  {
    id: 1,
    title: "Modern Living Room Ideas",
    content:
      "Modern living rooms emphasize simplicity and comfort. Use neutral tones, smart furniture, and proper lighting to create a relaxing environment...",
    image: blog1,
  },
  {
    id: 2,
    title: "Choosing the Perfect Sofa",
    content:
      "A perfect sofa depends on size, material, and comfort. Always consider durability and how it fits your living space...",
    image: blog2,
  },
  {
    id: 3,
    title: "Office Furniture Trends",
    content:
      "Office furniture now focuses on ergonomics and productivity. Adjustable desks and supportive chairs are essential...",
    image: blog3,
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="p-10 text-center">
        <h1>Blog not found</h1>
        <button
          onClick={() => navigate("/blog")}
          className="text-blue-600 mt-4 cursor-pointer"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 max-w-3xl mx-auto p-6">
        <img
          src={blog.image}
          className="w-full h-64 object-cover rounded mb-4"
        />

        <h1 className="text-3xl font-bold mb-4">
          {blog.title}
        </h1>

        <p className="text-gray-600 leading-relaxed">
          {blog.content}
        </p>
      </main>

      <footer className="bg-black text-white p-6 text-center">
        © 2026 BECK Furniture
      </footer>
    </div>
  );
}