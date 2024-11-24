"use client";

import { motion } from "framer-motion";
import { Award, Code2, Globe, GitPullRequest } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Data Structures & Algorithms",
    stats: "500+ Problems Solved",
    details: [
      "LeetCode Rating: 1800+",
      "CodeForces: Specialist",
      "Daily coding challenge streaks",
    ],
    color: "text-blue-500"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Freelancing",
    stats: "20+ Projects Delivered",
    details: [
      "5-star rating on Upwork",
      "Top Rated Plus badge",
      "100% client satisfaction",
    ],
    color: "text-green-500"
  },
  {
    icon: <GitPullRequest className="h-6 w-6" />,
    title: "Open Source",
    stats: "50+ Contributions",
    details: [
      "Core contributor to React libraries",
      "Created npm packages",
      "Active in tech communities",
    ],
    color: "text-purple-500"
  }
];

export function Achievements() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-16">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-center">Extra Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 ${achievement.color}`}
                  >
                    {achievement.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-lg font-medium text-primary mb-4">{achievement.stats}</p>
                  <ul className="space-y-2">
                    {achievement.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}