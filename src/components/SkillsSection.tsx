import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript", "NextJS", "Vue.js", "Tailwind CSS", "HTML", "CSS", "Styled-components"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "NestJS", "ExpressJS", "GraphQL", "REST API", "WebSocket", "Swagger"],
  },
  {
    label: "Базы данных",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "PrismaORM"],
  },
  {
    label: "AI & Автоматизация",
    skills: ["AI Agents", "LangGraph", "LangSmith", "n8n"],
  },
  {
    label: "Инструменты",
    skills: ["Postman", "TanStack Query", "Effector", "Playwright", "Jenkins", "BullMQ"],
  },
];

const SkillsSection = () => {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <p className="section-heading">// навыки</p>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card-glass p-6"
          >
            <h3 className="font-mono text-sm font-semibold text-primary mb-4">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="card-glass p-6 mt-6"
      >
        <h3 className="font-mono text-sm font-semibold text-primary mb-3">Языки</h3>
        <div className="flex gap-6 text-sm">
          <span>🇷🇺 Русский — <span className="text-foreground font-medium">Родной</span></span>
          <span>🇬🇧 Английский — <span className="text-foreground font-medium">B2</span></span>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
