'use client';
import { Box, Button, Heading, Image, Stack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import useDownloader from 'react-use-downloader';
import Project from '../Project';
import Title from '../Title';
import projectData from '../../data.json';

export default function SectionProjects() {
  const { download } = useDownloader();
  const fileUrl = '/MuhammadHarisCV.pdf';
  const filename = 'MuhammadHarisCV.pdf';
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = projectData.filter((project) => project.featured);
  const otherProjects = projectData.filter((project) => !project.featured);
  const gridClass = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8';

  return (
    <Box
      id="project"
      my={{ base: 16, md: 16 }}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'start', md: 'center' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        px={{ base: 8, md: 20 }}
        py={{ base: 8, md: 10 }}
        bg={'#F5199B'}
        className="sticky top-[72px]"
        spacing={{ base: 6, md: 0 }}
        zIndex={70}
      >
        <Stack flex={1}>
          <Heading
            as="h3"
            size={{ base: 'md', md: 'lg' }}
            color={'#0B0B2A'}
            fontFamily={'var(--font-display)'}
            fontWeight={700}
          >
            Hi I&rsquo;am Haris
          </Heading>
          <Heading
            as="h2"
            size={{ base: 'lg', md: 'xl' }}
            color={'white'}
            fontFamily={'var(--font-display)'}
            fontWeight={700}
            letterSpacing={-1}
          >
            Frontend Developer
          </Heading>
          <Button
            className="btn-box-shadow"
            width={'fit-content'}
            mt={0}
            px={6}
            bg={'#0B0B2A'}
            color={'white'}
            borderRadius={'50px'}
            size="md"
            style={{
              transition: 'all 0.2s ease-out',
            }}
            _hover={{
              bg: 'white',
              color: '#0B0B2A',
              border: '1px solid #0B0B2A',
              transition: 'all 0.5s ease-out',
              boxShadow: '0 0',
            }}
            onClick={() => download(fileUrl, filename)}
          >
            Download CV
          </Button>
        </Stack>
        <Box className="md:inline-block hidden " position="relative" flexShrink={0}>
          <Box
            position="absolute"
            inset={0}
            bg="#0B0B2A"
            borderRadius="full"
            transform="translate(6px, 6px)"
            className="rounded-full"
            style={{ width: 'calc(100% - 12px)', height: 'calc(100% - 12px)' }}
          />
          <Image
            className="border-4 border-white border-solid rounded-full p-1 object-cover relative"
            src="/foto.jpg"
            width={{ base: 100, md: 120 }}
            height={{ base: 100, md: 120 }}
            style={{ filter: 'contrast(1.1) saturate(0.8)' }}
          />
        </Box>
      </Stack>
      <Box px={{ base: 8, md: 20 }} bg={"#0B0B2A"}>
        <Title content="Project" />
        <div className={gridClass}>
          {featuredProjects.map((project) => (
            <Project
              key={project.slug}
              title={project.title}
              slug={project.slug}
              description={project.description}
              tools={project.tools}
              code={project.code || ""}
              image={project.image}
              tagline={project.tagline || ""}
            />
          ))}
        </div>

        <Heading
          as="h3"
          size={{ base: 'md', md: 'lg' }}
          mt={16}
          mb={8}
          color={'white'}
          fontFamily={'var(--font-display)'}
          fontWeight={700}
        >
          Other Experiments &amp; Practice Projects
        </Heading>

        <AnimatePresence initial={false}>
          {showMore && (
            <motion.div
              key="other-grid"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className={`${gridClass} mb-10`}>
                {otherProjects.map((project) => (
                  <Project
                    key={project.slug}
                    title={project.title}
                    slug={project.slug}
                    description={project.description}
                    tools={project.tools}
                    code={project.code || ""}
                    image={project.image}
                    tagline={project.tagline || ""}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Box pb={16} textAlign="center">
          <Button
            className="skill-pill-toggle"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? 'Show Less' : 'See More Projects'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
