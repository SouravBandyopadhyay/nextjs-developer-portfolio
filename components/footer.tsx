"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <span>Made with</span>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
        </motion.div>
        <span>by Sourav Bandyopadhyay</span>
      </div>
    </footer>
  );
}