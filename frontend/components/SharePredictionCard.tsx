import { motion } from "framer-motion";
import { predictionCategories } from "../data/data";

interface SharePredictionCardProps {
    prediction: {
        userName: string;
        predictionText: string;
        categoryId: string;
        imageUrl?: string;
        createdAt: string;
    };
}

export function SharePredictionCard({ prediction }: SharePredictionCardProps) {
    const category = predictionCategories.find((c) => c.id === prediction.categoryId);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-6 md:p-10 max-w-2xl w-full card-shadow relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]" />

            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 text-4xl">
                    {category?.icon || "✨"}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A1A2F]">
                    {category?.title || "A Prediction from FutureVibe"}
                </h2>
                <p className="text-[#0A1A2F]/60 mt-2">
                    Generated for {prediction.userName || "a friend"}
                </p>
            </div>

            {prediction.imageUrl && (
                <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                    <img
                        src={prediction.imageUrl}
                        alt="Prediction"
                        className="w-full h-auto max-h-[400px] object-cover"
                    />
                </div>
            )}

            <div className="bg-gradient-to-br from-[#0A1A2F] to-[#132843] rounded-2xl p-8 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl leading-none select-none">
                    ”
                </div>
                <p className="text-white text-xl md:text-2xl leading-relaxed relative z-10 font-medium text-center">
                    {prediction.predictionText}
                </p>
            </div>

            <div className="flex justify-center">
                <a
                    href="/"
                    className="bg-[#D4AF37] text-[#0A1A2F] font-bold py-3 px-8 rounded-xl hover:bg-[#E5C55C] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 duration-200"
                >
                    Create Your Own Prediction 🔮
                </a>
            </div>

            <div className="text-center mt-6 text-sm text-[#0A1A2F]/40">
                FutureVibe • {new Date(prediction.createdAt).toLocaleDateString()}
            </div>
        </motion.div>
    );
}
