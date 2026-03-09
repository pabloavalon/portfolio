import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider max-w-5xl mx-auto" />
        <Experience />
        <div className="section-divider max-w-5xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-5xl mx-auto" />
        <Tools />
        <footer className="py-16 text-center border-t border-border">
          <p className="text-xs text-muted-foreground font-mono">© 2025 — Pablo Pereira</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
