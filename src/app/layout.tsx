import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const nanumSquare = localFont({
  src: [
    { path: "../../public/fonts/NanumSquareR.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/NanumSquareB.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-nanum-square",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={nanumSquare.className}>
        <div className="min-h-screen w-full flex flex-col">
          <Header />
          <main className="mx-auto w-full max-w-300 flex-1 flex flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
