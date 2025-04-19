import type { Metadata } from "next";
import "./globals.css";
import "../styles/navbar.scss"
import "../styles/CardComponent.scss";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "../styles/ProductDetailComp.scss";
// import "../styles/CartTable.scss";
import "../styles/CartTotal.scss";


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
