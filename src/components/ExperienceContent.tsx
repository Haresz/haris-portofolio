import { Stack, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import React from "react";

export default function ExperienceContent(props: any) {
  return (
    <div className="expxerience-content my-16">
      <Stack
        direction={{ base: "column", md: "row" }}
        className="header-content w-full md:justify-between font-semibold"
        fontSize={{ base: "md", md: "lg" }}
      >
        <div>
          <Text color={"white"}>{props.company}</Text>
          <Text color={"pink"}>{props.position}</Text>
        </div>
        <div className="md:text-end md:flex-col flex md:mt-0 -mt-2">
          <Text className="md:mr-0 mr-4" color={"white"}>{props.city}</Text>
          <Text color={"blue"}>{props.date}</Text>
        </div>
      </Stack>
      <UnorderedList className="mt-4" color={"white"} fontSize={{ base: "md", md: "lg" }}>
        {props.desc.map((desc: any) => {
          return <ListItem key={desc}>{desc}</ListItem>;
        })}
      </UnorderedList>
    </div>
  );
}
