import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent mb-6 tracking-tight">
            <span className="block animate-fade-in">Seru Rukshith</span>
            <span className="block animate-fade-in" style={{ animationDelay: '0.2s' }}>Reddy</span>
          </h1>
          <div className={`transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-medium mb-8 animate-fade-in-up">
              Full Stack Developer | Java | ReactJS | Spring Boot
            </h2>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              I create scalable web applications that connect with users and drive business growth
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={scrollToAbout}
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full px-8 py-6 text-lg font-medium group"
              >
                Explore My Work
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;