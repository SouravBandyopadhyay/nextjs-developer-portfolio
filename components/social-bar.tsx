"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    url: "https://github.com/johndoe",
    color: "group-hover:bg-[#333] dark:group-hover:bg-white dark:group-hover:text-[#333]"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    url: "https://linkedin.com/in/johndoe",
    color: "group-hover:bg-[#0077b5]"
  },
  {
    name: "Email",
    icon: <Mail className="h-5 w-5" />,
    url: "mailto:john@example.com",
    color: "group-hover:bg-[#EA4335]"
  },
  {
    name: "LeetCode",
    icon: <Code2 className="h-5 w-5" />,
    url: "https://leetcode.com/johndoe",
    color: "group-hover:bg-[#FFA116]"
  }
];

export function SocialBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <motion.div 
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index }}
            className="relative group"
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
              aria-label={link.name}
            >
              {/* Background circle with hover effect */}
              <motion.div
                className={`absolute inset-0 rounded-full transition-colors ${link.color}`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />

              {/* Icon container */}
              <motion.div
                className="relative z-10 p-3 rounded-full bg-background border-2 border-primary/20 text-primary transition-colors duration-300 group-hover:text-background group-hover:border-transparent"
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                {link.icon}
              </motion.div>

              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1 rounded-md bg-background border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                <span className="text-sm font-medium">{link.name}</span>
                {/* Arrow */}
                <div className="absolute top-1/2 -left-1 w-2 h-2 bg-background border-l border-t -translate-y-1/2 rotate-45" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}