import { ThemeProvider } from "@/components/theme-provider";
import OutputProvider from "@/store/output-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./NavBar";
import { useTheme } from "next-themes";

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OutputProvider>
            <NavBar />
            <main className="py-5">{children}</main>
          </OutputProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
