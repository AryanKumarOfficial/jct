"use client";

import { motion } from "motion/react";

const PARTNERS = [
  { name: "Google Scholar" },
  { name: "Crossref" },
  { name: "DOAJ" },
  { name: "Semantic Scholar" },
  { name: "Scilit" },
  { name: "ResearchGate" },
];

const Indexing = () => {
  return (
    <section id="indexing" className="relative pt-16 pb-10 md:pt-20 md:pb-14">
      <div className="container max-w-screen-2xl mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-4"
          >
            Indexing & Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-muted-foreground"
          >
            JCT Journals is indexed or discoverable through leading research discovery services.
          </motion.p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: 0.05 * i }}
              className="h-16 rounded-xl bg-card/70 border border-border/60 flex items-center justify-center text-sm font-medium text-foreground/80 supports-[backdrop-filter]:backdrop-blur-lg"
              aria-label={p.name}
              title={p.name}
            >
              {p.name}
            </motion.div>
          ))}
        </div>

        <p className="text-[11px] text-muted-foreground mt-3 text-center">
          Logos and trademarks are property of their respective owners. Replace placeholders with authorized assets.
        </p>
      </div>
    </section>
  );
};

export default Indexing;
