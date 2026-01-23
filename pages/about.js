import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";

export default function about() {

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Ramya G",
      "alternateName": "the5elementgirl",
      // This is the description Google uses for the "Info Box"
      "description": "Ramya G is an Architect and Artist based in the city of Mysuru India, popularly known by the brand name the5elementgirl. With a professional background in Architecture, her work focuses on the intersection of physical space and human perception. Through Studio Panchbhoota as the Co-Founder & COO, she crafts meticulously designed environments. Her portfolio spans residential design, artistic installations, and digital storytelling.",
      "image": "https://www.the5elementgirl.in/circle-img.png",
      "jobTitle": "Architect & Artist",
      "url": "https://www.the5elementgirl.in/about",
      "sameAs": [
        "https://www.linkedin.com/in/the5elementgirl/",
        "https://www.pinterest.com/the5elementgirl",
        "https://www.instagram.com/the5elementgirl"
      ]
    }
  };

  return (
    <ContainerBlock
      title="About - Ramya G | the5elementgirl"
      description="Learn more about Ramya G, an Architect by profession and an Artist at heart 💛, creating thoughtful spaces where form, feeling, and everyday life come together. 🌻"
      schema={aboutSchema}
    >
      <AboutMe />
    </ContainerBlock>
  );
}
