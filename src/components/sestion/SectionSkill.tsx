import { Box } from "@chakra-ui/react";
import React from "react";
import Title from "../Title";
import Skill from "../Skill";

export default function SectionSkill() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "Tailwind",
    "SCSS",
    "Chakra UI",
    "ReactJS",
    "NextJS",
    "Svelte",
    "Vue.js",
    "Redux",
    "Axios",
    "Golang",
    "Java",
    "Git",
    "GitHub",
    "GitLab",
    "PostMan",
    "Docker",
    "Node.js",
    "Express.js",
    "MySQL",
    "PostgreSQL",
    "Go"
  ];
  return (
    <Box
      id="skill"
      bg={"#F5199B"}
      px={{ base: 8, md: 20 }}
      pb={{ base: 10, md: 20 }}
      pt={{ base: 1, md: 10 }}
    >
      <Title content="SKILL" bgColor="bg-blue" />
      <div className="container-skill flex flex-wrap justify-between md:gap-x-10 gap-y-4">
        {skills.map((skill) => {
          return <Skill key={skill} skill={skill} />;
        })}
      </div>
    </Box>
  );
}
