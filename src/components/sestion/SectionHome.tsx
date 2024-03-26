import { Stack, Heading, Button, Text, Image } from "@chakra-ui/react";
import React from "react";

export default function SectionHome() {
  return (
    <Stack
      id="home"
      direction={"row"}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={{ base: "start", md: "center" }}
      flexWrap={"wrap-reverse"}
      h={"100vh"}
      px={{ base: 8, md: 20 }}
      pt={28}
      bg={"rgba(255, 181, 52, 0.1)"}
    >
      <Stack width={{ base: 400, lg: 600 }}>
        <Heading
          className="typewriter text-start"
          color={"primary"}
          as="h3"
          width={"fit-content"}
          size={{ base: "md", md: "lg" }}
        >
          Hi I’am Haris
        </Heading>
        <Heading as="h2" size={{ base: "xl", md: "2xl" }}>
          Frontend Developer
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }}>
          I am a lifelong learner and collaborator who is passionate about
          upgrading my skills and working with others to achieve common goals. I
          am committed to my work and always striving to improve.
        </Text>
        <Button
          className="btn-cv"
          width={"fit-content"}
          mt={4}
          px={6}
          bg={"rgb(255 181 52)"}
          color={"white"}
          borderRadius={"50px"}
          size="md"
          style={{
            transition: "all 0.2s ease-out",
          }}
          _hover={{
            bg: "white",
            color: "rgb(255 181 52)",
            border: "1px solid rgb(255 181 52)",
            transition: "all 0.5s ease-out",
            boxShadow: "0 0",
          }}
        >
          Download CV
        </Button>
      </Stack>
      <Image
        className=" border-4 border-primary border-solid rounded-full p-8"
        src="/foto-profile.webp"
        width={{ base: 300, sm: 400, xl: 600 }}
        height={{ base: 300, sm: 400, xl: 600 }}
        mt={{ base: 0, sm: 10, xl: 0 }}
      />
    </Stack>
  );
}
