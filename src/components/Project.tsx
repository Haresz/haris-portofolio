"use client";
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
} from "@chakra-ui/react";
import { BookOpenText, LinkBreak, Code } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

export default function Project() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="container-project md:w-auto w-full">
      <Box
        className=" md:w-[600px] w-full md:h-[300px] h-[200px]"
        bg={"rgba(255, 181, 52, 0.1)"}
      />
      <Heading mt={4} as="h3" size="lg">
        Project Title
      </Heading>
      <Stack
        className="text-primary underline text-lg mt-2"
        gap={4}
        justifyContent={"start"}
        direction={"row"}
      >
        <div className="flex">
          <BookOpenText size={28} />
          <Link href={""} onClick={onOpen} className="ml-1">
            study case
          </Link>
        </div>
        <div className="flex">
          <LinkBreak size={28} />
          <Link className="ml-1" href={"/"}>
            visited
          </Link>
        </div>
        <div className="flex">
          <Code size={28} />
          <Link className="ml-1" href={"/"}>
            code
          </Link>
        </div>
      </Stack>
      <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            deserunt error placeat totam unde suscipit dolorem dolorum, sunt
            aperiam quos. Ea consequatur voluptatum ipsam. Qui dignissimos amet
            recusandae ratione veniam. Doloremque, sint obcaecati?
            Necessitatibus repudiandae tempore quo suscipit labore sit
            blanditiis consequatur. Explicabo corrupti perspiciatis, neque
            doloremque nisi quo optio esse deleniti atque iure odit tempore
            totam at, nulla ipsum. Dicta, amet nam. Eligendi, voluptatum ad? Ex
            consectetur, sint nesciunt doloribus impedit perferendis hic quis
            iure consequuntur officiis. Maxime, placeat exercitationem
            laudantium commodi assumenda vero repellat nam cupiditate
            necessitatibus! Aperiam. Culpa, vero incidunt ab quo facilis sit
            ipsa, sed rem labore in asperiores repellendus consectetur
            temporibus minus aut? Alias asperiores accusamus eum in officiis
            praesentium molestias dolores, doloremque deleniti ea. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Accusantium suscipit
            eum, magnam enim voluptas reiciendis voluptatum pariatur harum
            temporibus quos, sunt nemo asperiores iusto ex ipsum fugit. Beatae,
            consectetur iure. Harum officiis incidunt expedita beatae dolore,
            facere cumque voluptate suscipit quaerat eum amet, nobis iste odio
            cupiditate non necessitatibus voluptatum atque perspiciatis
            asperiores deserunt! Cum in doloremque saepe suscipit eligendi!
            Aliquam velit pariatur officia eum magnam quod consequuntur, nostrum
            doloremque placeat dolorem temporibus tempore sequi recusandae sed
            reiciendis aliquid natus? Eaque, obcaecati qui hic excepturi sit
            velit magnam totam doloribus. Illo quaerat voluptates obcaecati
            possimus ipsum eveniet eius beatae tenetur laboriosam, error
            blanditiis sequi a voluptatem mollitia eum delectus voluptas,
            laborum enim quas? Cupiditate perferendis iure quis repellat
            pariatur debitis. Id voluptatem eum, doloribus, earum, illum
            repellendus perferendis optio ut ex quo nostrum fugit omnis tempora
            debitis. Suscipit, impedit maxime provident distinctio ab, incidunt,
            accusantium doloremque facilis architecto veniam est!
            <Stack
              className="text-primary underline text-lg mt-2"
              gap={4}
              justifyContent={"start"}
              direction={"row"}
            >
              <div className="flex">
                <LinkBreak size={28} />
                <Link className="ml-1" href={"/"}>
                  visited
                </Link>
              </div>
              <div className="flex">
                <Code size={28} />
                <Link className="ml-1" href={"/"}>
                  code
                </Link>
              </div>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"rgb(255 181 52)"}
              color={"white"}
              px={8}
              _hover={{
                bg: "white",
                color: "rgb(255 181 52)",
                border: "1px solid rgb(255 181 52)",
                transition: "all 0.5s ease-out",
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
