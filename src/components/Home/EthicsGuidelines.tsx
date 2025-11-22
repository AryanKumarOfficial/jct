"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FileText, Shield } from "lucide-react";

const Card = ({
  href,
  title,
  desc,
  icon: Icon,
}: {
  href: string;
  title: string;
  desc: string;
  icon: any;
}) => (
  <Link
    href={href}
    className="group block bg-card/70 border border-border/60 rounded-2xl p-6 supports-[backdrop-filter]:backdrop-blur-lg hover:border-primary/40 transition-colors shadow-sm h-full"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="h-10 w-10 rounded-xl bg-background border border-border/60 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground">{desc}</p>
    <div className="mt-4 text-sm text-primary">Read more →</div>
  </Link>
);

const EthicsGuidelines = () => {
  return (
    <section id="guidelines" className="relative pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="container max-w-screen-2xl mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold tracking-tight"
          >
            Guidelines & Ethics
          </motion.h2>
          <p className="text-muted-foreground">Ensure your submission meets our author guidelines and ethical standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
          >
            <Card
              href="/author-guidelines"
              title="Author Guidelines"
              desc="Formatting requirements, manuscript structure, and submission checklist."
              icon={FileText}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <Card
              href="/ethics"
              title="Publication Ethics"
              desc="Peer review policy, conflict of interest, plagiarism, and data availability."
              icon={Shield}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EthicsGuidelines;
