"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [pageY, setPageY] = useState(0);
  const navRef: any = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const handleNavClick = () => {
    onClose();
  };

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
      className="container-nav grain"
      zIndex={9999}
      ref={navRef}
    >
      <Heading flex={1} as="h4" size="md" fontFamily={"var(--font-display)"} fontWeight={700}>
        <span className="text-pink">Haris&rsquo;s </span>Portofolio
      </Heading>

      <IconButton
        className="md:hidden"
        aria-label="Menu"
        variant="ghost"
        icon={isOpen ? <X size={28} /> : <List size={28} />}
        onClick={isOpen ? onClose : onOpen}
        zIndex={10000}
      />

      <Box flex={1} className="hidden md:inline-block">
        <Stack
          className="container-nav-menus"
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link href={"#home"}> Home </Link>
          <Link href={"#project"}> Project </Link>
          <Link href={"#experience"}> Experience </Link>
          <Link href={"#skill"}> Skill </Link>
          <Link href={"#about"}> About Me </Link>
          <Link href={"#contact"}>
            <Button
              bg={"#F5199B"}
              color={"white"}
              px={6}
              borderRadius={"50px"}
              size="md"
              className="btn-riso"
              style={{
                transition: "all 0.2s ease-out",
              }}
              _hover={{
                bg: "white",
                color: "#F5199B",
                border: "2px solid #F5199B",
                transition: "all 0.5s ease-out",
                boxShadow: "none",
              }}
            >
              Contact me!
            </Button>{" "}
          </Link>
        </Stack>
      </Box>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontFamily={"var(--font-display)"} fontWeight={700}>
            <span className="text-pink">Haris&rsquo;s </span>Portofolio
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={6} mt={8}>
              <Link onClick={handleNavClick} className="drawer-link text-navy" href={"#home"}>
                Home
              </Link>
              <Link onClick={handleNavClick} className="drawer-link text-navy" href={"#project"}>
                Project
              </Link>
              <Link onClick={handleNavClick} className="drawer-link text-navy" href={"#experience"}>
                Experience
              </Link>
              <Link onClick={handleNavClick} className="drawer-link text-navy" href={"#skill"}>
                Skill
              </Link>
              <Link onClick={handleNavClick} className="drawer-link text-navy" href={"#about"}>
                About Me
              </Link>
              <Link onClick={handleNavClick} href={"#contact"}>
                <Button
                  bg={"#F5199B"}
                  color={"white"}
                  px={6}
                  borderRadius={"50px"}
                  size="md"
                  width="full"
                  className="btn-riso"
                  style={{
                    transition: "all 0.2s ease-out",
                  }}
                  _hover={{
                    bg: "white",
                    color: "#F5199B",
                    border: "2px solid #F5199B",
                    transition: "all 0.5s ease-out",
                    boxShadow: "none",
                  }}
                >
                  Contact me!
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}
