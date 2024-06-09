import { ThemeProvider } from "@/components/theme-provider";
import OutputProvider from "@/store/output-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form Validation with Zod",
  description: "",
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OutputProvider>
            <NavBar />
            <main className="container max-w-screen-sm py-5 mb-auto">
              {children}
            </main>
            <Footer />
          </OutputProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
