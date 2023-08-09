import Image from "next/image";
import Head from "next/head";
import Hero from "../components/Hero"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/olatoy-dev.png" />
      </Head>
      <main>
       <Hero />
      </main>
    </>
  );
}
