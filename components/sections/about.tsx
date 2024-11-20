"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Database, Layout, CheckCircle2 } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Cypress"]
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 rounded-3xl -rotate-6 scale-[0.96] opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 rounded-3xl rotate-6 scale-[0.96] opacity-70" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="John Doe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Hi, I'm John Doe</h3>
              <p className="text-lg text-muted-foreground">
                A passionate full-stack developer with 5 years of experience in building web applications.
                I specialize in creating beautiful, performant, and user-friendly solutions using modern technologies.
              </p>
              
              <div className="space-y-8 mt-8">
                {skills.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h4 className="text-lg font-semibold mb-4">{category.category}</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {category.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 p-2 rounded-lg bg-background/50 border"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center p-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
              >
                <Code2 className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">50+ Projects</h3>
              <p className="text-muted-foreground">Successfully Completed</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
              >
                <Database className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">5+ Years</h3>
              <p className="text-muted-foreground">Of Experience</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
              >
                <Layout className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">30+ Clients</h3>
              <p className="text-muted-foreground">Worldwide</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}