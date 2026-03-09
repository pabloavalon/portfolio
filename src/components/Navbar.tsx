import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight">
          pablo<span className="text-muted-foreground">pereira</span>
        </span>
        <div className="flex items-center gap-6">
          <a href="#experiencia" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Experiencia
          </a>
          <a href="#proyectos" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Proyectos
          </a>
          <a href="#herramientas" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Herramientas
          </a>
          <a
            href="mailto:tu@email.com"
            className="inline-flex items-center gap-1.5 bg-foreground text-background text-[13px] font-medium px-4 py-2 rounded-md hover:bg-foreground/90 transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
