import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import { Analytics } from "@vercel/analytics/next";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "FutureVibe - Your Future, Revealed",
  description: "Fun AI predictions you can share with friends. Discover your future love life, net worth, career, and more!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Analytics />
        <Toaster position="top-center"></Toaster>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
