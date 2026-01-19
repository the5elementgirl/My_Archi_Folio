import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";
import PersonalSpace from "../components/PersonalSpace";

export default function Home() {
  return (
    <ContainerBlock
      title="Ramya G"
      description="Architect | Artist"
    >
      <Hero />
      <FavouriteProjects />
    </ContainerBlock>
  );
}
