import { Open_Sans } from "next/font/google";
import Provider from "@/components/Providers";
import Navbar from "@/components/Nav";
import "@/styles/globals.css";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AI Dude",
  description:
    "AI Helper is a web application that helps you to learn about Artificial Intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`subpixel-antialiased bg-gray-100 text-black ${open_Sans.className}`}
      >
        <Provider>
          <Navbar />
          <div className="h-16"></div>

          {children}
        </Provider>
      </body>
    </html>
  );
}
