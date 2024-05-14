import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import {
  LinkedinLogo,
  GithubLogo,
  WhatsappLogo,
  Envelope,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      id="contact"
      className="w-full"
      mt={32}
      px={{ base: 8, md: 20 }}
      py={{ base: 10, md: 20 }}
      bgColor={"primary"}
      textColor={"white"}
    >
      <Heading as="h2" size="xl">
        Contact me!
      </Heading>
      <Stack mt={2} direction={"row"} flexWrap={"wrap"} alignItems={"center"}>
        <Text fontSize={{ base: "md", md: "lg" }}>send email in </Text>
        <Stack direction={"row"}>
          <Image width={28} height={0} src={"arrow.svg"} alt={""} />
          <Text fontSize={{ base: "md", md: "lg" }}>
            muhammadharisal259@gmail.com
          </Text>
        </Stack>
      </Stack>
      <Text mb={8} fontSize={{ base: "md", md: "lg" }}>
        or in my sosmed
      </Text>
      <Stack direction={"row"} flexWrap={"wrap"} gap={8}>
        <Link href={"https://www.linkedin.com/in/haris-fikri-75144b207/"}>
          <LinkedinLogo size={60} />
        </Link>
        <Link href={"https://wa.me/+6282225384814"}>
          <WhatsappLogo size={60} />
        </Link>
        <Link
          href={
            "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=muhammadharisal259@gmail.com"
          }
        >
          <Envelope size={60} />
        </Link>
        <Link href={"https://github.com/Haresz"}>
          <GithubLogo size={60} />
        </Link>
      </Stack>
    </Box>
  );
}
