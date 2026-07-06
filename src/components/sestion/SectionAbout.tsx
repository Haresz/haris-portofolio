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
        <Box className="halftone-lg" position="relative" flexShrink={0}>
          <Box
            position="absolute"
            inset={0}
            bg="#1B3FE0"
            transform="translate(8px, 8px)"
            style={{ width: 'calc(100% - 16px)', height: 'calc(100% - 16px)' }}
          />
          <Image
            className="relative border-4 border-white"
            src="/foto.jpg"
            width={300}
            height={300}
            objectFit="cover"
            style={{ filter: 'contrast(1.1) saturate(0.8)' }}
          />
        </Box>
        <Box flex={1}>
          <Text fontSize={{ base: 'md', md: 'lg' }} color={"white"} mb={8}>
            I am a lifelong learner and collaborator who is passionate about
            upgrading my skills and working with others to achieve common goals. I
            am committed to my work and always striving to improve.
          </Text>
          <Heading as="h3" size="lg" color={"#F5199B"} mb={6} fontFamily={"var(--font-display)"} fontWeight={700}>
            Education
          </Heading>
          <ExperienceContent
            company="SMK Telkom Purwokerto"
            position="Software Engineering "
            city="Purwokerto"
            date="Jun 2020 - Jul 2023"
            desc={[
              'Immersed in web and mobile app development, refining programming skills.',
              'Held leadership positions, including Student Council President.',
              'Actively participated in robotics clubs, enhancing problem-solving abilities.',
              'Engaged in vibrant extracurricular activities and rigorous coursework.',
              'Cultivated a diverse skill set, preparing for the dynamic software engineering landscape.',
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
              'Immersed in comprehensive training at Purwadhika, honing skills for dynamic web application development.',
            ]}
          />
        </Box>
      </Stack>
    </Box>
  );
}
