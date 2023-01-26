import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import HeroArea from "@/components/heroArea/HeroArea";
import About from "@/components/aboutArea/About";
import Services from "@/components/servicesArea/Services";
import Pricing from "@/components/pricingArea/Pricing";
import CallToAction from "@/components/callToAction/CallToAction";
import Clients from "@/components/clients/Clients";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Created with Love Ankit" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroArea />
      <About />
      <Services />
      <Pricing />
      <CallToAction />
      <Clients />
    </>
  );
}
