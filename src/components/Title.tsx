import { Heading } from "@chakra-ui/react";
import React from "react";

export default function Title(props: any) {
  return (
    <Heading
      className="mx-auto"
      width={"fit-content"}
      my={20}
      letterSpacing={8}
      textAlign={"center"}
      as="h2"
      size="2xl"
    >
      {props.content}
      <hr className="h-8 -mt-6 -mx-4 bg-primary" />
    </Heading>
  );
}
