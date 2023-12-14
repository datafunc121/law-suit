import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/layouts/Navbar"
import Provider from "@/layouts/Provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Case Polaris",
  description:
    "Guiding precise legal research with pioneering contextual clarity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
