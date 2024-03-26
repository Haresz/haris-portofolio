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
          <Text>{props.company}</Text>
          <Text textColor={"primary"}>{props.position}</Text>
        </div>
        <div className="md:text-end md:flex-col flex md:mt-0 -mt-2">
          <Text className="md:mr-0 mr-4">{props.city}</Text>
          <Text textColor={{ md: "primary" }}>{props.date}</Text>
        </div>
      </Stack>
      <UnorderedList className="mt-4" fontSize={{ base: "md", md: "lg" }}>
        {props.desc.map((desc: any) => {
          return <ListItem key={desc}>{desc}</ListItem>;
        })}
      </UnorderedList>
    </div>
  );
}
