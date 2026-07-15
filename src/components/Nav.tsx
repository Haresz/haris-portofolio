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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      py={4}
      backgroundColor={"white"}
      boxShadow="md"
      className="container-nav grain"
      zIndex={80}
    >
      <Heading flex={1} as="h4" size="md" fontFamily={"var(--font-display)"} fontWeight={700}>
        <Link href={"/#project"}>
          <span className="text-pink">Haris&rsquo;s </span> <span className="text-navy" >Portofolio</span>
        </Link>
      </Heading>

      <div className="md:hidden">
        <IconButton
          aria-label="Menu"
          variant="ghost"
          icon={isOpen ? <X size={28} /> : <List size={28} />}
          onClick={isOpen ? onClose : onOpen}
          zIndex={10000}
        />
      </div>


      <Box flex={1} className="hidden md:inline-block">
        <Stack
          className="container-nav-menus"
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link href={"/#project"}> Project </Link>
          <Link href={"/#experience"}> Experience </Link>
          <Link href={"/#skill"}> Skill </Link>
          <Link href={"/#about"}> About Me </Link>
          <Link href={"/#contact"}>
            <Button
              className="btn-box-shadow"
              width={'fit-content'}
              mt={0}
              px={6}
              bg={'#F5199B'}
              color={'white'}
              borderRadius={'50px'}
              size="md"
              style={{
                transition: 'all 0.2s ease-out',
              }}
              _hover={{
                bg: 'white',
                color: '#1B3FE0',
                border: '1px solid #1B3FE0',
                transition: 'all 0.5s ease-out',
                boxShadow: '0 0',
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
              <Link onClick={handleNavClick} className="drawer-link text-navy" href={"/#project"}>
                Project
              </Link>
              <Link onClick={handleNavClick} className="drawer-link text-navy" href={"/#experience"}>
                Experience
              </Link>
              <Link onClick={handleNavClick} className="drawer-link text-navy" href={"/#skill"}>
                Skill
              </Link>
              <Link onClick={handleNavClick} className="drawer-link text-navy" href={"/#about"}>
                About Me
              </Link>
              <Link onClick={handleNavClick} href={"/#contact"}>
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
