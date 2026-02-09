import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: "Email Us",
      detail: "jprashandh@gmail.com",
      link: "mailto:jprashandh@gmail.com",
    },
    {
      icon: <FiPhone size={24} />,
      title: "Call Us",
      detail: "+94 756595650",
      link: "tel:+94756595650",
    },
    {
      icon: <FiMapPin size={24} />,
      title: "Visit Us",
      detail: "Batticaloa, Sri Lanka",
      link: "#",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white px-8 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group block bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-300">
                    {info.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {info.detail}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 space-y-6"
            >
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] flex items-center gap-2"
              >
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  <FiSend />
                </span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
