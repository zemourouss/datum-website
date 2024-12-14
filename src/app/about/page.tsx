import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Datum Technology",
  description: "At Datum technology, we understand the unique challenges faced by large enterprises across various industries. Staying competitive in a dynamic market demands continuous innovation and the ability to harness the full potential of your resources. That’s why we are committed to being your external internal team, offering comprehensive solutions that empower you to excel, no matter your field.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Datum"
        description="At Datum technology, we understand the unique challenges faced by large enterprises across various industries. Staying competitive in a dynamic market demands continuous innovation and the ability to harness the full potential of your resources. That’s why we are committed to being your external internal team, offering comprehensive solutions that empower you to excel, no matter your field."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
