import Navbar from "@/components/common/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dxksh.tech"),

  title: "Daksh Yadav — Engineer & Developer",
  description:
    "Portfolio of Daksh Yadav — a full-stack engineer who ships fast, thinks in systems, and cares about delivering results. Frontend, backend, AI, and everything in between.",
  openGraph: {
    title: "Daksh Yadav — Engineer & Developer",
    description:
      "Full-stack engineer who builds from zero. Frontend to deployment.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daksh Yadav — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daksh Yadav — Engineer & Developer",
    description:
      "Full-stack engineer who builds from zero. Frontend to deployment.",
    images: ["/og-image.png"],
    creator: "@DXKSH_X",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "relative h-full",
        "antialiased",
        fontSans.variable,
        fontSerif.variable,
        "font-sans",
        fontMono.variable,
      )}
    >
      <body
        className="relative min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
