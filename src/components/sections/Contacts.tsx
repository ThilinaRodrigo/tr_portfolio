import { useState, useRef } from "react";
import { FiMail, FiPhone,FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  // access env variables
  const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID!;
  const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID!;
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY!;

// {{from_name}}
// {{from_email}}

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: "Email",
      detail: "thilinalakshan2001@gmail.com",
      link: "mailto:thilinalakshan2001@gmail.com",
    },
    {
      icon: <FaWhatsapp size={24} />,
      title: "WhatsApp",
      detail: "+94 772744053",
      link: "https://wa.me/94772744053",
    },
    {
      icon: <FiPhone size={24} />,
      title: "Phone",
      detail: "+94 772744053",
      link: "tel:+94772744053",
    },
    // {
    //   icon: <FiMapPin size={24} />,
    //   title: "Visit Us",
    //   detail: "Horana, Sri Lanka",
    //   link: "#",
    // },
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

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        serviceID,
        templateID,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again.");
          setTimeout(() => setStatus(""), 5000);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent text-white px-8 py-20 border-t border-gray-800/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, research inquiry, or opportunity? I'd love to hear about it. Send me a message and I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group block bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-slate-950/80 backdrop-blur-xl border border-gray-800/80 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(37,99,235,0.18)] hover:-translate-y-1.5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-md shadow-blue-500/10 text-2xl">
                    {info.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{info.title}</h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
                      {info.detail}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right - Contact Form Container */}
          <div className="lg:col-span-2">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-slate-950/80 backdrop-blur-xl border border-gray-800/80 rounded-2xl p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden"
            >
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 bg-gray-950/60 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-md"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 bg-gray-950/60 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-md"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3.5 bg-gray-950/60 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-md"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3.5 bg-gray-950/60 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-md resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`group px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg flex items-center gap-2.5 cursor-pointer
                  ${
                    loading
                      ? "bg-blue-600/60 cursor-not-allowed text-gray-300"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02]"
                  }`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">
                      <FiSend />
                    </span>
                    Send Message
                  </>
                )}
              </button>

              {status && <p className="mt-2 text-center text-sm font-medium text-emerald-400">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
