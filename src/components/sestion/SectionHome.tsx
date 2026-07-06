'use client';
import { Stack, Heading, Button, Box, Image } from '@chakra-ui/react';
import useDownloader from 'react-use-downloader';
import React from 'react';

export default function SectionHome() {
  const { download } = useDownloader();

  const fileUrl = '/MuhammadHaris_CV.pdf';
  const filename = 'MuhammadHaris_CV.pdf';
  return (
    <Box position="relative">
      <Stack
        id="home"
        direction={'row'}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems={{ base: 'start', md: 'center' }}
        flexWrap={'wrap-reverse'}
        h={'100vh'}
        px={{ base: 8, md: 20 }}
        pt={28}
        bg={'#F5199B'}
        className="halftone"
      >
        <Stack width={{ base: 400, lg: 600 }} zIndex={2}>
          <Heading
            className="typewriter text-start"
            color={'#0B0B2A'}
            as="h3"
            width={'fit-content'}
            size={{ base: 'md', md: 'lg' }}
            fontFamily={"var(--font-display)"}
            fontWeight={700}
          >
            Hi I&rsquo;am Haris
          </Heading>
          <Heading
            as="h2"
            size={{ base: 'xl', md: '2xl' }}
            color={'white'}
            fontFamily={"var(--font-display)"}
            fontWeight={700}
            letterSpacing={-1}
          >
            Frontend Developer
          </Heading>
          <Button
            className="btn-riso"
            width={'fit-content'}
            mt={4}
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
              border: '2px solid #0B0B2A',
              transition: 'all 0.5s ease-out',
              boxShadow: '0 0',
            }}
            onClick={() => download(fileUrl, filename)}
          >
            Download CV
          </Button>
        </Stack>
        <Box position="relative" zIndex={2}>
          <Box
            position="absolute"
            inset={0}
            bg="#0B0B2A"
            borderRadius="full"
            transform="translate(8px, 8px)"
            className="rounded-full"
            style={{ width: 'calc(100% - 16px)', height: 'calc(100% - 16px)' }}
          />
          <Image
            className="border-4 border-white border-solid rounded-full p-2 object-cover relative"
            src="/foto.jpg"
            width={{ base: 300, sm: 400, xl: 600 }}
            height={{ base: 300, sm: 400, xl: 600 }}
            mt={{ base: 0, sm: 10, xl: 0 }}
            style={{ filter: 'contrast(1.1) saturate(0.8)' }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
