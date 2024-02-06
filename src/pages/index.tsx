import Head from "next/head";
import Link from "next/link";
import { BackgroundGradientAnimation } from "~/components/ui/background-gradient-animation";
import { ThreeDCardDemo } from "~/components/ui/card-demo";

export default function Home() {
  return (
    <>
      <Head>
        <title>🐸</title>
        <meta name="description" content="🐸" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/tzu8wjs.css" />

      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <BackgroundGradientAnimation>
          <ThreeDCardDemo />
        </BackgroundGradientAnimation>
      </main> 
    </>
  );
}