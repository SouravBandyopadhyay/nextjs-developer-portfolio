"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
     Sourav Bandyopadhyay
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="https://github.com" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:john@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://drive.google.com/your-resume-link" target="_blank">
              <Button variant="default" className="gap-2">
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}