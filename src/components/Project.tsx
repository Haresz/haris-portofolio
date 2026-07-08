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
} from '@chakra-ui/react';
import { LinkBreak, Code } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

export default function Project(props: {
  title: string;
  description: string;
  tools: any;
  teams: any | undefined;
  url: string | undefined;
  code: string | undefined;
  image: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, description, url, code, tools, teams, image } = props;

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
          <Heading mt={4} as="h3" size="md" color={"#0B0B2A"}>
            {title}
          </Heading>
          <i className="text-black">sort desc</i>
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
          bg="rgba(11, 11, 42, 0.25)"
          sx={{ backdropFilter: 'blur(8px)' }}
        />
        <ModalContent
          bg="white"
          borderRadius={8}
          mx={4}
          maxH="85vh"
        >
          <ModalCloseButton
            color="#0B0B2A"
            _hover={{ bg: '#F5199B', color: 'white' }}
            size="lg"
            zIndex={1}
          />
          <ModalBody px={6} py={4}>
            <Heading as="h3" size="lg" color="#0B0B2A" mb={4}>
              {title}
            </Heading>
            <Text color="#333" mb={6}>
              {description}
            </Text>
            {tools ? (
              <Box mb={6}>
                <Heading as="h4" size="sm" color="#F5199B" mb={3}>
                  Technologies Used:
                </Heading>
                {tools.map(
                  (tool: { title: string; desc: string }, index: number) => {
                    return (
                      <Box key={index} mb={3}>
                        <Text fontWeight="bold" color="#1B3FE0" display="inline">
                          {tool.title}
                        </Text>
                        <Text color="#333" display="inline">
                          {tool.desc}
                        </Text>
                      </Box>
                    );
                  },
                )}
              </Box>
            ) : null}
            {teams ? (
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
            ) : null}
            <Stack
              className="underline text-lg"
              gap={4}
              justifyContent={'start'}
              direction={'row'}
            >
              {url ? (
                <div className="flex items-center">
                  <LinkBreak size={24} color="#1B3FE0" />
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
                  <Code size={24} color="#1B3FE0" />
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
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
