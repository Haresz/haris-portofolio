import React from "react";
import ExperienceContent from "../ExperienceContent";
import { Box } from "@chakra-ui/react";
import Title from "../Title";

export default function SectionEducation() {
  return (
    <Box id="experience" px={{ base: 8, md: 20 }}>
      <Title content="Education" />
      <ExperienceContent
        company="SMK Telkom Purwokerto"
        position="Software Engineering "
        city="Purwokerto"
        date="Jun 2020 - Jul 2023"
        desc={[
          "Immersed in web and mobile app development, refining programming skills.",
          "Held leadership positions, including Student Council President.",
          "Actively participated in robotics clubs, enhancing problem-solving abilities.",
          "Engaged in vibrant extracurricular activities and rigorous coursework.",
          "Cultivated a diverse skill set, preparing for the dynamic software engineering landscape.",
        ]}
      />
      <ExperienceContent
        company="Purwadhika Digital Technology School"
        position="Fullstack web development"
        date="2024"
        desc={[
          "Mastered web development tools: Express, Node.js, Redux, Next.js, React.js, and Tailwind CSS.",
          "Proficient in core web technologies: JavaScript, HTML, and CSS.",
          "Acquired expertise in API integration using Axios and Fetch.",
          "Experienced in testing with Cypress.js for reliable application performance.",
          "Skilled in database management, particularly with MySQL.",
          "Immersed in comprehensive training at Purwadhika, honing skills for dynamic web application development.",
        ]}
      />
    </Box>
  );
}
