import React from 'react';
import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';
import ExperienceContent from '../ExperienceContent';
import Title from '../Title';

export default function SectionAbout() {
  return (
    <Box id="about" px={{ base: 8, md: 20 }} py={10} bg={"#0B0B2A"}>
      <Title content="About Me" />
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        gap={10}
        maxW="1000px"
        mx="auto"
      >
        <Box flex={1}>
          <Text fontSize={{ base: 'md', md: 'lg' }} color={"white"} mb={8}>
            I am a Software Developer with a frontend foundation, currently
            expanding into backend development and data-driven systems. I enjoy
            building things end-to-end and I am always looking for the next
            system worth understanding from the inside out.
          </Text>
          <Heading as="h3" size="lg" color={"#F5199B"} mb={6} fontFamily={"var(--font-display)"} fontWeight={700}>
            Education
          </Heading>
          <ExperienceContent
            company="Universitas Terbuka"
            position="Sistem Informasi"
            city="Online"
            date="Sep 2024 - Present"
            desc={[
              'Building a foundation in systems analysis, databases, and information management.',
              'Applying theoretical knowledge to practical, technology-driven problem-solving scenarios.',
            ]}
          />
          <ExperienceContent
            company="Purwadhika Digital Technology School"
            position="Fullstack web development"
            city="Online"
            date="Jan 2024 - Aug 2024"
            desc={[
              'Mastered web development tools: Express, Node.js, Redux, Next.js, React.js, and Tailwind CSS.',
              'Proficient in core web technologies: JavaScript, HTML, and CSS.',
              'Acquired expertise in API integration using Axios and Fetch.',
              'Experienced in testing with Cypress.js for reliable application performance.',
              'Skilled in database management, particularly with MySQL.',
            ]}
          />
          <ExperienceContent
            company="SMK Telkom Purwokerto"
            position="Software Engineering"
            city="Purwokerto"
            date="Jun 2020 - Jul 2023"
            desc={[
              'Immersed in web and mobile app development, refining programming skills.',
              'Held leadership positions, including Student Council President.',
              'Actively participated in robotics clubs, enhancing problem-solving abilities.',
            ]}
          />
        </Box>
      </Stack>
    </Box>
  );
}
