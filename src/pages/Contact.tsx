import { toast } from "sonner"

export default function Contact() {
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast("Message sent successfully!", {
      description: "We'll get back to you soon.",});

    // reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        
        <h1 className="text-2xl font-bold mb-6 text-center">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Your Message"
            required
            className="w-full border p-3 rounded h-32"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}