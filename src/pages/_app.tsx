import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: "300",
  variable: "--ubuntu-font",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={ubuntu.className}>
      <Component {...pageProps} />
    </div>
  );
}
