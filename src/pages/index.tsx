import Head from "next/head";
import Link from "next/link";
import { BackgroundGradientAnimation } from "~/components/ui/background-gradient-animation";
import { ThreeDCardDemo } from "~/components/ui/card-demo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wszystkiego najlepszego!!</title>
        <meta name="description" content="z okacji urodzin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6EC7D3] to-[#D398C9]">
        <BackgroundGradientAnimation>
          <ThreeDCardDemo />
        </BackgroundGradientAnimation>
        
      </main> 
    </>
  );
}
