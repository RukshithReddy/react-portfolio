
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: "internship",
      title: "Software Development Intern",
      company: "RG2 IT Solutions",
      duration: "6 months",
      description: "Worked on full-stack web applications using Java Spring Boot and ReactJS. Collaborated with senior developers to implement new features and optimize existing codebase.",
      skills: ["Java", "Spring Boot", "ReactJS", "MySQL", "Git"]
    },
    {
      type: "certification",
      title: "Full Stack Development Certification",
      company: "JSpiders Training Institute",
      duration: "8 months",
      description: "Comprehensive training program covering core Java, advanced Java frameworks, web technologies, and database management systems.",
      skills: ["Core Java", "Advanced Java", "Spring Framework", "Hibernate", "JavaScript", "SQL"]
    }
  ];

  // 1. Create a ref for the main container
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // 2. Create scale animations for each card
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const card2Scale = useTransform(scrollYProgress, [0, 1], [1, 1]);


  return (
    <section id="experience" className="py-24 bg-card-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-text-muted mt-6 max-w-2xl mx-auto">
            My professional journey and continuous learning in software development
          </p>
        </div>
        
        {/* 3. Main container for the animation */}
        <div ref={targetRef} className="max-w-4xl mx-auto h-[200vh] relative">
          
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-primary opacity-50" />

          {experiences.map((exp, index) => {
            // Assign different transforms based on card index
            const style = index === 0 ? { scale: cardScale } : { scale: card2Scale };
            const zIndex = index === 0 ? 'z-10' : 'z-20'; // First card is behind
            const topPosition = index * 80; // Space out the cards vertically

            return (
              <div key={index} className="sticky top-24">
                <motion.div style={style} className={`relative flex items-start mb-12 ${zIndex}`}>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      {exp.type === "internship" ? (
                        <Briefcase className="w-8 h-8 text-white" />
                      ) : (
                        <Award className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-secondary rounded-2xl p-8 hover:shadow-card transition-all duration-500 border border-border/20 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-primary font-medium">{exp.duration}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <h4 className="text-lg text-primary font-semibold mb-4">{exp.company}</h4>
                      <p className="text-text-muted leading-relaxed mb-6">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-background rounded-full text-sm text-foreground font-medium border border-border/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;