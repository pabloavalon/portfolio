import { motion } from "framer-motion";
import berecruiting from "@/assets/project-be-recruiting.png";
import hueveria from "@/assets/project-hueveria.png";
import tucuman from "@/assets/tucuman.png";
import cuotiflex from "@/assets/project-cuotiflex.png";
import terravera from "@/assets/project-terravera.png";
import udl from "@/assets/project-udl.png";
import suavida from "@/assets/project-suavida.png";
import fiol from "@/assets/project-fiol.png";
import interclima from "@/assets/project-interclima.png";
import bauza from "@/assets/project-bauza.png";
import mallorca from "@/assets/project-mallorca.png";
import ibexperience from "@/assets/project-ibexperience.png";
import limpiezas from "@/assets/project-limpiezas.png";
import escuelanautica from "@/assets/project-escuelanautica.png";
import avalon from "@/assets/project-avalon.png";
import bioben from "@/assets/project-bioben.png";
import corven from "@/assets/project-corven.png";
import vitalcer from "@/assets/project-vitalcer.png";


const projects = [
  { img: berecruiting, title: "Be Recruiting", desc: "Landing de reclutamiento y selección de personal.", tags: ["WordPress", "CSS"], url: "https://berecruiting.com/" },
  { img: hueveria, title: "Huevería Mayorista", desc: "CRM para controlar el stock, ventas y envíos de insumos avícolas.", tags: ["React js", "Supabase"], url: "https://jya-hermanitos.vercel.app/" },
  { img: tucuman, title: "Tucumán solidario", desc: "Landing con CRM integrado para organizar la información de las donaciones.", tags: ["React js", "Taildwind", "Supabase"], url: "https://tucuman-solidario.vercel.app/" },
  { img: cuotiflex, title: "Cuotiflex", desc: "Landing page para compras en cuotas, transmitiendo confianza y simplicidad.", tags: ["WordPress", "Divi", "CSS"], url: "https://cuotiflex.com/" },
  { img: terravera, title: "Terravera Ecommerce", desc: "Ecommerce de carnes de alta calidad con tienda online funcional y atractiva.", tags: ["WordPress", "Divi", "WooCommerce", "CSS"], url: "https://terravera-seleccion.com/" },
  { img: udl, title: "Centro Logístico", desc: "Landing page para empresa de logística con entregas a domicilio.", tags: ["WordPress", "Divi"], url: "https://udl-logistics.com/" },
  { img: suavida, title: "Clínica Estética", desc: "Sitio web para centro de medicina estética con imagen profesional y moderna.", tags: ["WordPress", "Divi", "CSS"], url: "https://suavida.es/" },
  { img: fiol, title: "Gestoría Administrativa", desc: "Sitio para gestoría con trámites administrativos, asesoría legal y seguros.", tags: ["WordPress", "Divi", "CSS"], url: "https://aefiol.com/" },
  { img: interclima, title: "Interclima", desc: "Web de climatización con catálogos de productos y solicitud rápida.", tags: ["WordPress", "Divi", "WooCommerce", "CSS"], url: "https://interclima.es/" },
  { img: bauza, title: "Inmobiliaria Patricia Bauzá", desc: "Sitio inmobiliario con integración CRM y filtros avanzados de búsqueda.", tags: ["WordPress", "Divi", "PHP", "CSS"], url: "https://bauzainmobiliaria.com/" },
  { img: mallorca, title: "Viviendas Mallorca", desc: "Plataforma de alquiler vacacional con fichas de propiedad detalladas.", tags: ["WordPress", "Divi", "CSS", "WooCommerce"], url: "https://mallorcaprivilege.com/" },
  { img: ibexperience, title: "Navegación y Deportes Acuáticos", desc: "Web para actividades de navegación y deportes acuáticos.", tags: ["WordPress", "Divi", "CSS"], url: "https://ibexperience.es/" },
  { img: limpiezas, title: "Limpiezas Sayago", desc: "Web para empresa de servicios de limpieza con SEO local optimizado.", tags: ["WordPress", "Divi", "CSS"], url: "https://limpiezas-sayago.com/" },
  { img: escuelanautica, title: "Escuela Náutica", desc: "Plataforma para formación náutica y alquiler de embarcaciones.", tags: ["WordPress", "Divi", "CSS"], url: "https://escuelanauticaibyachting.com/" },
  { img: avalon, title: "Agencia Avalon", desc: "Sitio de agencia de marketing digital, rápido y completamente personalizado.", tags: ["HTML", "CSS", "JS", "PHP"], url: "https://avalonworld.agency/" },
  { img: bioben, title: "BIOBEN", desc: "Catálogo de productos con integración de chat WhatsApp para ventas.", tags: ["WordPress", "Elementor", "CSS"], url: "https://bioben.com.ar/" },
  { img: corven, title: "Corven Motos", desc: "Sitio oficial con presentación dinámica y selección de colores en tiempo real.", tags: ["WordPress", "Divi", "JS", "CSS"], url: "https://corvenmotos.com.ar/" },
  { img: vitalcer, title: "Vitalcer", desc: "Landing funcional con productos, sucursales y formularios de contacto.", tags: ["HTML", "CSS", "Elementor"], url: "https://vitalcer.com/" },
  
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight gradient-text mb-4"
      >
        Proyectos destacados
      </motion.h2>
      <p className="text-muted-foreground text-sm mb-14">Una selección de trabajos recientes.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 2) * 0.08, duration: 0.5 }}
            className="group block rounded-lg border border-border bg-card overflow-hidden hover:border-foreground/20 transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={`Proyecto ${p.title}`}
                className="w-full h-52 md:h-56 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm text-foreground">
                  {p.title}
                </h3>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-xs">↗</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
