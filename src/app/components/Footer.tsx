import { motion } from "motion/react";
import { Music2, Mail, Facebook, Youtube, Phone, Linkedin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/nguyen.baquoc.58", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/@nguyenbaquoc-nhacsyquanchu5502?si=EHzKFYoOl5KWIg3i", label: "YouTube" },
  ];

  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Music2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white leading-tight">Nguyễn Bá Quốc</span>
            </div>
            <p className="text-xl text-gray-400 text-sm leading-relaxed">
              Nhà soạn nhạc & Nhà sản xuất âm nhạc tự do
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Liên hệ</h3>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
              <Phone className="w-4 h-4" />
              0983055075
            </a>
            <a
              href="mailto:nguyenbaquoc72@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              nguyenbaquoc72@gmail.com
            </a>
            
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">Theo dõi tôi</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-purple-950/40 border border-purple-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/20 text-center text-gray-500 text-base">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} Nguyễn Bá Quốc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}