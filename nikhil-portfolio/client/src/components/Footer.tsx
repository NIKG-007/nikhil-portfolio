import { Linkedin, Mail, Heart, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nikhil-gahlaut-bb0360191",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "https://wa.me/917251804837",
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:nikhilrajput5436@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-foreground/10 bg-background/50 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">NG</span>
                </div>
                <span className="text-xl font-bold gradient-text">Nikhil</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Senior Frontend Developer crafting beautiful, high-performance web experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-foreground/60 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg glass-effect border border-foreground/20 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/10"
                    >
                      <Icon className="w-5 h-5 text-foreground/60 hover:text-blue-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-foreground/10 my-8"></div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>
              © {currentYear} Nikhil Gahlaut. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Nikhil
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
