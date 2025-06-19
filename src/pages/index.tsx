import Link from "next/link";
import { Rocket, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/themeContext";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900"
      }`}
    >
      <div
        className={`max-w-2xl rounded-2xl p-10 flex flex-col items-center shadow-xl border ${
          theme === "dark"
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-300"
        }`}
      >
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="self-end mb-4 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          aria-label="Alternar tema"
        >
          {theme === "dark" ? (
            <Sun className="text-yellow-400 w-6 h-6" />
          ) : (
            <Moon className="text-gray-900 w-6 h-6" />
          )}
        </button>

        <Rocket
          className={theme === "dark" ? "text-blue-400 w-14 h-14 mb-4" : "text-blue-600 w-14 h-14 mb-4"}
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Automatize Comentários com IA
        </h1>
        <p className="text-lg mb-8">
          Promova seu produto automaticamente em vídeos e publicações do seu nicho usando inteligência artificial.
        </p>
        <Link href="/early-access">
          <button
            className={`px-6 py-3 rounded-lg text-lg font-medium transition ${
              theme === "dark"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-400 text-gray-900 hover:bg-blue-500"
            }`}
          >
            Comece agora — Grátis
          </button>
        </Link>
      </div>
    </div>
  );
}
