"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Led development of enterprise-scale applications using Next.js and Node.js. Managed a team of 5 developers and improved system performance by 40%.",
    technologies: ["Next.js", "Node.js", "AWS", "MongoDB"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects. Implemented CI/CD pipelines and reduced deployment time by 60%.",
    technologies: ["React", "Express.js", "PostgreSQL", "Docker"]
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2018 - 2019",
    description: "Created responsive web applications and improved user experience through modern frontend technologies.",
    technologies: ["React", "TypeScript", "SASS", "Redux"]
  }
];

export function Experience() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-16">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-center">Work Experience</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20" />
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary" />

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {experience.period}
                    </span>
                  </div>
                  
                  <p className="text-lg font-medium text-primary">
                    {experience.company}
                  </p>
                  
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-sm bg-accent rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}