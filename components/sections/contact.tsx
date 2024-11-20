"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input placeholder="Name" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="space-y-2">
              <Input placeholder="Subject" />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your message"
                className="min-h-[150px]"
              />
            </div>
            <Button className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}