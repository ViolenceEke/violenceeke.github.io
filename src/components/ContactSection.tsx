import { motion } from "framer-motion";
import { Mail, Phone, Send, Globe } from "lucide-react";

const contacts = [
  { icon: Phone, label: "+7 (963) 941-01-54", href: "tel:+79639410154" },
  { icon: Send, label: "Telegram: @vioekejob", href: "https://t.me/vioekejob" },
  {
    icon: Mail,
    label: "vioekejob@gmail.com",
    href: "mailto:vioekejob@gmail.com",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ilya-tarasenko-065041245/",
  },
];

const ContactSection = () => {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <p className="section-heading">// контакты</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-glass p-6 md:p-8"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <Icon size={18} className="text-primary shrink-0" />
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {label}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            Открыт к frontend / fullstack позициям, удалённо
          </p>
          <a
            href="https://t.me/vioekejob"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
          >
            <Send size={16} />
            Связаться со мной
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
