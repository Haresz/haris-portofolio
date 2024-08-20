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
    <div className="container-project md:w-auto w-full">
      <Image
        className="md:w-[600px] w-full md:h-[300px] h-[200px] shadow-lg rounded-sm"
        objectFit="cover"
        src={image}
      />
      <Heading mt={4} as="h3" size="md">
        {title}
      </Heading>
      <Stack
        className="text-primary underline text-lg mt-2"
        gap={4}
        justifyContent={'start'}
        direction={'row'}
      >
        <div className="flex">
          <BookOpenText size={28} />
          <Text onClick={onOpen} className="ml-1 cursor-pointer">
            study case
          </Text>
        </div>
        {url ? (
          <div className="flex">
            <LinkBreak size={28} />
            <Link className="ml-1" href={url}>
              visited
            </Link>
          </div>
        ) : null}
        {code ? (
          <div className="flex">
            <Code size={28} />
            <Link className="ml-1" href={code}>
              code
            </Link>
          </div>
        ) : null}
      </Stack>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent maxH={500}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Heading mt={4} as="h3" size="sm">
                Project Description:
              </Heading>
              <Text mt={2}> {description}</Text>
            </Box>
            <Box>
              {tools ? (
                <>
                  <Heading mt={4} as="h3" size="sm">
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
                  <Heading mt={4} as="h3" size="sm">
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
              className="text-primary underline text-lg mt-2"
              gap={4}
              justifyContent={'start'}
              direction={'row'}
            >
              {url ? (
                <div className="flex">
                  <LinkBreak size={28} />
                  <Link className="ml-1" href={url}>
                    visited
                  </Link>
                </div>
              ) : null}
              {code ? (
                <div className="flex">
                  <Code size={28} />
                  <Link className="ml-1" href={code}>
                    code
                  </Link>
                </div>
              ) : null}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={'rgb(255 181 52)'}
              color={'white'}
              px={8}
              _hover={{
                bg: 'white',
                color: 'rgb(255 181 52)',
                border: '1px solid rgb(255 181 52)',
                transition: 'all 0.5s ease-out',
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
