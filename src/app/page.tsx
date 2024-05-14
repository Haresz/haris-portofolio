import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SectionEducation from "@/components/sestion/SectionEducation";
import SectionExperience from "@/components/sestion/SectionExperience";
import SectionHome from "@/components/sestion/SectionHome";
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
      <SectionHome />
      <SectionExperience />
      <SectionEducation />
      <SectionSkill />
      <SectionProjects />
      <Footer />
    </>
  );
}
