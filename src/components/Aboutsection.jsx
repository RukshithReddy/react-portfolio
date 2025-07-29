import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); 

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"] 
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-card-bg">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              <motion.div 
                style={{ x }}
                animate={{ y: [0, 8, 0] }} // <-- Floating animation added
                transition={{
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }
                }}
              >
                <div className="relative w-80 h-80 mx-auto">
                  <img 
                    src="/passportsize photo Rukshith.jpg" 
                    alt="Seru Rukshith Reddy" 
                    className="w-full h-full object-cover rounded-2xl" // <-- Border removed
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
                </div>
              </motion.div>

              <div className={`transition-all duration-1000 ease-out delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <div className="space-y-6">
                  <p className="text-lg text-text-muted leading-relaxed">
                    I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with a B.Tech in Information Technology. 
                    I specialize in creating scalable web applications using modern technologies like Java, Spring Boot, and ReactJS.
                  </p>
                  <p className="text-lg text-text-muted leading-relaxed">
                    My journey in software development is driven by a deep passion for building applications that not only solve real-world problems 
                    but also provide exceptional user experiences. I believe in writing clean, maintainable code and following industry best practices.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center p-4 bg-secondary rounded-xl">
                      <div className="text-2xl font-bold text-primary">10+</div>
                      <div className="text-sm text-text-muted">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-xl">
                      <div className="text-2xl font-bold text-primary">2+</div>
                      <div className="text-sm text-text-muted">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;