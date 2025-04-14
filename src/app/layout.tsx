import type { Metadata } from "next";
import "./globals.css";
import "../styles/navbar.scss"
import "../styles/CardComponent.scss";
import StyledComponentsRegistry from "@/lib/AntdRegistry";


export const metadata: Metadata = {
  title: "BCL",
  description: "BCL e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="bg-white"
      >
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
