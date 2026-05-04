import { MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/917251804837",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:nikhilrajput5436@gmail.com",
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-3 mb-4 animate-slide-in-up">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <a
                key={index}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg glass-effect border border-foreground/20 ${option.color} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-current/50 group`}
                title={option.label}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{option.label}</span>
              </a>
            );
          })}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 animate-glow"
        title="Contact Me"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
