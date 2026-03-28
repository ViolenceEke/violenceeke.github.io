import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-heading mb-4">// portfolio</p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Илья <span className="text-gradient">Тарасенко</span>
          </h1>

          <p className="font-mono text-lg md:text-xl text-muted-foreground mb-8">
            Fullstack-разработчик <span className="text-primary">&middot;</span>{" "}
            React + Node.js + TypeScript
          </p>

          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed mb-10">
            4 года в коммерческой разработке. Пишу код так, чтобы его понял и
            джун, и ты сам через полгода. Помимо кода преподаю информатику —
            умею раскладывать сложные концепции на понятные части.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="mailto:vioekejob@gmail.com"
              className="tag gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={14} /> vioekejob@gmail.com
            </a>
            <a
              href="https://t.me/vioekejob"
              target="_blank"
              rel="noopener noreferrer"
              className="tag gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Send size={14} /> @vioekejob
            </a>
            <span className="tag gap-2">
              <MapPin size={14} /> Владивосток · удалённо
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://t.me/vioekejob"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              <Send size={16} />
              Написать в Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
