import { motion } from "framer-motion";

interface Job {
  period: string;
  duration: string;
  company: string;
  location: string;
  url?: string;
  role: string;
  projects: {
    title: string;
    description: string;
    achievements: string[];
    stack: string[];
  }[];
}

const jobs: Job[] = [
  {
    period: "Август 2025 — настоящее время",
    duration: "8 мес",
    company: "Venyoo",
    location: "Сочи",
    url: "https://venyoo.ru",
    role: "Node.js разработчик",
    projects: [
      {
        title: "Система скрапинга и генерации коммерческих предложений",
        description:
          "Разработка backend-системы для автоматизированного сбора данных с сайтов клиентов и генерации персонализированных коммерческих предложений с интеграцией в AI-чат-бота.",
        achievements: [
          "Реализовал скрапер, обрабатывающий 300+ сайтов в сутки с извлечением и нормализацией данных",
          "Собрал устойчивый pipeline сбора: обход страниц, парсинг ключевых блоков, нормализация и передача данных в backend",
          "Сократил время подготовки коммерческого предложения с нескольких часов до 1–2 минут за счет автоматизации",
          "Интегрировал AI-чат-бота, что увеличило скорость ответа клиентам примерно на 70%",
          "Построил систему очередей (Redis + BullMQ), обеспечив стабильную обработку 1000+ задач в день без потерь",
          "Оптимизировал API и асинхронные процессы, снизив среднее время ответа системы на 30–40%",
          "Поддержал масштабирование сервиса при росте числа клиентов и источников данных без деградации качества",
        ],
        stack: ["Node.js", "TypeScript", "Express.js", "Axios", "MongoDB", "Prisma ORM", "PostgreSQL", "Redis", "BullMQ", "Telegraf.js"],
      },
      {
        title: "Контент-платформа для Telegram (AI-автопостинг)",
        description:
          "Разработка системы автоматического создания и публикации контента в Telegram-каналах с использованием AI-агентов, включая модерацию и взаимодействие с пользователями.",
        achievements: [
          "Разработал систему автопостинга, генерирующую и публикующую десятки постов в сутки",
          "Поддержал работу 5+ Telegram-каналов одновременно с разными сценариями публикаций",
          "Реализовал модерацию контента, снизив количество нежелательных публикаций примерно на 60%",
          "Построил систему обработки задач через очереди, обеспечив обработку 2000+ событий в день",
          "Настроил взаимодействие с пользователями (ответы, генерация контента, обработка реакций), увеличив вовлеченность примерно на 40%",
          "Интегрировал LangSmith для мониторинга и улучшения качества AI-ответов",
          "Выстроил стабильный процесс деплоя и сопровождения AI-функций для непрерывной работы каналов",
        ],
        stack: ["Node.js", "TypeScript", "Nest.js", "Axios", "MongoDB", "Prisma ORM", "PostgreSQL", "Redis", "BullMQ", "Telegraf.js", "LangSmith"],
      },
    ],
  },
  {
    period: "Октябрь 2022 — настоящее время",
    duration: "3 года 6 мес",
    company: "ООО РСТ-ТУР",
    location: "Владивосток",
    url: "https://rsttur.ru",
    role: "Frontend-разработчик",
    projects: [
      {
        title: "CRM-система и клиентские веб-приложения",
        description:
          "Поддержка и развитие крупной внутренней CRM-системы и клиентских веб-приложений в сфере туристических услуг.",
        achievements: [
          "Поддерживал и развивал крупную кодовую базу (CRM + клиентские приложения), обеспечивая стабильность для 1000+ пользователей",
          "Разработал модуль динамической генерации форм, сократив внедрение новых форм с нескольких дней до пары часов",
          "Полностью переработал профиль пользователя с архитектурным разделением: бизнес-логика на Effector, UI на React + Styled-components",
          "Добавил аналитику и статистику по объектам и номерам, упростив развитие и поддержку функционала",
          "Повысил вовлеченность пользователей примерно на 30% за счет улучшения UX и структуры пользовательских сценариев",
        ],
        stack: ["React.js", "TypeScript", "Effector", "Styled-components", "Node.js", "Nest.js"],
      },
      {
        title: "Конструктор сайтов и оптимизация производительности",
        description:
          "Развитие конструктора сайтов для туристических сервисов и улучшение SEO/web performance клиентских проектов.",
        achievements: [
          "Создал конструктор сайтов для туристических сервисов, на базе которого запущено несколько production-проектов",
          "Оптимизировал фронтенд под SEO и web performance: мета-теги, структурированные данные, lazy-loading, уменьшение размера бандла",
          "Улучшил ключевые метрики: LCP на 40%, CLS до <0.1, FID до <100ms",
          "Реализовал snapshot-тестирование конструктора, повысив стабильность UI и ускорив регрессионные проверки",
        ],
        stack: ["React.js", "TypeScript", "Styled-components", "Playwright", "Jenkins"],
      },
      {
        title: "Качество релизов и CI/CD",
        description:
          "Повышение качества поставки функционала через автоматизированные тесты и интеграцию проверок в релизный процесс.",
        achievements: [
          "Полностью покрыл пользовательский флоу оформления заказа end-to-end тестами (Playwright)",
          "Снизил количество критических багов на проде примерно на 50%",
          "Интегрировал тесты в CI (Jenkins), сократив время проверки релизов и повысив надежность деплоев",
          "Ускорил обратную связь для команды за счет более раннего обнаружения регрессий",
        ],
        stack: ["Playwright", "Jenkins", "TypeScript", "React.js"],
      },
    ],
  },
  {
    period: "Апрель 2022 — Октябрь 2022",
    duration: "7 мес",
    company: "Darall",
    location: "Владивосток",
    url: "https://darall.ru",
    role: "Fullstack-разработчик",
    projects: [
      {
        title: "Платформа DarRush",
        description:
          "Разработка fullstack-приложения для платформы, позволяющей заказывать товары и дополнительные услуги через курьеров во время доставки еды из ресторанов.",
        achievements: [
          "Разработал полноценный интерфейс для курьера и пользователя, обеспечив удобный UX для 150+ ежедневных заказов",
          "Реализовал систему отложенной оплаты, уменьшив отказы от заказов примерно на 20% и повысив конверсию в оплату",
          "Создал архитектуру фронтенда на Vue.js + Vuex, обеспечив масштабируемость для дальнейшего добавления сервисов",
          "Настроил интеграцию с Prisma ORM и PostgreSQL, что позволило обрабатывать 100+ транзакций в день без потери производительности",
          "Оптимизировал взаимодействие клиент-сервер через Axios, ускорив время отклика приложения примерно на 30%",
        ],
        stack: ["Vue.js", "JavaScript", "Vuex", "Sass", "Bootstrap v4.0.0", "Axios", "Node.js", "Prisma ORM", "PostgreSQL"],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <p className="section-heading">// опыт работы</p>

      <div className="space-y-12">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="card-glass p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-primary font-mono text-sm">
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {job.company}
                      </a>
                    ) : job.company}
                    {" · "}
                    {job.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="tag">{job.duration}</span>
                  <p className="text-xs text-muted-foreground mt-1">{job.period}</p>
                </div>
              </div>

              {job.projects.map((project, j) => (
                <div key={j} className={j > 0 ? "mt-8 pt-8 border-t border-border" : ""}>
                  <h4 className="font-semibold text-base mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {project.achievements.map((a, k) => (
                      <li key={k} className="text-sm text-secondary-foreground flex gap-2">
                        <span className="text-primary mt-0.5 shrink-0">•</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tag text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
