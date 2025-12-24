"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PredictionCard } from "@/components/PredictionCard";
import { PredictionModal } from "@/components/PredictionModal";

const predictionCategories = [
  { id: "love", icon: "❤️", title: "Future Love Life", description: "Including your future spouse's country" },
  { id: "networth", icon: "💰", title: "Future Net Worth", description: "How wealthy will you be?" },
  { id: "car", icon: "🚗", title: "Your Perfect Car", description: "The ride of your dreams" },
  { id: "country", icon: "🌍", title: "Country You'll Live In", description: "Where life takes you" },
  { id: "career", icon: "💼", title: "Future Career", description: "Your destined profession" },
  { id: "loveable", icon: "🧠", title: "What People Love About You", description: "Your best qualities" },
  { id: "tenyears", icon: "🎁", title: "Your Life in 10 Years", description: "A glimpse ahead" },
  { id: "superpower", icon: "⭐", title: "Personality Superpower", description: "Your hidden strength" },
  { id: "funny", icon: "😂", title: "A Funny Future Fact", description: "Something hilarious awaits" },
];

const predictionResults: Record<string, string[]> = {
  love: [
    "You'll meet your soulmate from Italy 🇮🇹 at a coffee shop. They'll spill espresso on you, and it'll be love at first sight! ☕❤️",
    "Your future partner is from Japan 🇯🇵! You'll bond over anime and ramen. Wedding venue? A cherry blossom garden! 🌸",
    "Love awaits in Brazil 🇧🇷! You'll meet dancing at a carnival. Your wedding will have the best music ever! 💃🎉",
    "Your soulmate is from France 🇫🇷! You'll meet at an art museum, arguing about which painting is better. Both of you will be right! 🎨",
  ],
  networth: [
    "💎 $4.7 Million! You'll make it big with a viral app idea you'll have at 3am. Don't ignore those late-night thoughts!",
    "🏆 $12 Million! Your side hustle becomes a main hustle. Start that YouTube channel!",
    "💰 $850K! Comfortable and happy. You'll have a beach house and zero stress. Living the dream!",
    "🚀 $28 Million! Your investment in something weird (like rare sneakers) pays off BIG time!",
  ],
  car: [
    "🏎️ A sleek Tesla Model S in midnight blue! You'll name it 'Lightning' and talk to it like a friend.",
    "🚙 A vintage Mustang convertible! You'll be known as the coolest person in every parking lot.",
    "🚗 A Mercedes G-Wagon in matte black! You'll feel like a celebrity every single day.",
    "🏎️ A Porsche 911 in racing green! You'll take it on road trips and create amazing memories.",
  ],
  country: [
    "🗼 You'll live in Paris, France! Croissants for breakfast, the Eiffel Tower as your neighbor. Très magnifique!",
    "🌴 You'll end up in Bali, Indonesia! Beach life, sunsets, and ultimate relaxation await you.",
    "🏔️ Switzerland is calling! You'll live surrounded by mountains, chocolate, and the freshest air ever.",
    "🌆 Tokyo, Japan will be your home! Neon lights, amazing food, and the most exciting city life!",
  ],
  career: [
    "👨‍💻 Tech Entrepreneur! Your startup will change how people do something everyday. Get ready for TED talks!",
    "🎬 Famous Content Creator! Millions will watch your videos. Your humor becomes legendary!",
    "🩺 Renowned Doctor! You'll discover something important that helps millions of people worldwide.",
    "🎨 Celebrated Artist! Your work will be in galleries, and people will pay big money for your creations!",
  ],
  loveable: [
    "✨ Your laugh! It's contagious and makes everyone around you happier instantly.",
    "💪 Your determination! When you want something, nothing can stop you. It's inspiring!",
    "🤗 Your kindness! You make people feel seen and valued. That's a rare superpower!",
    "🧠 Your creativity! The way you think outside the box amazes everyone around you.",
  ],
  tenyears: [
    "🏠 Living in a beautiful home with a garden, successful career, and planning your dream vacation!",
    "🌟 Running your own business, traveling 3 months a year, and inspiring others daily!",
    "👨‍👩‍👧‍👦 Happy family life, a job you love, and finally learning to make the perfect pasta!",
    "🎯 Achieved all your current goals, set bigger ones, and helping others reach theirs too!",
  ],
  superpower: [
    "🔮 Intuition! You can read people and situations like a book. Trust those gut feelings!",
    "🗣️ Communication! You can convince anyone of anything. Use this power for good!",
    "🎯 Focus! When you lock in, nothing can distract you. You get things DONE!",
    "❤️ Empathy! You understand people deeply. Everyone wants you as their friend!",
  ],
  funny: [
    "😂 You'll accidentally become famous for a meme you didn't even mean to create!",
    "🤣 Your future pet will have more Instagram followers than you. And you'll be totally fine with it!",
    "😆 You'll trip at an important event, but it'll lead to meeting someone who changes your life!",
    "🤭 You'll develop a weird habit of collecting something random, and it'll somehow make you money!",
  ],
};

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePrediction = (categoryId: string) => {
    setIsGenerating(true);
    setSelectedCategory(categoryId);
    
    setTimeout(() => {
      const results = predictionResults[categoryId];
      const randomPrediction = results[Math.floor(Math.random() * results.length)];
      setPrediction(randomPrediction);
      setIsGenerating(false);
    }, 1500);
  };

  const closePrediction = () => {
    setSelectedCategory(null);
    setPrediction(null);
  };

  const regenerate = () => {
    if (selectedCategory) {
      generatePrediction(selectedCategory);
    }
  };

  const share = (platform: string) => {
    const text = `✨ My FutureVibe Prediction: ${prediction} \n\nGet your prediction at FutureVibe!`;
    const url = encodeURIComponent(window.location.href);
    const encodedText = encodeURIComponent(text);
    
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedText}`,
      instagram: `https://www.instagram.com/`,
    };
    
    window.open(urls[platform], "_blank");
  };

  const selectedCategoryData = predictionCategories.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1A2F] via-[#132843] to-[#0A1A2F]">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
        category={selectedCategoryData || null}
        onRegenerate={regenerate}
        onShare={share}
      />
    </div>
  );
}
