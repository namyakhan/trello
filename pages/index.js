import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Teams from "../components/Teams";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trello</title>
        <link rel="icon" href="trello.svg"></link>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Teams />
      <Features />
      <Reviews />
      <Form />
      <Footer />
    </div>
  );
}
