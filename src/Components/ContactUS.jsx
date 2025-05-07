import React, { useState } from "react";
import emailjs from "emailjs-com";
import SocialLinks from "./SocialLinks";
import { toast } from "react-toastify"; // Only import toast

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init("yVDovN6BqCJqpJYj3");
      await emailjs.send("service_t0s7m5f", "template_zrhrioo", formData);
      toast.success("Message sent successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("FAILED...", err);
      toast.error("Failed to send message. Please try again later. ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-3 md:mx-5 lg:mx-auto px-1 sm:px-6 lg:px-8 py-8   rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Side - Contact Information */}
        <div className="space-y-8 text-[var(--text-color)]/90 relative px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl font-bold py-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            Let&apos;s Create Magic ✨
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-color)]/80">
            Ready to bring your ideas to life? Drop me a message and let&apos;s
            craft something extraordinary together.
          </p>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"></div>

          <SocialLinks />
        </div>

        {/* Right Side - Contact Form */}
        <div className="text-[var(--text-color)] rounded-xl px-4 sm:px-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* First Name */}
              <div className="relative">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4  py-3 bg-white/5 backdrop-blur-sm rounded-xl border  focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all  placeholder:text-[var(--text-color)] text-sm sm:text-base"
                  placeholder="First Name"
                />
                <span className="absolute right-2 top-3.5 text-[var(--text-color)] focus-within:text-blue-300 text-sm">
                  👤
                </span>
              </div>

              {/* Last Name */}
              <div className="relative">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border  focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20  transition-all placeholder:text-[var(--text-color)]  text-sm sm:text-base"
                  placeholder="Last Name"
                />
                <span className="absolute right-2 top-3.5 text-[var(--text-color)] focus-within:text-blue-300 text-sm">
                  📝
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 pr-10 py-3 bg-white/5 backdrop-blur-sm rounded-xl border  focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 placeholder:text-[var(--text-color)]  transition-all text-sm sm:text-base"
                placeholder="Email Address"
              />
              <span className="absolute right-3 top-3.5 text-[var(--text-color)] focus-within:text-blue-300 text-sm">
                ✉️
              </span>
            </div>

            {/* Subject */}
            <div className="relative">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 pr-10 py-3 bg-white/5 backdrop-blur-sm rounded-xl border  focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 placeholder:text-[var(--text-color)]  transition-all text-sm sm:text-base"
                placeholder="Subject"
              />
              <span className="absolute right-3 top-3.5 text-[var(--text-color)] focus-within:text-blue-300 text-sm">
                🔖
              </span>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 pr-10 py-3 bg-white/5 backdrop-blur-sm rounded-xl border  focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 placeholder:text-[var(--text-color)]  transition-all resize-none text-sm sm:text-base"
                placeholder="Your Message"
              ></textarea>
              <span className="absolute right-3 top-3.5 text-[var(--text-color)] focus-within:text-blue-300 text-sm">
                ✏️
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 rounded-xl font-semibold text-[var(--text-color)] tracking-wide transform transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-[var(--text-color)]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>🚀 Send Message</span>
                    <span className="absolute -right-4 opacity-0 group-hover:right-2 group-hover:opacity-100 transition-all duration-300">
                      ✨
                    </span>
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
