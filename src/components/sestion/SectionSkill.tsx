import { Box } from "@chakra-ui/react";
import React from "react";
import Title from "../Title";
import Skill from "../Skill";

export default function SectionSkill() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Tailwind",
    "SCSS",
    "Typescript",
    "Chakra UI",
    "ReactJS",
    "NextJS",
    "Redux",
    "Axios",
    "Git",
    "GitHub",
    "GitLab",
    "PostMan",
  ];
  return (
    <Box
      id="skill"
      bg={"rgba(255, 181, 52, 0.1)"}
      px={{ base: 8, md: 20 }}
      pb={{ base: 10, md: 20 }}
      pt={{ base: 1, md: 10 }}
    >
      <Title content="SKILL" />
      <div className="container-skill flex flex-wrap justify-between md:gap-x-10 gap-y-4">
        {skills.map((skill) => {
          return <Skill key={skill} skill={skill} />;
        })}
      </div>
    </Box>
  );
}
