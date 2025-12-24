"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Twitter, Facebook, Instagram } from "lucide-react";

interface PredictionModalProps {
  isOpen: boolean;
  onClose: () => void;
  isGenerating: boolean;
  prediction: string | null;
  category: { icon: string; title: string } | null;
  onRegenerate: () => void;
  onShare: (platform: string) => void;
}

export function PredictionModal({
  isOpen,
  onClose,
  isGenerating,
  prediction,
  category,
  onRegenerate,
  onShare,
}: PredictionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-3xl p-6 md:p-10 max-w-lg w-full card-shadow relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-[#0A1A2F]/60" />
            </button>

            <div className="text-center mb-6">
              <span className="text-5xl mb-4 block">{category?.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gradient-gold">
                {category?.title}
              </h2>
            </div>

            {isGenerating ? (
              <div className="flex flex-col items-center py-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full"
                />
                <p className="mt-4 text-[#0A1A2F]/60">Reading your future...</p>
              </div>
            ) : (
              <>
                <div className="bg-gradient-to-br from-[#0A1A2F] to-[#132843] rounded-2xl p-6 mb-6">
                  <p className="text-white text-lg leading-relaxed">{prediction}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onRegenerate}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A1A2F] font-bold py-3 px-6 rounded-xl hover:bg-[#E5C55C] transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Generate Again
                  </motion.button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-center text-[#0A1A2F]/60 mb-4 text-sm">Share with friends</p>
                  <div className="flex justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onShare("twitter")}
                      className="p-3 rounded-full bg-[#0A1A2F] text-[#D4AF37] hover:bg-[#132843] transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onShare("facebook")}
                      className="p-3 rounded-full bg-[#0A1A2F] text-[#D4AF37] hover:bg-[#132843] transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onShare("instagram")}
                      className="p-3 rounded-full bg-[#0A1A2F] text-[#D4AF37] hover:bg-[#132843] transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
