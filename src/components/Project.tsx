'use client';
import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import { LinkBreak, Code, Eye } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

export default function Project(props: {
  title: string;
  slug: string;
  description: string;
  tools: any;
  teams: any | undefined;
  url: string | undefined;
  code: string | undefined;
  image: string;
  tagline: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, slug, description, url, code, tools, teams, image, tagline } = props;

  return (
    <>
      <div
        className="container-project max-w-96 md:w-auto w-full cursor-pointer"
        onClick={onOpen}
      >
        <Image
          className="md:w-[600px] w-full aspect-video"
          objectFit="cover"
          src={image}
        />
        <div className=" border-t-4 border-blue py-2 px-4">
          <Heading mt={4} as="h3" size="md" fontFamily="var(--font-display)" color={"#0B0B2A"}>
            {title}
          </Heading>
          <i className="text-black line-clamp-1">{tagline}</i>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
        motionPreset="scale"
      >
        <ModalOverlay
          bg="rgba(27, 63, 224, 0.55)"
          sx={{ backdropFilter: 'blur(8px)' }}
        />
        <ModalContent
          className="modal-card"
          mx={4}
          maxH="85vh"
          boxShadow="6px 6px 0 0 #0B0B2A"
          border="3px solid #0B0B2A"
          borderRadius="4px"
          bg="white"
          position="relative"
        >
          <ModalCloseButton
            color="#0B0B2A"
            _hover={{ bg: '#F5199B', color: 'white' }}
            size="lg"
            zIndex={1}
          />
          <ModalBody px={6} py={4}>
            <Heading as="h3" size="lg" color="#0B0B2A" mb={4} fontFamily="var(--font-display)" fontWeight={700}>
              {title}
            </Heading>
            <Text color="#333" mb={4}>
              {description}
            </Text>
            {tools ? (
              <Box mb={4}>
                <Heading as="h4" size="sm" color="#F5199B" mb={3}>
                  Technologies Used:
                </Heading>
                {tools.map(
                  (tool: { title: string; desc: string }, index: number) => {
                    if (index > 3) {
                      return null;
                    } else {
                      return (
                        <Button marginRight={2} rounded="3xl" key={index} size={{ base: "sm" }}>
                          {tool.title.replace(/\s*:\s*$/, '')}
                        </Button>
                      );
                    }

                  },
                )}
              </Box>
            ) : null}
            {/* {teams ? (
              <Box mb={6}>
                <Heading as="h4" size="sm" color="#F5199B" mb={3}>
                  Team Collaboration:
                </Heading>
                {teams.map(
                  (member: { title: string; desc: string }, index: number) => {
                    return (
                      <Box key={index} mb={3}>
                        <Text
                          fontWeight="bold"
                          color="#1B3FE0"
                          display="inline"
                        >
                          {member.title}
                        </Text>
                        <Text color="#333" display="inline">
                          {member.desc}
                        </Text>
                      </Box>
                    );
                  },
                )}
              </Box>
            ) : null} */}
            <Stack
              className="underline text-lg"
              borderTop="2px solid #0B0B2A"
              mt={4}
              pt={4}
              gap={4}
              direction={'row'}
            >
              {url ? (
                <div className="flex items-center">
                  <LinkBreak size={20} color="#1B3FE0" />
                  <Link
                    className="ml-1"
                    href={url}
                    style={{ color: '#1B3FE0' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    visited
                  </Link>
                </div>
              ) : null}
              {code ? (
                <div className="flex items-center">
                  <Code size={20} color="#1B3FE0" />
                  <Link
                    className="ml-1"
                    href={code}
                    style={{ color: '#1B3FE0' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    code
                  </Link>
                </div>
              ) : null}
              <div className="flex items-center">
                <Eye size={20} color="#1B3FE0" />
                <Link
                  className="ml-1"
                  href={`/projects/${slug}`}
                  style={{ color: '#1B3FE0' }}
                >
                  detail
                </Link>
              </div>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
