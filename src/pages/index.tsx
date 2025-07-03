import Head from "next/head";
import { EB_Garamond, Geist, Geist_Mono } from "next/font/google";
import { Notepad } from "@/components/notepad/Notepad";
import { Toolbar } from "@/components/notepad/Toolbar";
import { SettingsModal } from "@/components/notepad/SettingsModal";
import { useSettingsStore } from "@/store/settings";
import { useEffect } from "react";
import Link from "next/link";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { mode, font } = useSettingsStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", mode);
  }, [mode]);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-body", font);
  }, [font]);
  return (
    <>
      <Head>
        <title>see/notepad</title>
        <meta
          name="description"
          content="A general purpose notepad app, free and privacy respecting."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div
        className={`${garamond.variable} ${geistSans.variable} ${geistMono.variable} font-body container`}
        data-bs-mode={mode}
      >
        <header className="header d-md-flex d-sm-block mt-3">
          <h3 className="me-3">
            <Link
              href="https://see.bz?ref=notepad&on=header"
              target="_blank"
              className="fw-bold"
            >
              see
            </Link>
            <Link href="/">/{process.env.NEXT_PUBLIC_APP_NAME}</Link>
          </h3>

          <Toolbar />
        </header>
        <main>
          <Notepad />
          <SettingsModal />
        </main>
        <footer>
          <div className="print-show">
            <p>see.bz/notepad</p>
          </div>
        </footer>
      </div>
    </>
  );
}
