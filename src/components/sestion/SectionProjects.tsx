import { Box } from "@chakra-ui/react";
import React from "react";
import Project from "../Project";
import Title from "../Title";

export default function SectionProjects() {
  return (
    <Box id="project" px={{ base: 8, md: 20 }}>
      <Title content="Project" />
      <Box className="flex justify-between flex-wrap gap-y-10">
        <Project
          title={"Company Profile PT Chakra Radha Mustika"}
          description={`The "Company Profile PT Chakra Radha Mustika" project is a comprehensive digital representation of PT Chakra Radha Mustika, designed to showcase the company's services, achievements, and values. This project utilizes modern web development technologies to ensure a seamless and engaging user experience.`}
          url={"https://cakraradhamustika.com/"}
          code={undefined}
          tools={[
            {
              title: "React and Next.js:",
              desc: "These powerful frameworks are employed to create a dynamic and responsive web application. React ensures a smooth and interactive user interface, while Next.js optimizes performance with server-side rendering and static site generation.",
            },
            {
              title: "Tailwind CSS:",
              desc: "For styling, Tailwind CSS is used to create a visually appealing and consistent design across the website. Tailwind's utility-first approach allows for rapid development and customization, ensuring the company profile looks professional and modern.",
            },
          ]}
          teams={[
            {
              title: "Frontend Team:",
              desc: "Focused on implementing the user interface, ensuring that all visual elements are intuitive, responsive, and aligned with the design specifications provided by the UI/UX team.",
            },
            {
              title: "Backend Team:",
              desc: "Responsible for developing and managing the server-side logic, databases, and APIs. They ensure that all data is securely handled and that the backend integrates seamlessly with the frontend.",
            },
            {
              title: "UI/UX Team:",
              desc: "asked with designing the user experience and interface, ensuring that the website is user-friendly, accessible, and visually appealing. They work closely with both the frontend and backend teams to bring the design to life.",
            },
          ]}
          image={"/project1.jpg"}
        />
        <Project
          title={""}
          description={""}
          url={""}
          code={""}
          tools={""}
          teams={undefined}
          image={""}
        />
        <Project
          title={""}
          description={""}
          url={""}
          code={""}
          tools={""}
          teams={undefined}
          image={""}
        />
        <Project
          title={""}
          description={""}
          url={""}
          code={""}
          tools={""}
          teams={undefined}
          image={""}
        />
      </Box>
    </Box>
  );
}
