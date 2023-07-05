import Head from "next/head";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/ed.jpeg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eduardo&apos;s portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">edcampossouza</h1>
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-orange-300 to-orange-600 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
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
            <h3 className="text-2xl py-2">Fullstack software engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              ~ your to go guy for all things web dev ~
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
        </section>
      </main>
    </>
  );
}
