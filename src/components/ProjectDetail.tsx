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
import React, { useState } from 'react';

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
  const [showAllTools, setShowAllTools] = useState(false);
  const [activeShot, setActiveShot] = useState<number | null>(null);
  const TOOLS_LIMIT = 6;

  const techItems =
    project.techBreakdown ??
    project.tools.map((t) => ({
      name: t.title.replace(/\s*:\s*$/, ''),
      reason: t.desc,
    }));

  const visibleTools = showAllTools
    ? project.tools
    : project.tools.slice(0, TOOLS_LIMIT);
  const hasMoreTools = project.tools.length > TOOLS_LIMIT;

  const screenshots = project.screenshots ?? [];

  return (
    <Box bg="#0B0B2A" minH="100vh">
      {/* ===== HERO SECTION ===== */}
      <Box
        className="grain"
        bg="#0B0B2A"
        px={{ base: 8, md: 20 }}
        pt={{ base: 24, md: 28 }}
        pb={{ base: 10, md: 14 }}
      >
        {/* Back button — normal flow, clears fixed nav */}
        <Link href="/#project" className="inline-flex w-fit no-underline">
          <Button
            className="card-btn"
            size="sm"
            bg="white"
            color="#0B0B2A"
            leftIcon={<CaretLeft size={16} weight="bold" />}
            _hover={{ bg: '#F5199B', color: 'white' }}
          >
            Back to Portfolio
          </Button>
        </Link>

        <Heading
          as="h1"
          size={{ base: 'xl', md: '2xl' }}
          color="white"
          fontFamily="var(--font-display)"
          fontWeight={700}
          mb={4}
          mt={{ base: 6, md: 8 }}
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

        {/* Tech pills — small badges */}
        <Stack direction="row" flexWrap="wrap" gap={2} mb={8} align="center">
          {visibleTools.map((tool, i) => (
            <span key={i} className="tool-tag">
              {tool.title.replace(/\s*:\s*$/, '')}
            </span>
          ))}
          {hasMoreTools && (
            <Button
              className="card-btn"
              size="sm"
              bg="#0B0B2A"
              color="white"
              onClick={() => setShowAllTools((prev) => !prev)}
            >
              {showAllTools
                ? 'Show Less'
                : `See More (+${project.tools.length - TOOLS_LIMIT})`}
            </Button>
          )}
        </Stack>

        {/* CTA buttons */}
        <Stack direction="row" gap={4} flexWrap="wrap">
          {project.url ? (
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <Button
                className="detail-btn"
                px={6}
                bg="#F5199B"
                color="white"
                borderRadius="0"
                size="md"
                rightIcon={<LinkBreak size={18} />}
                _hover={{
                  bg: 'white',
                  color: '#F5199B',
                }}
              >
                Visit Live Site
              </Button>
            </Link>
          ) : null}
          {project.code ? (
            <Link href={project.code} target="_blank" rel="noopener noreferrer">
              <Button
                className="detail-btn-riso"
                px={6}
                bg="#0B0B2A"
                color="white"
                borderRadius="0"
                size="md"
                rightIcon={<Code size={18} />}
                _hover={{
                  bg: 'white',
                  color: '#0B0B2A',
                }}
              >
                View Code
              </Button>
            </Link>
          ) : null}
        </Stack>
      </Box>

      {/* ===== SCREENSHOTS ===== */}
      <Box px={{ base: 8, md: 20 }} mt={{ base: -4, md: -6 }}>
        {screenshots.length > 0 ? (
          screenshots.length === 1 ? (
            <Box
              className="flex justify-center m-4 cursor-zoom-in"
              onClick={() => setActiveShot(0)}
            >
              <Image
                src={screenshots[0].src}
                alt={screenshots[0].alt}
                objectFit="cover"
                maxH="420px"
                display="block"
              />
            </Box>
          ) : (
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {screenshots.map((shot, i) => (
                <Box
                  key={i}
                  className="cursor-zoom-in"
                  onClick={() => setActiveShot(i)}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    w="100%"
                    objectFit="contain"
                    maxH="400px"
                    display="block"
                  />
                </Box>
              ))}
            </Box>
          )
        ) : null}
      </Box>

      {/* ===== OVERVIEW SECTION ===== */}
      <Box
        mx="auto"
        maxW="3xl"
        px={{ base: 8, md: 20 }}
        pt={{ base: 12, md: 20 }}
      >
        <Box className="section-card" bg="white">
          <Box className="section-number" color="#F5199B" mb={2}>01</Box>
          <Heading
            as="h2"
            size="lg"
            color="#0B0B2A"
            fontFamily="var(--font-display)"
            fontWeight={700}
            mb={6}
          >
            Overview
          </Heading>
          <Text color="#333" fontSize="md" lineHeight="tall" whiteSpace="pre-line">
            {project.fullDescription}
          </Text>
        </Box>
      </Box>

      {/* ===== TECH DECISIONS SECTION ===== */}
      <Box mx="auto" maxW="3xl" px={{ base: 8, md: 20 }}>
        <Box className="section-card" bg="#0B0B2A">
          <Box className="section-number" color="#1B3FE0" mb={2}>02</Box>
          <Heading
            as="h2"
            size="lg"
            color="white"
            fontFamily="var(--font-display)"
            fontWeight={700}
            mb={6}
          >
            Tech Decisions
          </Heading>
          <Stack gap={4}>
            {techItems.map((item, i) => (
              <Box key={i}>
                <Text color="white" fontSize="md" lineHeight="tall">
                  <strong style={{ color: '#F5199B' }}>{item.name}</strong>
                  {' — '}{item.reason}
                </Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* ===== CHALLENGES & LEARNINGS SECTION ===== */}
      <Box
        mx="auto"
        maxW="3xl"
        px={{ base: 8, md: 20 }}
        pb={{ base: 16, md: 24 }}
      >
        <Box className="section-card" bg="white">
          <Box className="section-number" color="#F5199B" mb={2}>03</Box>
          <Heading
            as="h2"
            size="lg"
            color="#0B0B2A"
            fontFamily="var(--font-display)"
            fontWeight={700}
            mb={6}
          >
            Challenges &amp; Learnings
          </Heading>
          <Stack gap={6}>
            {project.challenges.map((challenge, i) => (
              <Box key={i}>
                <Text fontWeight="700" color="#F5199B" fontSize="md" mb={1}>
                  {challenge.title}
                </Text>
                <Text color="#333" fontSize="md" lineHeight="relaxed">
                  {challenge.description}
                </Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
