"use client";

import { motion } from "motion/react";
import Link from "next/link";

type Article = {
  title: string;
  authors: string;
  meta: string;
  tags: string[];
};

const SAMPLE: Article[] = [
  {
    title: "Transformer-Based Models for Edge IoT Anomaly Detection",
    authors: "Sharma, P.; Li, Q.",
    meta: "Vol. 14, Issue 2 (2025)",
    tags: ["AI", "IoT"],
  },
  {
    title: "Cost-Aware Serverless Scheduling for Data Pipelines",
    authors: "Khan, A.; Rivera, J.",
    meta: "Vol. 14, Issue 2 (2025)",
    tags: ["Cloud", "Systems"],
  },
  {
    title: "Benchmarking Vector Databases for RAG Applications",
    authors: "Bose, R.; Fernandes, L.",
    meta: "Vol. 14, Issue 1 (2025)",
    tags: ["AI", "Databases"],
  },
  {
    title: "Privacy-Preserving Federated Learning on Mobile Devices",
    authors: "Kumar, S.; Patel, R.",
    meta: "Vol. 14, Issue 1 (2025)",
    tags: ["Security", "ML"],
  },
];

const LatestArticles = () => {
  return (
    <section id="latest" className="relative pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="container max-w-screen-2xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
              Latest Articles
            </motion.h2>
            <p className="text-sm text-muted-foreground mt-1">Recently published papers from current issues.</p>
          </div>
          <Link
            href="/archives"
            className="shrink-0 inline-flex items-center px-3 py-2 rounded-full border border-border/60 bg-card/50 hover:bg-primary/10 text-xs md:text-sm transition-colors"
          >
            View all archives →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SAMPLE.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.06 * i }}
              className="group bg-card/70 border border-border/60 rounded-2xl p-5 supports-[backdrop-filter]:backdrop-blur-lg hover:border-primary/40 transition-colors shadow-sm"
            >
              <div className="text-xs text-muted-foreground mb-2">{a.meta}</div>
              <h3 className="font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <div className="text-sm text-muted-foreground mb-3">{a.authors}</div>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
