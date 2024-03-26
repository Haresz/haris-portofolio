import React from "react";
import ExperienceContent from "../ExperienceContent";
import { Box } from "@chakra-ui/react";
import Title from "../Title";

export default function SectionExperience() {
  return (
    <Box id="experience" px={{ base: 8, md: 20 }}>
      <Title content="Experience" />
      <ExperienceContent
        company="PT Chakra Radha Mustika"
        position="Frontend web developer - Intern"
        city="Jakarta Timur"
        date="April 2022 - March 2023"
        desc={[
          "Frontend web developer intern with experience in completing assigned tasks,",
          "collaborating with other teams via GitLab,",
          "managing relationships with seniors and other team members,",
          "and working with UI/UX and backend teams.",
        ]}
      />
      <ExperienceContent
        company="Telkom Purwokerto Vocational School OSIS"
        position="Chairman of OSIS"
        city="Purwokerto"
        date="October 2021 - November 2022"
        desc={[
          "Led a team of 50 students to plan and execute an annual school event, which attracted the entire school community.",
          "Manage budgets and obtain sponsorships from local businesses.",
          "Collaborate with teachers, staff, and external vendors to ensure event success.",
        ]}
      />
    </Box>
  );
}
