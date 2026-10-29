import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aenon Ministries and Trust",
  description: "Aenon Ministries and Trust is updating their website. We'll be back soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
