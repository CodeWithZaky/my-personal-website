import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import clsx from "clsx";
import type { Metadata } from "next";
import { Architects_Daughter } from "next/font/google";
import "../styles/globals.css";

const font = Architects_Daughter(
  {
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
  }
);

export const metadata: Metadata = {
  title: "Home Page",
  description:
    "Welcome to the Home Page of My Website. Discover our features, services, and latest updates. Explore now to learn more about what we offer.",
  keywords:
    "home page, my website, welcome, features, services, updates, explore",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(font.className, "scroll-smooth")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-primary/10 w-full">
            <Navbar />
            {children}
            {/* <Footer /> */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
