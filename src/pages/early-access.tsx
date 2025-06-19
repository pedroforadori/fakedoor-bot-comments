import { useState } from "react";
import { useRouter } from "next/router";
import { Send } from "lucide-react";
import { useTheme } from "../contexts/themeContext";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("YouTube");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();
  console.log("Current theme:", theme);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, platform }),
    });
    setLoading(false);
    router.push("/thank-you");
  };

  return (
     <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900"
      }`}
    >
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <Send className="text-blue-400 w-12 h-12 mb-2" />
          <h1 className="text-3xl font-bold text-center">Receba Acesso Antecipado</h1>
          <p className="text-center text-gray-400 mt-2 text-sm">
            Seja o primeiro a experimentar nossa plataforma de automação de comentários para redes sociais.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1 text-left">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full dark:bg-gray-800 border border-gray-600 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seuemail@exemplo.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1 text-left">Plataforma de Interesse</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full dark:bg-gray-800 border border-gray-600 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="YouTube">YouTube</option>
              <option value="Instagram">Instagram</option>
              <option value="X">X (Twitter)</option>
              <option value="Facebook">Facebook</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {loading ? "Enviando..." : "Quero Acesso"}
          </button>
        </form>
      </div>
    </div>
  );
}
