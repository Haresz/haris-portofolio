import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SectionAbout from "@/components/sestion/SectionAbout";
import SectionExperience from "@/components/sestion/SectionExperience";
import SectionProjects from "@/components/sestion/SectionProjects";
import SectionSkill from "@/components/sestion/SectionSkill";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <SectionProjects />
      <SectionExperience />
      <SectionSkill />
      <SectionAbout />
      <Footer />
    </>
  );
}
