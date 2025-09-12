import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#team", label: "Team" },
        { href: "#events", label: "Events" },
      ],
    },
    {
      title: "Community",
      links: [
        { href: "#outreach", label: "Outreach" },
        { href: "#agency", label: "Agency" },
        { href: "#", label: "Blog" },
        { href: "#", label: "Resources" },
      ],
    },
    {
      title: "Connect",
      links: [
        { href: "#", label: "Discord" },
        { href: "#", label: "WhatsApp" },
        { href: "#", label: "Telegram" },
        { href: "#", label: "Slack" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">NB</span>
              </div>
              <span className="text-xl font-space font-bold">Next Bench</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building the future, one student at a time. Join our community of innovators and changemakers.
            </p>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-space font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-8"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © 2024 Next Bench. Made with 
            <Heart className="w-4 h-4 text-accent animate-pulse" fill="currentColor" />
            by Next Bench
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;