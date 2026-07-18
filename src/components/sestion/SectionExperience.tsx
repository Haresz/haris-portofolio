import React from "react";
import ExperienceContent from "../ExperienceContent";
import { Box } from "@chakra-ui/react";
import Title from "../Title";

export default function SectionExperience() {
  return (
    <Box id="experience" py={{ base: 10 }} px={{ base: 8, md: 20 }} bg={"#1B3FE0"} className="grain">
      <Title content="Experience" />
      <ExperienceContent
        company="Volantis Technology"
        position="Frontend Engineer"
        city="Yogyajakarta"
        date="August 2024 - April 2026"
        desc={[
          "Led code refactoring initiatives by migrating legacy code to modern JavaScript/TypeScript, contributing to measurable improvements in page load performance,",
          "Collaborated directly with C-level executives to align technical development with business goals, implementing Technical SEO strategies (SSR/Meta Tags) to improve organic search visibility,",
          "Optimized web performance and Core Web Vitals to align with modern performance best practices,",
          "Developed scalable frontend architectures using Svelte & React, ensuring high-quality user interfaces that support complex user interactions.",
        ]}
      />
      <ExperienceContent
        company="PT Chakra Radha Mustika"
        position="Frontend Web Developer - Intern"
        city="Jakarta Timur (Remote)"
        date="April 2022 - March 2023"
        desc={[
          "Transformed complex UI/UX designs into pixel-perfect, responsive web applications using React & Next.js,",
          "Integrated over 10+ RESTful APIs in close collaboration with the backend team to enable dynamic data visualization,",
          "Collaborated with other teams via GitLab, managing relationships with seniors and cross-functional team members,",
          "Resolved critical frontend bugs and optimized asset loading for a smoother user experience.",
        ]}
      />
      <ExperienceContent
        company="Telkom Purwokerto Vocational School OSIS"
        position="Chairman of OSIS"
        city="Purwokerto"
        date="October 2021 - November 2022"
        desc={[
          "Led a team of 50 students to plan and execute an annual school event, which attracted the entire school community,",
          "Manage budgets and obtain sponsorships from local businesses,",
          "Collaborate with teachers, staff, and external vendors to ensure event success.",
        ]}
      />
    </Box>
  );
}
