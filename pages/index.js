import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";
import PersonalSpace from "../components/PersonalSpace";

export default function Home() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ramya G",
    "alternateName": "the5elementgirl",
    "url": "https://www.the5elementgirl.in",
    "image": "https://www.the5elementgirl.in/circle-img.png", // Update this link
    "jobTitle": "Architect & Artist",
    "description": "Architect, Artist, and Designer known as the5elementgirl.",
    "sameAs": [
      "https://www.instagram.com/the5elementdesign",
      "https://www.pinterest.com/the5elementgirl"
    ]
  }
  
  return (
    <ContainerBlock
      title="Ramya G"
      description="Portfolio of Ramya G, also known as the5elementgirl."
      schema={schemaData} // Pass it here
    >
      <Hero />
      <FavouriteProjects />
    </ContainerBlock>
  );
}

