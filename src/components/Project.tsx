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
      <div className=" border-t-4 border-blue py-2 px-4">
        <Heading mt={4} as="h3" size="md" color={"#0B0B2A"}>
          {title}
        </Heading>
        <i className="text-black" >sort desc</i>
      </div>
    </div>
  );
}
