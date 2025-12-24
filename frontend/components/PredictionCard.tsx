"use client";

import { motion } from "framer-motion";

interface PredictionCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
  index: number;
}

export function PredictionCard({ icon, title, description, onClick, index }: PredictionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-2xl p-6 text-left card-shadow hover:gold-glow transition-all duration-300 group w-full"
    >
      <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <h3 className="font-bold text-[#0A1A2F] text-lg mb-1">{title}</h3>
      <p className="text-[#0A1A2F]/60 text-sm">{description}</p>
    </motion.button>
  );
}
