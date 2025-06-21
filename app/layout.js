import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of G. V Dhanush Kumar - Software Developer",
  description:
    "My name is GUNTHA VENKATA DHANUSH KUMAR. Results-driven Frontend Engineer with a strong background in building high-performance and scalable web applications using React and modern frontend technologies. Skilled in designing clean UI architectures, optimizing performance, and collaborating with cross-functional teams to deliver exceptional user experiences. Committed to writing maintainable, well-structured code, following best practices, and contributing to business growth through efficient and user-focused solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        {/* <Footer /> */}
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
