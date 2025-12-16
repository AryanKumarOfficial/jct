"use client";

import { motion } from "motion/react";
import Link from "next/link";

const TEAM = [
  { role: "Editor-in-Chief", name: "Dr. Mohd Nazri Ismail (MALAYSIA)" },
  { role: "Associate Editor", name: "Dr. M V Ragahavendra (INDIA)" },
  { role: "Associate Editor", name: "Er. Gaurav Tejpal (INDIA)" },
  { role: "Section Editor (AI)", name: "Dr. Tanu Preet Singh (INDIA)" },
];

const EditorialTeaser = () => {
  return (
    <section id="editorial" className="relative pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="container max-w-screen-2xl mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold tracking-tight"
          >
            Editorial Board
          </motion.h2>
          <p className="text-muted-foreground">Experienced researchers guiding rigorous peer review and publication ethics.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.06 * i }}
              className="bg-card/70 border border-border/60 rounded-2xl p-5 supports-[backdrop-filter]:backdrop-blur-lg text-center shadow-sm"
            >
              <div className="text-xs text-muted-foreground mb-1">{m.role}</div>
              <div className="font-semibold">{m.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/editorial-board"
            className="inline-flex items-center px-4 py-2 rounded-full border border-border/60 bg-card/50 hover:bg-primary/10 text-sm transition-colors"
          >
            View full board →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EditorialTeaser;
