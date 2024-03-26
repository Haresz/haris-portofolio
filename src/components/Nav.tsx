"use client";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function () {
  const [pageY, setPageY] = useState(0);
  const navRef: any = useRef();

  useEffect(() => {
    let prevScrollPos = pageY;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setPageY(currentScrollPos);
      if (prevScrollPos > currentScrollPos) {
        navRef.current.style.top = "0px";
      } else {
        navRef.current.style.top = "-100px";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageY]);

  return (
    <Stack
      top={0}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={{ base: 8, md: 20 }}
      py={8}
      backgroundColor={"white"}
      boxShadow="md"
      className="container-nav"
      ref={navRef}
    >
      <Heading flex={1} as="h4" size="md">
        <span className="text-primary">Haris’s </span>Portofolio
      </Heading>
      <Box flex={1} className="hidden md:inline-block">
        <Stack
          className="container-nav-menus"
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link href={"#home"}> Home </Link>
          <Link href={"#experience"}> Experience </Link>
          <Link href={"#skill"}> Skill </Link>
          <Link href={"#project"}> Project </Link>
          <Link href={"#contact"}>
            <Button
              bg={"rgb(255 181 52)"}
              color={"white"}
              px={6}
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
              }}
            >
              Contact me!
            </Button>{" "}
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
