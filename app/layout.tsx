import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/provider/theme-provider";
import BackToTopButton from "@/components/layout/back-to-top";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const roboto = Roboto({ subsets: ["vietnamese"], variable: "--font-roboto" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vo Minh Tri's Portfolio",
  description: "The main page of Vo Minh Tri's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, roboto.variable)}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="light"
          disableTransitionOnChange={false}
        >
          <div className="relative">
            <Header />
            {children}
            <Footer />
            <BackToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
