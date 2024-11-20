"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Modern Development",
    description: "Built with Next.js 14 and TypeScript for type-safe, modern web development.",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Beautiful UI",
    description: "Styled with shadcn/ui and Tailwind CSS for a beautiful, responsive design.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Smooth Animations",
    description: "Enhanced with Framer Motion for smooth, beautiful animations and transitions.",
  },
];

export function Features() {
  return (
    <section className="container py-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mb-4 text-primary"
            >
              {feature.icon}
            </motion.div>
            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}