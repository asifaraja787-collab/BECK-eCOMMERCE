import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import blog1 from "../assets/blog1.png";
const blog2 = new URL("../assets/blog2.png", import.meta.url).href;
const blog3 = new URL("../assets/blog3.png", import.meta.url).href;
const blog1 = new URL("../assets/blog1.png", import.meta.url).href;
//import blog2 from "../assets/blog2.png";
//import blog3 from "../assets/blog3.png";

// ✅ Product type
// type ProductType = {
//   id: number;
//   name: string;
//   price: number;
//   img: string;
// };
interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
}

// ✅ BUILT-IN BLOGS ONLY
const builtInBlogs: BlogPost[] = [
  {
    id: 1,
    title: "Modern Living Room Ideas",
    content:
      "Modern living rooms focus on simplicity, comfort, and elegance. Neutral colors, minimal furniture, and smart lighting create a relaxing environment...",
    image: blog1,
    date: "2026-04-03",
  },
  {
    id: 2,
    title: "Choosing the Perfect Sofa",
    content:
      "Selecting the right sofa depends on size, comfort, and durability. Always measure your space and choose materials that match your lifestyle...",
    image: blog2,
    date: "2026-04-02",
  },
  {
    id: 3,
    title: "Office Furniture Trends",
    content:
      "Office furniture is evolving with ergonomic designs, adjustable desks, and comfortable seating to improve productivity and posture...",
    image: blog3,
    date: "2026-04-01",
  },
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(builtInBlogs);
  const [showCreate, setShowCreate] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleAdd = () => {
    if (!title || !content) {
      setError("All fields are required!");
      return;
    }

    const newBlog: BlogPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
      image: image ? URL.createObjectURL(image) : blog1,
    };

    // ✅ TEMPORARY ONLY (no storage)
    setPosts([newBlog, ...posts]);

    setTitle("");
    setContent("");
    setImage(null);
    setError("");
    setShowCreate(false);
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">

        <h1 className="text-3xl font-bold text-center mb-6">
          Our Blog
        </h1>

        {/* CREATE BUTTON */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowCreate(!showCreate)}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800" cursor-pointer
          >
            {showCreate ? "Cancel" : "Create Blog"}
          </button>
        </div>

        {/* CREATE FORM */}
        {showCreate && (
          <div className="bg-white p-6 rounded-xl shadow mb-6">
            <input
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />

            <textarea
              placeholder="Blog Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
              rows={4}
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="mb-3"
            />

            {error && <p className="text-red-500 mb-2">{error}</p>}

            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-6 py-2 rounded cursor-pointer"
            >
              Add Blog
            </button>
          </div>
        )}

        {/* BLOGS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={post.image}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-2">
                  {post.date}
                </p>

                <p>
                  {post.content.slice(0, 100)}...
                </p>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="text-blue-600 cursor-pointer"
                  >
                    Read More →
                  </button>

                  {/* DELETE ONLY NEW BLOGS */}
                  {post.id > 3 && (
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-500 cursor-pointer"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-black text-white p-6 text-center cursor-pointer">
        © 2026 BECK Furniture
      </footer>
    </div>
  );
}