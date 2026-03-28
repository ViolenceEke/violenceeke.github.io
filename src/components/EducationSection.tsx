import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <p className="section-heading">// образование</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-glass p-6 md:p-8 flex items-start gap-4"
      >
        <div className="p-3 rounded-lg bg-secondary shrink-0">
          <GraduationCap size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold">ВВГУ</h3>
          <p className="text-primary font-mono text-sm">Информационные системы и технологии</p>
          <p className="text-sm text-muted-foreground mt-1">Высшее образование · 2023</p>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
