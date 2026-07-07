'use client';
import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  Text,
  Image,
} from '@chakra-ui/react';
import { BookOpenText, LinkBreak, Code } from '@phosphor-icons/react/dist/ssr';
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
    <div className="container-project max-w-96 md:w-auto w-full ">
      <Image
        className="md:w-[600px] w-full aspect-video"
        objectFit="cover"
        src={image}
      />
      <div className="p-4">
        <Heading mt={4} as="h3" size="md" color={"#0B0B2A"}>
          {title}
        </Heading>
        <Stack
          className="underline text-lg mt-2"
          gap={4}
          justifyContent={'start'}
          direction={'row'}
        >
          <div className="flex">
            <BookOpenText size={28} color="#F5199B" />
            <Text
              onClick={onOpen}
              className="ml-1 cursor-pointer"
              color={"#F5199B"}
            >
              study case
            </Text>
          </div>
          {url ? (
            <div className="flex">
              <LinkBreak size={28} color="#1B3FE0" />
              <Link className="ml-1" href={url} style={{ color: '#1B3FE0' }}>
                visited
              </Link>
            </div>
          ) : null}
          {code ? (
            <div className="flex">
              <Code size={28} color="#1B3FE0" />
              <Link className="ml-1" href={code} style={{ color: '#1B3FE0' }}>
                code
              </Link>
            </div>
          ) : null}
        </Stack>
      </div>
      {/* <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent maxH={500} bg={"#0B0B2A"} color={"white"}>
          <ModalHeader fontFamily={"var(--font-display)"} fontWeight={700}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Heading mt={4} as="h3" size="sm" color={"#F5199B"}>
                Project Description:
              </Heading>
              <Text mt={2}> {description}</Text>
            </Box>
            <Box>
              {tools ? (
                <>
                  <Heading mt={4} as="h3" size="sm" color={"#F5199B"}>
                    Technologies Used:
                  </Heading>
                  {tools.map(
                    (tool: { title: string; desc: string }, index: number) => {
                      return (
                        <Box key={index} mt={4}>
                          <Heading
                            fontWeight={'medium'}
                            display={'inline'}
                            as="h3"
                            size="sm"
                            color={"#1B3FE0"}
                          >
                            {tool.title}
                          </Heading>
                          <Text display={'inline'}>{tool.desc}</Text>
                        </Box>
                      );
                    },
                  )}
                </>
              ) : null}
            </Box>
            <Box>
              {teams ? (
                <>
                  <Heading mt={4} as="h3" size="sm" color={"#F5199B"}>
                    Team Collaboration :
                  </Heading>
                  {teams.map(
                    (tool: { title: string; desc: string }, index: number) => {
                      return (
                        <Box key={index} mt={4}>
                          <Heading
                            fontWeight={'medium'}
                            display={'inline'}
                            as="h3"
                            size="sm"
                            color={"#1B3FE0"}
                          >
                            {tool.title}
                          </Heading>
                          <Text display={'inline'}>{tool.desc}</Text>
                        </Box>
                      );
                    },
                  )}
                </>
              ) : null}
            </Box>
            <Stack
              className="underline text-lg mt-2"
              gap={4}
              justifyContent={'start'}
              direction={'row'}
            >
              {url ? (
                <div className="flex">
                  <LinkBreak size={28} color="#1B3FE0" />
                  <Link className="ml-1" href={url} style={{ color: '#1B3FE0' }}>
                    visited
                  </Link>
                </div>
              ) : null}
              {code ? (
                <div className="flex">
                  <Code size={28} color="#1B3FE0" />
                  <Link className="ml-1" href={code} style={{ color: '#1B3FE0' }}>
                    code
                  </Link>
                </div>
              ) : null}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"#F5199B"}
              color={"white"}
              px={8}
              _hover={{
                bg: "white",
                color: "#F5199B",
                border: "2px solid #F5199B",
                transition: "all 0.5s ease-out",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </div>
  );
}
