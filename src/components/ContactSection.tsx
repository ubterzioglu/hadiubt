import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Terminal, Mail, User, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputClasses = (fieldName: string) => `
    w-full bg-transparent border-none outline-none
    text-foreground placeholder:text-muted-foreground
    font-mono text-sm
    ${focusedField === fieldName ? "text-primary" : ""}
  `;

  const lineNumbers = [1, 2, 3, 4, 5];

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient-cyan">Contact</span>
          </h2>
          <p className="text-muted-foreground">
            Let's connect. Send me a message.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Terminal Window */}
          <div className="rounded-xl border border-border/50 overflow-hidden shadow-card">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card/50 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 ml-4 text-muted-foreground">
                <Terminal className="w-4 h-4" />
                <span className="font-mono text-xs">contact.tsx</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                  <p className="text-primary font-semibold mb-2">Message Sent Successfully!</p>
                  <p className="text-muted-foreground text-xs">
                    I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative">
                  {/* Line Numbers */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-card/30 flex flex-col items-center pt-2 text-muted-foreground/50 text-xs">
                    {lineNumbers.map((num) => (
                      <span key={num} className="leading-6">
                        {num}
                      </span>
                    ))}
                  </div>

                  {/* Code Content */}
                  <div className="pl-12 space-y-4">
                    {/* Name Input */}
                    <div className="flex items-center">
                      <span className="text-secondary">const</span>
                      <span className="text-primary mx-2">name</span>
                      <span className="text-muted-foreground">=</span>
                      <div className="flex-1 ml-2 relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          placeholder='"Your Name"'
                          required
                          className={inputClasses("name")}
                        />
                        {focusedField === "name" && (
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-primary animate-pulse" />
                        )}
                      </div>
                      <span className="text-muted-foreground">;</span>
                    </div>

                    {/* Email Input */}
                    <div className="flex items-center">
                      <span className="text-secondary">const</span>
                      <span className="text-primary mx-2">email</span>
                      <span className="text-muted-foreground">=</span>
                      <div className="flex-1 ml-2 relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          placeholder='"your@email.com"'
                          required
                          className={inputClasses("email")}
                        />
                        {focusedField === "email" && (
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-primary animate-pulse" />
                        )}
                      </div>
                      <span className="text-muted-foreground">;</span>
                    </div>

                    {/* Message Input */}
                    <div className="flex items-start">
                      <span className="text-secondary">const</span>
                      <span className="text-primary mx-2">message</span>
                      <span className="text-muted-foreground">=</span>
                      <div className="flex-1 ml-2 relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          placeholder='"Your message here..."'
                          required
                          rows={4}
                          className={`${inputClasses("message")} resize-none`}
                        />
                        {focusedField === "message" && (
                          <span className="absolute right-0 top-1 w-2 h-4 bg-primary animate-pulse" />
                        )}
                      </div>
                      <span className="text-muted-foreground">;</span>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center pt-4">
                      <span className="text-muted-foreground mr-4">// Submit the form</span>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-lg shadow-glow-cyan hover:shadow-glow-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <span>send()</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            <a
              href="mailto:ubterzioglu@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono text-sm">ubterzioglu@gmail.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
