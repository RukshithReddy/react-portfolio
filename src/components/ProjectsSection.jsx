import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // 1. Add 'codeLink' and 'demoLink' to each project
  const projects = [
    {
      title: "Hospital Management System",
      img: "/Hsptl_Mngmnt_systm.png",
      description: "A comprehensive healthcare management platform built with Spring Boot, featuring patient records, appointment scheduling, and medical history tracking.",
      tech: ["Spring Boot", "MySQL", "REST API", "JWT Authentication"],
      codeLink: "#", // <-- Replace with your link
      demoLink: "#" // <-- Replace with your link or keep '#' if none
    },
    {
      title: "Netflix Clone",
      img: "/Netflix_logo.jpg",
      description: "A fully responsive streaming platform replica with ReactJS, featuring movie Browse, user authentication, and video streaming capabilities.",
      tech: ["ReactJS", "Firebase", "TMDB API", "Responsive Design"],
      codeLink: "https://flixverse-rukshith.netlify.app", // <-- Replace with your link
      demoLink: "https://flixverse-rukshith.netlify.app" // <-- Replace with your link or keep '#' if none
    },
    {
      title: "Game Universe",
      img: "/Game Universe image.png",
      description: "An interactive gaming platform showcasing various games with ReactJS, featuring game statistics, leaderboards, and user profiles.",
      tech: ["ReactJS", "TypeScript", "Game APIs", "Chart.js"],
      codeLink: "#", // <-- Replace with your link
      demoLink: "#" // <-- Replace with your link or keep '#' if none
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-text-muted mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
            const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, -200]);
            const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, 200]);
            const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

            let style = { scale, opacity };
            if (index === 0) {
              style.x = xLeft;
            } else if (index === 2) {
              style.x = xRight;
            }

            return (
              <motion.div key={index} style={style}>
                <div className="group relative bg-card-bg rounded-2xl p-8 h-full hover:shadow-card transition-all duration-500 border border-border/20 hover:border-primary/30 flex flex-col">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-xl mb-6"
                  />
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 2. Wrap the buttons in anchor (<a>) tags */}
                  <div className="flex gap-3 mt-auto">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button 
                        size="sm"
                        className="w-full flex-1 bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;