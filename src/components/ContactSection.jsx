import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if(currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const contactLinks = [
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "gurunathreddy2507@gmail.com", href: "mailto:gurunathreddy2507@gmail.com", color: "hover:text-blue-400" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/rukshith-reddy-8a7a05250/", color: "hover:text-blue-600" },
    { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "View my repositories", href: "https://github.com/rukshithreddy", color: "hover:text-gray-400" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/15 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-text-muted mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactLinks.map((contact, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Changed hover:shadow-card to hover:shadow-glow-primary here
                    className="group block p-8 bg-card-bg rounded-2xl hover:shadow-glow-primary transition-all duration-500 border border-border/20 hover:border-primary/30"
                  >
                    <div className={`flex flex-col items-center text-center transition-colors duration-300 ${contact.color}`}>
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {contact.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {contact.label}
                      </h3>
                      <p className="text-text-muted group-hover:text-foreground transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className={`text-center transition-all duration-1000 ease-out delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="bg-card-bg rounded-2xl p-8 border border-border/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to start a project?
                </h3>
                <p className="text-text-muted mb-6 max-w-md mx-auto">
                  Let's discuss how we can bring your ideas to life with cutting-edge technology
                </p>
                <Button 
                  size="lg"
                  className="border-2 border-primary bg-black text-primary hover:bg-transparent hover:text-primary hover:shadow-glow-primary transition-all duration-300 rounded-full px-8 py-6 text-lg font-medium group"
                  onClick={() => window.open('mailto:gurunathreddy2507@gmail.com', '_blank')}
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;