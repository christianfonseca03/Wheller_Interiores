import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const open_Sans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={open_Sans.className}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
