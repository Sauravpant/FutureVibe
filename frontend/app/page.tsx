"use client";

import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PredictionCard } from "@/components/PredictionCard";
import { PredictionModal } from "@/components/PredictionModal";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { predictionCategories } from "@/data/data";
import { api } from "@/lib/axios";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [predictionImage, setPredictionImage] = useState<string | null>(null);
  const [predictionId, setPredictionId] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const router = useRouter();
  const { isAuthenticated, loading } = useContext(AuthContext)!;

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [loading, isAuthenticated, router]);

  const generatePrediction = async (categoryId: string) => {
    setIsGenerating(true);
    setSelectedCategory(categoryId);
    setPrediction(null);
    setPredictionImage(null);

    try {
      const response = await api.post("/prediction/get-prediction", { categoryId });
      const data = response.data.data;

      setTimeout(() => {
        setPrediction(data.predictionText);
        setPredictionImage(data.imageUrl || null);
        setPredictionId(data.id);
        setIsGenerating(false);
      }, 1500);
    } catch (error) {
      console.error("Error generating prediction:", error);
      setIsGenerating(false);
    }
  };

  const closePrediction = () => {
    setSelectedCategory(null);
    setPrediction(null);
    setPredictionImage(null);
    setPredictionId(null);
  };

  const regenerate = () => {
    if (selectedCategory) {
      generatePrediction(selectedCategory);
    }
  };

  const share = (platform: string) => {
    if (!predictionId) return;

    const shareUrl = `${window.location.origin}/share/${predictionId}`;
    const encodedUrl = encodeURIComponent(shareUrl);
    const shareText = `✨ My FutureVibe Prediction!`;

    api.put(`/prediction/share/${predictionId}`).catch(console.error);

    switch (platform) {
      case "instagram":
        navigator.clipboard
          .writeText(shareUrl)
          .then(() => toast.success("Link copied! Share on Instagram"))
          .catch(() => toast.error(" Unable to copy link. Please try again."));
        break;

      case "whatsapp":
        const waUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        window.open(waUrl, "_blank");
        break;

      case "facebook":
        const fbUrl = `https://m.me/?link=${encodedUrl}`;
        window.open(fbUrl, "_blank", "width=600,height=500");
        toast.success("Link copied! Share on Facebook");
        break;

      default:
        navigator.clipboard
          .writeText(shareUrl)
          .then(() => toast.success("Link copied! 🔗"))
          .catch(() => toast.error(" Unable to copy link. Please try again."));
    }
  };

  const selectedCategoryData = predictionCategories.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1A2F] via-[#132843] to-[#0A1A2F] home-bg">
      <Toaster position="top-center" />
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 card-shadow mb-12"
          >
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-extrabold text-gradient-gold mb-4"
              >
                Your Future, Revealed ✨
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#0A1A2F]/70 text-lg md:text-xl"
              >
                Fun AI predictions you can share with friends
              </motion.p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {predictionCategories.map((category, index) => (
              <PredictionCard
                key={category.id}
                icon={category.icon}
                title={category.title}
                description={category.description}
                index={index}
                onClick={() => generatePrediction(category.id)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <PredictionModal
        isOpen={!!selectedCategory}
        onClose={closePrediction}
        isGenerating={isGenerating}
        prediction={prediction}
        predictionImage={predictionImage}
        category={selectedCategoryData || null}
        onRegenerate={regenerate}
        onShare={share}
      />
    </div>
  );
}
