import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SideNav } from "@/components/molecules/SideNav/SideNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADA Component Library",
  description: "A collection of accessible React components following ADA guidelines",
};

function sortNavItems(items: { label: string; items?: any[] }[]): typeof items {
  return items
    .map(item =>
      item.items
        ? { ...item, items: sortNavItems(item.items) }
        : item
    )
    .sort((a, b) => a.label.localeCompare(b.label));
}

const navItems = [
  {
    label: "Getting Started",
    href: "/",
  },
  {
    label: "Components",
    href: "/components",
    items: [
      {
        label: "Accordion",
        href: "/components/accordion",
      },
      {
        label: "Button",
        href: "/components/button",
      },
    ].sort((a, b) => a.label.localeCompare(b.label)),
  },
  {
    label: "Guidelines",
    href: "/guidelines",
    items: [
      {
        label: "Accessibility",
        href: "/guidelines/accessibility",
      },
      {
        label: "Color Contrast",
        href: "/guidelines/color-contrast",
      },
    ].sort((a, b) => a.label.localeCompare(b.label)),
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SideNav items={navItems} />
        <main className="min-h-screen ml-0 md:ml-[280px]">
          {children}
        </main>
      </body>
    </html>
  );
}
