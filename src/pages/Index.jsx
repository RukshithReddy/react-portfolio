import Navigation from '@/components/Navigation.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import ProjectsSection from '@/components/ProjectsSection.jsx';
import ExperienceSection from '@/components/ExperienceSection.jsx';
import ContactSection from '@/components/ContactSection.jsx';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-card-bg border-t border-border/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-muted">
            © 2025 Seru Rukshith Reddy. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;