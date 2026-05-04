import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nikhilrajput5436@gmail.com",
      href: "mailto:nikhilrajput5436@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+91 7251804837",
      href: "https://wa.me/917251804837",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India (Open to Remote / Relocate)",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <p className="text-foreground/70 mt-4 text-lg">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="animate-slide-in-up">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-lg glass-effect border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:bg-blue-500/5 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">{info.label}</p>
                        <p className="text-foreground/90 font-medium group-hover:text-blue-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-foreground/10">
                <h4 className="font-semibold mb-6">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/nikhil-gahlaut-bb0360191"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg glass-effect border border-blue-500/30 hover:border-blue-500/60 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/10 group"
                  >
                    <span className="text-blue-400 font-bold group-hover:scale-110 transition-transform">in</span>
                  </a>
                  <a
                    href="https://wa.me/917251804837"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg glass-effect border border-green-500/30 hover:border-green-500/60 flex items-center justify-center transition-all duration-300 hover:bg-green-500/10 group"
                  >
                    <span className="text-green-400 font-bold group-hover:scale-110 transition-transform">WA</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="animate-slide-in-down">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-blue-500/20 focus:border-blue-500/50 focus:outline-none transition-all duration-300 bg-foreground/5 text-foreground placeholder-foreground/40"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-blue-500/20 focus:border-blue-500/50 focus:outline-none transition-all duration-300 bg-foreground/5 text-foreground placeholder-foreground/40"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-blue-500/20 focus:border-blue-500/50 focus:outline-none transition-all duration-300 bg-foreground/5 text-foreground placeholder-foreground/40"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-blue-500/20 focus:border-blue-500/50 focus:outline-none transition-all duration-300 bg-foreground/5 text-foreground placeholder-foreground/40 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
