"use client";

import { Sparkles, User } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/90 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Sparkles className="w-6 h-6 text-[#D4AF37]" />
          <span className="font-bold text-xl text-white">FutureVibe</span>
        </motion.div>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-2 rounded-full bg-[#132843] hover:bg-[#1a3555] transition-colors"
        >
          <User className="w-5 h-5 text-[#D4AF37]" />
        </motion.button>
      </div>
    </nav>
  );
}
