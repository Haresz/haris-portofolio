'use client';
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Code, Eye } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

export default function Project(props: {
  title: string;
  slug: string;
  description: string;
  tools: any;
  code: string | undefined;
  image: string;
  tagline: string;
}) {
  const { title, slug, description, tools, code, image, tagline } = props;
  const TOOLS_LIMIT = 4;

  return (
    <Box
      className="container-project"
      display="flex"
      flexDirection="column"
      height="100%"
    >
      <Image
        className="w-full aspect-video"
        objectFit="cover"
        src={image}
      />

      <Box
        className="border-t-4 border-blue"
        px={4}
        pb={4}
        display="flex"
        flexDirection="column"
        flex="1"
      >
        <Heading
          mt={4}
          as="h3"
          size="md"
          fontFamily="var(--font-display)"
          color="#0B0B2A"
        >
          {title}
        </Heading>
        <i className="text-black line-clamp-1">{tagline}</i>

        <Text
          mt={3}
          fontSize="sm"
          color="#333"
          lineHeight="short"
          noOfLines={3}
        >
          {description}
        </Text>

        <Stack direction="row" flexWrap="wrap" gap={2} mt={3} mb={4}>
          {tools?.slice(0, TOOLS_LIMIT).map(
            (tool: { title: string }, index: number) => (
              <span key={index} className="tool-tag">
                {tool.title.replace(/\s*:\s*$/, '')}
              </span>
            ),
          )}
          {tools?.length > TOOLS_LIMIT ? (
            <span className="tool-tag tool-tag-more">
              +{tools.length - TOOLS_LIMIT}
            </span>
          ) : null}
        </Stack>

        <Stack
          className="border-t-2 border-navy"
          mt="auto"
          pt={3}
          direction="row"
          gap={3}
        >
          {code ? (
            <Link href={code} target="_blank" rel="noopener noreferrer">
              <Button
                className="card-btn"
                size="sm"
                bg="#1B3FE0"
                color="white"
                rightIcon={<Code size={16} />}
                _hover={{ bg: '#0B0B2A' }}
              >
                code
              </Button>
            </Link>
          ) : null}
          <Link href={`/projects/${slug}`}>
            <Button
              className="card-btn"
              size="sm"
              bg="#F5199B"
              color="white"
              rightIcon={<Eye size={16} />}
              _hover={{ bg: '#0B0B2A' }}
            >
              detail
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
