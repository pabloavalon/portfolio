import { motion } from "framer-motion";
import profileImg from "@/assets/profile-pablo.jpg";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center text-center relative z-10">
        
        <div className="flex items-center gap-3 mb-10">
          <img alt="Pablo Pereira" className="w-10 h-10 rounded-full ring-2 ring-border object-cover" src="/lovable-uploads/95c878fe-191b-47f5-9c5c-3cc3737e3156.png" />
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-white text-lg">Disponible para trabajar</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 max-w-4xl">
          <span className="text-foreground">WordPress Engineer </span>
          <span className="hero-gradient-text">especializado en soluciones </span>
          <span className="text-foreground">a </span>
          <span className="hero-gradient-text">medida</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed">
          Trabajo creando soluciones personalizadas en WordPress para clientes que necesitan velocidad, estabilidad y escalabilidad.
Desde themes y funcionalidades custom hasta integración con CRMs, procesamiento de datos y optimización avanzada.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a href="mailto:tu@email.com"
          className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-full text-sm hover:bg-foreground/90 transition-colors">
            
            Contáctame
            <span className="text-xs">→</span>
          </a>
          <a

            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-full text-sm transition-colors bg-primary-foreground" href="https://www.linkedin.com/in/pablo-pereira-061709225/">
            
            LinkedIn
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-full text-sm transition-colors bg-primary-foreground">
            
            CV
          </a>
        </div>
      </motion.div>

      {/* Vercel-style color glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,_hsl(210_100%_50%/0.45)_0%,_transparent_55%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,_hsl(0_100%_50%/0.4)_0%,_transparent_50%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,_hsl(160_100%_45%/0.3)_0%,_transparent_50%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_60%,_hsl(40_100%_55%/0.25)_0%,_transparent_45%)] blur-3xl" />
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center gap-16 mt-24 pt-10 border-t border-border relative z-10">
        
        <div className="text-center">
          <span className="stat-number">+6</span>
          <p className="text-muted-foreground mt-2 font-mono text-base">Años de experiencia</p>
        </div>
        <div className="text-center">
          <span className="stat-number">75+</span>
          <p className="text-muted-foreground mt-2 font-mono text-base">Proyectos entregados</p>
        </div>
        <div className="text-center">
          <span className="stat-number">18</span>
          <p className="text-muted-foreground mt-2 font-mono text-base">Herramientas</p>
        </div>
      </motion.div>
    </section>);

};

export default Hero;