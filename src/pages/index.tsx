import Head from "next/head";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/ed.jpeg";
import express from "../../public/express-icon.svg";
import mysql from "../../public/mysql2-icon.svg";
import postgres from "../../public/postgresql-icon.svg";
import prisma from "../../public/prisma-icon.svg";
import java from "../../public/java-icon.svg";
import javascript from "../../public/javascript-icon.svg";
import typescript from "../../public/typescript-icon.svg";
import python from "../../public/python-icon.svg";
import nest from "../../public/nest-icon.svg";
import spring from "../../public/springio-icon.svg";
import docker from "../../public/docker-icon.svg";
import nginx from "../../public/nginx-icon.svg";
import apache from "../../public/apache-icon.svg";
import { ReactNode } from "react";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eduardo&apos;s portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 dark:text-gray-100">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">edcampossouza</h1>
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-orange-300 to-orange-600 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1FmqZhyx-RPHyVUDm7v7r51vozS2_V1uP/view?usp=drive_link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <div className="relative mx-auto rounded-full w-40 h-40">
              <Image
                className="rounded-full"
                src={deved}
                fill
                alt="eduardo picture"
              />
            </div>
            <h2 className="text-5xl py-2 text-teal-500">Eduardo Souza</h2>
            <h2 className="text-2xl py-2 text-teal-500">
              edcampossouza@gmail.com
            </h2>
            <h3 className="text-2xl py-2">Full Stack Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              ~ your to go guy for all things web dev ~
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              I offer a broad selection of services, including design and
              implementation of web api&apos;s, database design, and development
              of single page applications
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16">
            <a href="https://github.com/edcampossouza">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-campos-souza/">
              <AiFillLinkedin />
            </a>
            <a href="mailto:edcampossouza@gmail.com">
              <AiOutlineMail />
            </a>
          </div>
          <div className="dark:rounded-lg p-3 dark:bg-gray-500 w-fit mx-auto ">
            <SkillTable className="mx-auto text-gray-800 dark:text-gray-200 table-auto ">
              <SkillRow
                icons={[
                  { img: mysql, txt: "MySql" },
                  { img: postgres, txt: "PostgreSQL" },
                  { img: prisma, txt: "Prisma ORM" },
                ]}
                text="Database skills: Design and implementation of data models for you application"
              />
              <SkillRow
                icons={[
                  { img: typescript, txt: "Typescript" },
                  { img: javascript, txt: "Javascript" },
                  { img: java, txt: "Java" },
                  { img: python, txt: "Python" },
                ]}
                text="Programming languages: Typescript, Javascript, Java, Python"
              />
              <SkillRow
                icons={[
                  { img: express, txt: "Express.js" },
                  { img: nest, txt: "Nest.js" },
                  { img: spring, txt: "Spring Boot" },
                ]}
                text="Backend frameworks Express.js, Nest.js, Spring Boot"
              />
              <SkillRow
                icons={[
                  { img: nginx, txt: "Nginx" },
                  { img: apache, txt: "Apache" },
                  { img: docker, txt: "Docker" },
                ]}
                text="Infrastructure and DevOps"
              />
            </SkillTable>
          </div>
        </section>
      </main>
    </div>
  );
}

function SkillRow(props: { icons: { img: any; txt: string }[]; text: string }) {
  return (
    <tr>
      <td>
        <div className="flex justify-between space-x-1 mr-2 ">
          {props.icons.map((icon) => (
            <div key={icon.txt}>
              <Image width={50} src={icon.img} alt={icon.txt} />
            </div>
          ))}
        </div>
      </td>
      <td className="overflow-x-clip">{props.text}</td>
    </tr>
  );
}

function SkillTable(props: { children: ReactNode; className?: string }) {
  const { children, ...rest } = props;
  return (
    <table {...rest}>
      <tbody>{children}</tbody>
    </table>
  );
}
