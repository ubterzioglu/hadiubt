import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const contacts = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/491739569429" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ubterzioglu/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/ubterzioglu/" },
  { icon: MapPin, label: "Dortmund", href: "https://maps.google.com/?q=Dortmund,Germany" },
  { icon: Phone, label: "Phone", href: "tel:+491739569429" },
  { icon: Mail, label: "Email", href: "mailto:ubterzioglu@gmail.com" },
];

const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-10"
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-glow transition-all duration-300"
            >
              <c.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{c.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
