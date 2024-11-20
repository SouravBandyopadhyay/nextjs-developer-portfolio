"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with Next.js, TypeScript, and Stripe integration for secure payments.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool using OpenAI's GPT-3 API for automated content creation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Python", "FastAPI", "React", "OpenAI"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="h-full"
              >
                <Card className="group h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-colors">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Link href={project.github} target="_blank">
                        <Button variant="secondary" size="icon" className="rounded-full">
                          <Github className="h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href={project.demo} target="_blank">
                        <Button variant="secondary" size="icon" className="rounded-full">
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Link href={project.github} target="_blank" className="flex-1">
                          <Button variant="outline" className="w-full">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </Link>
                        <Link href={project.demo} target="_blank" className="flex-1">
                          <Button className="w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}