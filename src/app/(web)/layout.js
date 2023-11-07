import {  Quicksand } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import AuthProvider from "@/providers/AuthProvider";

export const metadata = {
  title: {
    default: "Aqua Cainta: Your Relaxing Getaway in Talisay, Cebu City",
    template: "%s | Aqua Cainta",
    absolute: ""
  },
  openGraph: {
    title: 'Aqua Cainta: Your Relaxing Getaway in Talisay, Cebu City',
    description: 'Escape to Aqua Cainta, a tranquil resort in Talisay, Cebu City. Experience our top-notch amenities and serene environment for a truly relaxing vacation.',
    type: "website",
    siteName: "Aqua Cainta Resort",
    local: "en_US"
  },
  twitter: {
    title: 'Aqua Cainta: Your Relaxing Getaway in Talisay, Cebu City',
    description: 'Escape to Aqua Cainta, a tranquil resort in Talisay, Cebu City. Experience our top-notch amenities and serene environment for a truly relaxing vacation.',
    type: "website",
    site: "Aqua Cainta Resort",
    handle: '@AquaCaintaResort',
    cardType: "summary_large_image",
  },
  icons: {
    icon: "./favicon.ico"
  },
  applicationName: "Aqua Cainta Website",
  keywords: ['Aqua', 'Cainta', 'resort','swimmingpool', 'Aqua cainta', 'talisay']
};



const quickSand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quickSand.className}>
        <AuthProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
