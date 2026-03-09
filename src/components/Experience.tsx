import { motion } from "framer-motion";

const experiences = [
  {
    company: "IDE CONSULTORA",
    role: "Diseño y creación de temas en WordPress",
    period: "2018 — 2019",
    description:
      "Formé parte del equipo de desarrollo web, enfocándome en la creación y personalización de temas para WordPress. Participé en la implementación de sitios web a medida, optimizando la experiencia del usuario.",
  },
  {
    company: "AVALON STUDIO",
    role: "Programador web — WordPress",
    period: "2020 — 2023",
    description:
      "Desarrollo de páginas y landings personalizadas utilizando HTML, CSS y JavaScript, con diseño responsive y carga rápida. Colaboración en proyectos WordPress con funcionalidades a medida.",
  },
  {
    company: "TEIX WEB",
    role: "Diseñador — Desarrollador — SEO",
    period: "2023 — 2025",
    description:
      "Creación de tiendas online y páginas personalizadas con WordPress. Optimización SEO on-page, mejorando estructura, velocidad de carga y posicionamiento en buscadores.",
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight gradient-text mb-16"
      >
        Experiencia
      </motion.h2>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 py-8 border-b border-border first:border-t"
          >
            <div>
              <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-0.5 text-foreground">{exp.company}</h3>
              <h4 className="text-sm text-muted-foreground mb-3">{exp.role}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
