import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useTheme } from "../contexts/themeContext";

export default function ThankYou() {
  const { theme } = useTheme();

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center px-6 text-center ${theme === "dark"
      ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      : "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900"
      }`}
    >
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">Obrigado!</h1>
          <p className="text-gray-600 text-lg mb-6 dark:text-white">
            Seu interesse foi registrado com sucesso. Avisaremos por e-mail assim que nossa plataforma estiver disponível. 🚀
          </p>
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">
              Voltar à página inicial
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
