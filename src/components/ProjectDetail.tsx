'use client';

import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  LinkBreak,
  Code,
  CaretLeft,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

interface ProjectData {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  fullDescription: string;
  url: string | null;
  code: string | null;
  image: string;
  screenshots: { src: string; alt: string }[];
  tools: { title: string; desc: string }[];
  techBreakdown: { name: string; reason: string }[] | null;
  challenges: { title: string; description: string }[];
}

interface ProjectDetailProps {
  project: ProjectData;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const techItems =
    project.techBreakdown ??
    project.tools.map((t) => ({
      name: t.title.replace(/\s*:\s*$/, ''),
      reason: t.desc,
    }));

  const hasRealChallenges = project.challenges.some(
    (c) => !c.title.startsWith('TODO')
  );

  return (
    <Box bg="#0B0B2A" minH="100vh">
      {/* ===== BACK NAVIGATION ===== */}
      <Box px={{ base: 8, md: 20 }} pt={6} pb={2}>
        <Link
          href="/#project"
          className="inline-flex items-center gap-2 font-semibold no-underline"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          <CaretLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>
      </Box>

      {/* ===== HERO SECTION ===== */}
      <Box
        className="grain"
        bg="#0B0B2A"
        px={{ base: 8, md: 20 }}
        pt={{ base: 6, md: 8 }}
        pb={{ base: 10, md: 14 }}
      >
        <Heading
          as="h1"
          size={{ base: 'xl', md: '2xl' }}
          color="white"
          fontFamily="var(--font-display)"
          fontWeight={700}
          mb={4}
        >
          {project.title}
        </Heading>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          color="rgba(255,255,255,0.8)"
          mb={6}
          maxW="2xl"
        >
          {project.tagline}
        </Text>

        {/* Tech pills */}
        <Stack direction="row" flexWrap="wrap" gap={2} mb={8}>
          {project.tools.map((tool, i) => (
            <span key={i} className="skill-pill text-sm">
              {tool.title.replace(/\s*:\s*$/, '')}
            </span>
          ))}
        </Stack>

        {/* CTA buttons */}
        <Stack direction="row" gap={4} flexWrap="wrap">
          {project.url ? (
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <Button
                className="btn-box-shadow"
                px={6}
                bg="#F5199B"
                color="white"
                borderRadius="50px"
                size="md"
                rightIcon={<LinkBreak size={18} />}
                style={{ transition: 'all 0.2s ease-out' }}
                _hover={{
                  bg: 'white',
                  color: '#F5199B',
                  border: '1px solid #F5199B',
                  transition: 'all 0.5s ease-out',
                  boxShadow: '0 0',
                }}
              >
                Visit Live Site
              </Button>
            </Link>
          ) : null}
          {project.code ? (
            <Link href={project.code} target="_blank" rel="noopener noreferrer">
              <Button
                className="btn-riso"
                px={6}
                bg="#0B0B2A"
                color="white"
                borderRadius="50px"
                size="md"
                rightIcon={<Code size={18} />}
                style={{ transition: 'all 0.2s ease-out' }}
                _hover={{
                  bg: 'white',
                  color: '#0B0B2A',
                  border: '1px solid #0B0B2A',
                  transition: 'all 0.5s ease-out',
                  boxShadow: '0 0',
                }}
              >
                View Code
              </Button>
            </Link>
          ) : null}
        </Stack>
      </Box>

      {/* ===== HERO SCREENSHOT ===== */}
      <Box px={{ base: 8, md: 20 }} mt={{ base: -4, md: -6 }}>
        <Image
          src={project.screenshots[0]?.src}
          alt={project.screenshots[0]?.alt}
          w="100%"
          objectFit="cover"
          maxH="600px"
        />
      </Box>

      {/* ===== OVERVIEW + TECH NARRATIVE ===== */}
      <Box
        mx="auto"
        maxW="3xl"
        px={{ base: 8, md: 20 }}
        py={{ base: 12, md: 20 }}
      >
        <Heading
          as="h2"
          size="lg"
          color="white"
          fontFamily="var(--font-display)"
          fontWeight={700}
          mb={6}
        >
          Overview
        </Heading>
        <Text color="rgba(255,255,255,0.85)" fontSize="md" lineHeight="tall" whiteSpace="pre-line" mb={8}>
          {project.fullDescription}
        </Text>

        {/* Tech narrative — woven into overview, not a separate section */}
        <Heading
          as="h3"
          size="md"
          color="white"
          fontFamily="var(--font-display)"
          fontWeight={700}
          mb={4}
        >
          Tech Decisions
        </Heading>
        <Text color="rgba(255,255,255,0.85)" fontSize="md" lineHeight="tall">
          {techItems.map((item, i) => (
            <React.Fragment key={i}>
              <strong style={{ color: '#F5199B' }}>{item.name}</strong>
              {' — '}{item.reason}
              {i < techItems.length - 1 ? '. ' : '.'}
            </React.Fragment>
          ))}
        </Text>
      </Box>

      {/* ===== CHALLENGES & LEARNINGS ===== */}
      <Box
        mx="auto"
        maxW="3xl"
        px={{ base: 8, md: 20 }}
        pb={{ base: 16, md: 24 }}
      >
        <Heading
          as="h2"
          size="lg"
          color="white"
          fontFamily="var(--font-display)"
          fontWeight={700}
          mb={6}
        >
          Challenges &amp; Learnings
        </Heading>
        {hasRealChallenges ? (
          <Stack gap={6}>
            {project.challenges.map((challenge, i) => (
              <Box key={i}>
                <Text fontWeight="700" color="#F5199B" fontSize="md" mb={1}>
                  {challenge.title}
                </Text>
                <Text color="rgba(255,255,255,0.8)" fontSize="md" lineHeight="relaxed">
                  {challenge.description}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <Text color="rgba(255,255,255,0.5)" fontStyle="italic">
            TODO: Add your challenges and learnings for this project. Replace the
            placeholder content in data.json under the &quot;challenges&quot; field.
          </Text>
        )}
      </Box>
    </Box>
  );
}
