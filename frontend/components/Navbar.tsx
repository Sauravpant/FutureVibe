"use client";

import { Sparkles, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { logout } = useContext(AuthContext)!;
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    router.push("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/90 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-[#D4AF37]" />
          <span className="font-bold text-xl text-white">FutureVibe</span>
        </motion.div>
        <div className="relative" ref={dropdownRef}>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 rounded-full bg-[#132843] hover:bg-[#1a3555] transition-colors"
          >
            <User className="w-5 h-5 text-[#D4AF37]" />
          </motion.button>
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-[#132843] rounded-lg shadow-lg border border-[#D4AF37]/20 overflow-hidden"
              >
                <button onClick={handleLogout} className="w-full px-4 py-3 flex items-center gap-3 text-white hover:bg-[#1a3555] transition-colors">
                  <LogOut className="w-4 h-4 text-[#D4AF37]" />
                  <span>Logout</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
