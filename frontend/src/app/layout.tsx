import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design OS",
  description: "Design System Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="h-full antialiased bg-black">
        {children}
      </body>
    </html>
  );
}