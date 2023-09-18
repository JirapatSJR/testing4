import "./globals.scss";
import { Inter } from "next/font/google";
import NavBar from "@/components/global/Navbar/navbar";
import Footer from "@/components/global/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "4WD VISION",
  description: "",
};

export default function RootLayout({ children, data }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <NavBar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
