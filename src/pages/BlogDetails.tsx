import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const blogs = [
  {
    id: "1",
    title: "Top 10 Furniture Trends",
    content:
      "Full article: Modern furniture is evolving with minimalism, eco-friendly materials, and smart designs. Neutral tones and multifunctional furniture are trending in 2026...",
  },
  {
    id: "2",
    title: "How to Choose the Perfect Sofa",
    content:
      "Full article: Choosing a sofa depends on size, comfort, fabric, and durability. Always measure your space and pick a color that matches your room theme...",
  },
  {
    id: "3",
    title: "Wooden vs Modern Furniture",
    content:
      "Full article: Wooden furniture offers durability and a classic look, while modern furniture focuses on sleek design and lightweight materials...",
  },
];

export default function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <h1 className="p-6">Blog not found</h1>;
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 leading-relaxed">{blog.content}</p>
    </div>
  );
}