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
        <Project
          title={'Resthere'}
          description={`RestHere: Your Ideal Place to Rest
RestHere is a user-friendly platform for booking hotels, villas, and homestays. Embracing a “stay for everyone” philosophy, we offer a clean and accessible design to ensure a seamless experience for all users. Whether you're traveling or staying local, RestHere helps you find and book the perfect place to rest with ease.`}
          url={'https://jcwdol130205.purwadhikabootcamp.com/'}
          code={'https://github.com/fabianindra/finalproject'}
          tools={[
            {
              title: 'Next.js',
              desc: 'A React framework for building server-side rendered and statically generated web applications.',
            },
            {
              title: 'Jira',
              desc: 'A project management tool used for tracking issues, bugs, and project progress.',
            },
            {
              title: 'Redux Thunk',
              desc: 'A middleware for Redux that allows for handling asynchronous actions.',
            },
            {
              title: 'Redux.js',
              desc: 'A state management library for JavaScript applications, often used with React.',
            },
            {
              title: 'Axios',
              desc: 'A promise-based HTTP client for making API requests.',
            },
            {
              title: 'Agile Development',
              desc: 'A methodology for iterative and incremental software development, emphasizing collaboration and flexibility.',
            },
            {
              title: 'Tailwind CSS',
              desc: 'A utility-first CSS framework for creating custom designs without leaving your HTML.',
            },
            {
              title: 'React.js',
              desc: 'A JavaScript library for building user interfaces, particularly single-page applications.',
            },
            {
              title: 'React Hooks',
              desc: 'A feature in React that allows you to use state and other React features without writing a class.',
            },
            {
              title: 'TypeScript',
              desc: 'A superset of JavaScript that adds static typing, allowing developers to catch errors early during development and enhance code quality.',
            },
            {
              title: 'Chakra UI',
              desc: 'A simple, modular, and accessible component library for React applications.',
            },
            {
              title: 'Leaflet',
              desc: 'An open-source JavaScript library for interactive maps.',
            },
            {
              title: 'Leaflet.js',
              desc: 'The JavaScript implementation of the Leaflet library for interactive maps.',
            },
            {
              title: 'Formik',
              desc: 'A form library for React that helps with form handling and validation.',
            },
            {
              title: 'Yup',
              desc: 'A schema-based validation library for JavaScript.',
            },
            {
              title: 'Express.js',
              desc: 'A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.',
            },
            {
              title: 'Teamwork',
              desc: 'A project management and collaboration tool designed to enhance team productivity.',
            },
            {
              title: 'Prisma ORM',
              desc: 'A modern database toolkit and ORM (Object-Relational Mapping) for TypeScript and JavaScript, simplifying database access and schema management.',
            },
            {
              title: 'nodemon',
              desc: 'A utility that monitors for changes in files and automatically restarts the server.',
            },
            {
              title: 'MySQL',
              desc: 'A popular open-source relational database management system (RDBMS) that uses SQL for querying and managing data.',
            },
            {
              title: 'nodemailer',
              desc: 'A module for Node.js applications to send emails.',
            },
            {
              title: 'cors',
              desc: 'A middleware for enabling Cross-Origin Resource Sharing (CORS) in Node.js applications.',
            },
            {
              title: 'Multer',
              desc: 'A middleware for handling `multipart/form-data`, primarily used for file uploads.',
            },
            {
              title: 'Cron',
              desc: 'A time-based job scheduler in Unix-like operating systems for executing scheduled tasks.',
            },
            {
              title: 'Google OAuth2',
              desc: 'An authentication protocol for allowing secure access to Google services using OAuth2.',
            },
            {
              title: 'JSON Web Token (JWT)',
              desc: 'A compact, URL-safe means of representing claims to be transferred between two parties.',
            },
            {
              title: 'bcrypt',
              desc: 'A library for hashing passwords and comparing hashed passwords securely.',
            },
            {
              title: 'Passport',
              desc: 'An authentication middleware for Node.js that supports a variety of authentication strategies.',
            },
          ]}
          teams={[
            {
              title: 'Fabian Winandi:',
              desc: 'In our team, both Fabian and I work as Fullstack Web Developers. We focus on creating a solid and organized structure for our projects by implementing a well-defined foldering system. This approach ensures efficient collaboration and streamlined development processes, enhancing productivity and consistency across our projects.',
            },
          ]}
          image={'/project5.png'}
        />
        <Project
          title={'Quiser'}
          description={`Quiser: Simplifying Your Learning Journey
Quiser is an intuitive platform designed to create and manage quizzes effortlessly. Aimed at enhancing the learning experience, it offers a clean and user-friendly interface that allows users to focus on the content. Whether for education, training, or fun, Quiser enables the creation of engaging quizzes with ease.`}
          url={'https://quiser.vercel.app/'}
          code={'https://github.com/Haresz/quiser'}
          tools={[
            {
              title: 'Next.js',
              desc: 'A powerful React framework for server-side rendering and static site generation.',
            },
            {
              title: 'Chakra UI',
              desc: 'A modern React component library that provides a set of accessible and reusable components for building user interfaces.',
            },
            {
              title: 'Tailwind CSS',
              desc: 'A utility-first CSS framework that allows for rapidly building custom user interfaces.',
            },
            {
              title: 'TypeScript',
              desc: 'A typed superset of JavaScript that compiles to plain JavaScript, offering static type checking.',
            },
            {
              title: 'React.js',
              desc: 'A JavaScript library for building user interfaces, known for its component-based architecture.',
            },
            {
              title: 'React Hooks',
              desc: 'A feature in React that allows you to manage state and other React features without writing classes.',
            },
            {
              title: 'Framer Motion',
              desc: 'A library for creating animations and interactions in React applications.',
            },
            {
              title: 'Phosphor Icons',
              desc: 'A flexible icon family for interfaces, diagrams, and presentations.',
            },
            {
              title: 'React Use Downloader',
              desc: 'A React hook that provides a simple way to download files from the client side.',
            },
            {
              title: 'ESLint',
              desc: 'A tool for identifying and fixing linting errors in JavaScript code.',
            },
            {
              title: 'TypeScript',
              desc: 'Enhances code quality and development experience by adding static types to JavaScript.',
            },
            {
              title: 'PostCSS',
              desc: 'A tool for transforming CSS with JavaScript plugins, enabling various optimizations and enhancements.',
            },
            {
              title: 'Autoprefixer',
              desc: 'A PostCSS plugin that adds vendor prefixes to CSS rules, ensuring cross-browser compatibility.',
            },
          ]}
          teams={[
            {
              title: 'Nizar Ali Rifa`i :',
              desc: 'Collaborated as the UI/UX Designer, focusing on creating a user-centric design that enhances the overall user experience.',
            },
          ]}
          image={'/project6.jpg'}
        />
      </Box>
    </Box>
  );
}
