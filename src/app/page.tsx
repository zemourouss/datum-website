import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/WhyUs";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Datum",
  description:
    "At Datum technology, we understand the unique challenges faced by large enterprises across various industries. Staying competitive in a dynamic market demands continuous innovation and the ability to harness the full potential of your resources. That’s why we are committed to being your external internal team, offering comprehensive solutions that empower you to excel, no matter your field.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Products />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
