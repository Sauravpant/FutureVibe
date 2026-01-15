"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "@/lib/axios";
import { SharePredictionCard } from "@/components/SharePredictionCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface SharedPredictionData {
    id: string;
    userName: string;
    predictionText: string;
    imageUrl?: string;
    categoryId: string;
    createdAt: string;
}

export default function SharePage() {
    const params = useParams();
    const id = params?.id as string;

    const [prediction, setPrediction] = useState<SharedPredictionData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPrediction = async () => {
            if (!id) return;

            try {
                setLoading(true);
                // Using the public endpoint to fetch shared prediction
                const response = await api.get(`/prediction/get-shared/${id}`);
                setPrediction(response.data.data);
            } catch (err) {
                console.error("Error fetching prediction:", err);
                setError("Could not load prediction. It might be invalid or deleted.");
            } finally {
                setLoading(false);
            }
        };

        fetchPrediction();
    }, [id]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0A1A2F] via-[#132843] to-[#0A1A2F] flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center p-4 pt-24 pb-16">
                {loading ? (
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
                        <p className="mt-4 text-white/60">Loading prediction...</p>
                    </div>
                ) : error ? (
                    <div className="text-center bg-white/5 rounded-3xl p-8 max-w-md backdrop-blur-sm border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-2">Oops!</h2>
                        <p className="text-white/60 mb-6">{error}</p>
                        <a
                            href="/"
                            className="px-6 py-2 bg-[#D4AF37] text-[#0A1A2F] rounded-lg font-bold hover:bg-[#E5C55C] transition-colors"
                        >
                            Go Home
                        </a>
                    </div>
                ) : prediction ? (
                    <SharePredictionCard prediction={prediction} />
                ) : null}
            </main>

            <Footer />
        </div>
    );
}
