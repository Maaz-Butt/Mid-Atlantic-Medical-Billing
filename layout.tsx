import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "../components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mid Atlantic Medical Billing",
  description:
    "Mid Atlantic Medical Billing — the most trusted medical billing company in the USA. Reduce denials, maximize reimbursements, and grow revenue by up to 20%. Get a free audit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <NavbarDemo>{children}</NavbarDemo>
      </body>
    </html>
  );
}
