import { useState } from "react";

type BlogType = {
  id: number;
  title: string;
  desc: string;
  content: string;
};

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);

  const blogs: BlogType[] = [
    {
      id: 1,
      title: "Top 10 Furniture Trends",
      desc: "Discover the latest trends in modern furniture design.",
      content:
        "Full article: Modern furniture is evolving with minimalism, eco-friendly materials, and smart designs. Neutral tones and multifunctional furniture are trending in 2026. Designers are focusing on sustainability and comfort.",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Sofa",
      desc: "Tips to select the best sofa for your home.",
      content:
        "Full article: Choosing a sofa depends on size, comfort, fabric, and durability. Always measure your space and pick a color that matches your room theme. Test seating comfort before buying.",
    },
    {
      id: 3,
      title: "Wooden vs Modern Furniture",
      desc: "Compare traditional and modern styles.",
      content:
        "Full article: Wooden furniture offers durability and a classic look, while modern furniture focuses on sleek design and lightweight materials. Your choice depends on lifestyle and interior theme.",
    },
  ];

  // 👉 IF USER CLICKED READ MORE
  if (selectedBlog) {
    return (
      <div className="p-10 max-w-3xl mx-auto">
        
        {/* BACK BUTTON */}
        <button
          onClick={() => setSelectedBlog(null)}
          className="mb-4 text-blue-600 hover:underline"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-4">
          {selectedBlog.title}
        </h1>

        <p className="text-gray-600 leading-relaxed">
          {selectedBlog.content}
        </p>
      </div>
    );
  }

  // 👉 DEFAULT BLOG LIST VIEW
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-500 mt-2">{blog.desc}</p>

            <button
              onClick={() => setSelectedBlog(blog)}
              className="mt-4 text-blue-600 hover:underline"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
      
    </div>
    
  );
}