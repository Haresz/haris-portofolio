import { Box } from '@chakra-ui/react';
import React from 'react';
import Project from '../Project';
import Title from '../Title';
import { title } from 'process';

export default function SectionProjects() {
  return (
    <Box id="project" px={{ base: 8, md: 20 }}>
      <Title content="Project" />
      <Box className="flex justify-between flex-wrap gap-y-10">
        <Project
          title={'Company Profile PT Chakra Radha Mustika'}
          description={`The "Company Profile PT Chakra Radha Mustika" project is a comprehensive digital representation of PT Chakra Radha Mustika, designed to showcase the company's services, achievements, and values. This project utilizes modern web development technologies to ensure a seamless and engaging user experience.`}
          url={'https://cakraradhamustika.com/'}
          code={undefined}
          tools={[
            {
              title: 'React and Next.js:',
              desc: 'These powerful frameworks are employed to create a dynamic and responsive web application. React ensures a smooth and interactive user interface, while Next.js optimizes performance with server-side rendering and static site generation.',
            },
            {
              title: 'Tailwind CSS:',
              desc: "For styling, Tailwind CSS is used to create a visually appealing and consistent design across the website. Tailwind's utility-first approach allows for rapid development and customization, ensuring the company profile looks professional and modern.",
            },
          ]}
          teams={[
            {
              title: 'Frontend Team:',
              desc: 'Focused on implementing the user interface, ensuring that all visual elements are intuitive, responsive, and aligned with the design specifications provided by the UI/UX team.',
            },
            {
              title: 'Backend Team:',
              desc: 'Responsible for developing and managing the server-side logic, databases, and APIs. They ensure that all data is securely handled and that the backend integrates seamlessly with the frontend.',
            },
            {
              title: 'UI/UX Team:',
              desc: 'asked with designing the user experience and interface, ensuring that the website is user-friendly, accessible, and visually appealing. They work closely with both the frontend and backend teams to bring the design to life.',
            },
          ]}
          image={'/project1.jpg'}
        />
        <Project
          title={'XYZ Company Profile'}
          description={
            "This project is a company profile for XYZ Company. The web application provides information about the company's history, team, services, and contact details. It is built using the latest web technologies to ensure a smooth and engaging user experience."
          }
          url={'https://xyz-company-cyan.vercel.app/'}
          code={'https://github.com/Haresz/xyz-company'}
          tools={[
            {
              title: 'Next.js: ',
              desc: 'A React framework for building server-side rendered and statically generated web applications.',
            },
            {
              title: 'Chakra UI: ',
              desc: 'A simple, modular, and accessible component library for React applications.',
            },
            {
              title: 'Redux Toolkit: ',
              desc: ' The official, opinionated, batteries-included toolset for efficient Redux development.',
            },
            {
              title: 'Axios: ',
              desc: 'A promise-based HTTP client for making API requests.',
            },
            {
              title: 'Framer Motion:',
              desc: ' A library for creating smooth animations in React applications.',
            },
          ]}
          teams={undefined}
          image={'/project3.jpg'}
        />
        <Project
          title={'The Blog'}
          description={
            'Website Blog is a web application developed using Next.js framework, Chakra UI for styling, and Redux Toolkit for state management. It allows users to create, edit, and view blog posts. The application provides a user-friendly interface with features like pagination and responsive design.'
          }
          url={'https://website-blog-ashen.vercel.app/'}
          code={'https://github.com/Haresz/website-blog'}
          tools={[
            {
              title: 'Next.js: ',
              desc: 'A React framework for building server-side rendered and statically generated web applications.',
            },
            {
              title: 'Chakra UI: ',
              desc: 'A simple, modular, and accessible component library for React applications.',
            },
            {
              title: 'Redux Toolkit: ',
              desc: ' The official, opinionated, batteries-included toolset for efficient Redux development.',
            },
            {
              title: 'Axios: ',
              desc: 'A promise-based HTTP client for making API requests.',
            },
            {
              title: 'Formik: ',
              desc: 'A form library for React that helps with form handling and validation.',
            },
            {
              title: 'Yup: ',
              desc: 'A schema-based validation library for JavaScript.',
            },
            {
              title: 'js-cookie: ',
              desc: 'A JavaScript API for handling browser cookies.',
            },
            {
              title: 'UUID: ',
              desc: 'A library for generating unique identifiers.',
            },
            {
              title: 'Framer Motion:',
              desc: ' A library for creating smooth animations in React applications.',
            },
          ]}
          teams={undefined}
          image={'/project2.jpg'}
        />
        <Project
          title={'Event Management'}
          description={
            'The main goal of the MVP is to create a simple and functional event management platform that allows event organizers to create and promote events, while attendees can browse and register for those events.'
          }
          url={undefined}
          code={'https://github.com/Haresz/website-blog'}
          tools={[
            {
              title: 'Next.js: ',
              desc: 'A React framework for building server-side rendered and statically generated web applications.',
            },
            {
              title: 'Chakra UI: ',
              desc: 'A simple, modular, and accessible component library for React applications.',
            },
            {
              title: 'Redux Toolkit: ',
              desc: ' The official, opinionated, batteries-included toolset for efficient Redux development.',
            },
            {
              title: 'Axios: ',
              desc: 'A promise-based HTTP client for making API requests.',
            },
            {
              title: 'Formik: ',
              desc: 'A form library for React that helps with form handling and validation.',
            },
            {
              title: 'Yup: ',
              desc: 'A schema-based validation library for JavaScript.',
            },
            {
              title: 'js-cookie: ',
              desc: 'A JavaScript API for handling browser cookies.',
            },
            {
              title: 'TypeScript: ',
              desc: 'A superset of JavaScript that adds static typing, allowing developers to catch errors early during development and enhance code quality.',
            },
            {
              title: 'MySQL:',
              desc: 'A popular open-source relational database management system (RDBMS) that uses SQL for querying and managing data.',
            },
            {
              title: 'Prisma ORM:',
              desc: 'A modern database toolkit and ORM (Object-Relational Mapping) for TypeScript and JavaScript, simplifying database access and schema management.',
            },
            {
              title: 'Express.js:',
              desc: 'A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.',
            },
          ]}
          teams={undefined}
          image={'/project4.jpg'}
        />
      </Box>
    </Box>
  );
}
