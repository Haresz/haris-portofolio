import { Box } from "@chakra-ui/react";
import React from "react";
import Project from "../Project";
import Title from "../Title";

export default function SectionProjects() {
  return (
    <Box px={{ base: 8, md: 20 }}>
      <Title content="Project" />
      <Box className="flex justify-between flex-wrap gap-y-10">
        <Project />
        <Project />
        <Project />
        <Project />
      </Box>
    </Box>
  );
}
