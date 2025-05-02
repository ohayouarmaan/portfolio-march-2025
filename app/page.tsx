"use client";
import { SidebarMain } from "../components/custom/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GlareCard } from "../components/ui/glare-card";
import { FloatingDockMain } from "../components/custom/floatingcontact";
import Link from "next/link";

export default function Home() {
  return <div>
  <SidebarMain Children={<Dashboard />} />
  </div>
}

const AboutMe = () => {
  return (
    <p className="text-md text-gray-700">
      I’m a software engineer passionate about{" "}
      <strong className="font-semibold text-gray-900">
        systems programming, compilers, and multimedia processing
      </strong>
      . I love building things from the ground up—whether it’s a{" "}
      <a
        href="https://github.com/ohayouarmaan/mmdb"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-cyan-600 hover:underline"
      >
        Redis-like database (mmdb)
      </a>
      , a{" "}
      <a
        href="https://github.com/ohayouarmaan/flamingo"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-cyan-600 hover:underline"
      >
        programming language (Flamingo)
      </a>
      , or a{" "}
      <a
        href="https://github.com/ohayouarmaan/quark-vm-2"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-cyan-600 hover:underline"
      >
        virtual machine (ProtonVM)
      </a>
      . Rust and Zig are my go-to languages for pushing performance and control, while
      Next.js and React power my web projects.
      <br />
      <br />
      My journey includes working at{" "}
      <strong className="font-semibold text-gray-900">Spext</strong>, where I built{" "}
      <strong className="font-semibold text-gray-900">
        media editing microservices
      </strong>{" "}
      in FastAPI, and{" "}
      <strong className="font-semibold text-gray-900">Serri</strong>, where I orchestrated{" "}
      <strong className="font-semibold text-gray-900">
        messaging bot infrastructures
      </strong>{" "}
      with TypeScript. Beyond that, I’ve developed open-source projects like{" "}
      <a
        href="https://github.com/ohayouarmaan/ramen"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-cyan-600 hover:underline"
      >
        Ramen (a micro REST API framework)
      </a>{" "}
      and{" "}
      <a
        href="https://github.com/ohayouarmaan/yazu"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-cyan-600 hover:underline"
      >
        Yazu (an open-source JSON formatter written in Rust)
      </a>
      .
      <br />
      <br />
      Lately, I’ve been deep into{" "}
      <strong className="font-semibold text-gray-900">machine learning</strong> and exploring
      the intersection of AI and low-level systems. When I’m not coding, you’ll find me
      making{" "}
      <strong className="font-semibold text-gray-900">
        drum and bass, shoegaze, and house music
      </strong>
      <br />
      <br />
      Check out my projects below—whether it’s{" "}
      <strong className="font-semibold text-gray-900">
        high-performance computing, compiler design, or creative tech
      </strong>
      , I’m always building something cool. Let’s connect!
    </p>
  );
};

const Dashboard = () => {
  return (
    <div className="p-8 overflow-y-scroll scroll-smooth">
      <div id="about-me" className="grid grid-cols-1 md:grid-cols-2 bg-neutral-200 rounded-lg">
        <div className="intro-section col-span-1 rounded-lg p-10">
          <h1 className="font-bold text-2xl">
            Hello, I'm Armaan Gupta!
          </h1>
          <br />
          <AboutMe />
        </div>
        <Image 
          src={"/avatar.png"} 
          width={450} 
          height={450} 
          className="hidden md:block mx-auto my-auto" 
          alt={"avatar"} 
        />
      </div>
        <div id="projects" className="p-10 bg-neutral-200 rounded-lg mt-4">
          <h1 className="font-bold text-2xl pb-6">Projects.</h1>
          <ul className="list-disc">
            <li>
              <div className="flex gap-3">
                <h1 className="font-semibold">Proton VM</h1>
                <Link className="text-cyan-600" href="https://github.com/ohayouarmaan/quark-vm-2">
                  Github
                </Link>
              </div>
              <ul className="list-disc pl-4">
                <li>
                  <p>ProtonVM is a 16-bit Stack Based Language Virtual Machine for my Programming language (flamingo)</p>
                </li>
                <li>
                  <p>it has it's own custom managed memory system</p>
                </li>
                <li>
                  <p>hard separation between Heap and Raw buffer.</p>
                </li>
                <li>
                  <p>It can also load & run Foreign DLLs in a safe manner.</p>
                </li>
                <li>
                  <p>Custom assembler with it's own Syntax.</p>
                </li>
                <li>
                  <p>Allows users to execute native syscalls (only allowing usermode for memory safety)</p>
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <ul className="list-disc">
            <li>
              <div className="flex gap-3">
                <h1 className="font-semibold">Flamingo</h1>
                <Link className="text-cyan-600" href="https://github.com/ohayouarmaan/flamingo">
                  Github
                </Link>
              </div>
              <ul className="list-disc pl-4">
                <li>
                  <p>Flamingo is a High Level Dynamically Typed interpretted programming language written from scratch</p>
                </li>
                <li>
                  <p>Functional Programming language</p>
                </li>
                <li>
                  <p>Supports Structs</p>
                </li>
                <li>
                  <p>Custom Grammar & Custom Syntax treating loops as accumulators and conditionals as expressions</p>
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <ul className="list-disc">
            <li>
              <div className="flex gap-3">
                <h1 className="font-semibold">MMDB: Redis Clone.</h1>
                <Link className="text-cyan-600" href="https://github.com/ohayouarmaan/mmdb">
                  Github
                </Link>
              </div>
              <ul className="list-disc pl-4">
                <li>
                  <p>MMDB is an in memory database which supports resp protocol and all the resp functionalities</p>
                </li>
                <li>
                  <p>Implements both partial sync replication and full resync replication</p>
                </li>
                <li>
                  <p>Can load data from existing RDB files.</p>
                </li>
                <li>
                  <p>Supports all the CRUD Commands as well as other commands check README for more info.</p>
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <ul className="list-disc">
            <li>
              <div className="flex gap-3">
                <h1 className="font-semibold">Yazu: An Open source JSON Formatter</h1>
                <Link className="text-cyan-600" href="https://github.com/ohayouarmaan/yazu">
                  Github
                </Link>
              </div>
              <ul className="list-disc pl-4">
                <li>
                  <p>Yazu is an Open Source JSON formatter which is 30% faster than conventional JSON Formatter like Prettier</p>
                </li>
                <li>
                  <p>Implements it's own Cusotm Parser</p>
                </li>
                <li>
                  <p>Has it's own Transpiler, i.e. it can output prettified JSON</p>
                </li>
                <li>
                  <p>Supports Modern JSON Syntax</p>
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <ul className="list-disc">
            <li>
              <div className="flex gap-3">
                <h1 className="font-semibold">Ramen: A micro framework for creating REST API in Nodejs</h1>
                <Link className="text-cyan-600" href="https://github.com/ohayouarmaan/ramen">
                  Github
                </Link>
                <Link className="text-cyan-600" href="https://www.npmjs.com/package/raments">
                  NpmJS
                </Link>
              </div>
              <ul className="list-disc pl-4">
                <li>
                  <p>Ramen is a micro framework for creating REST APIs</p>
                </li>
                <li>
                  <p>Has different ways to define routes.</p>
                </li>
                <li>
                  <p>Ramen is Type safe, it has types for all of it's core functionalities and objects.</p>
                </li>
                <li>
                  <p>Supports multiple routers</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
    <div className="relative rounded-lg mt-4 flex flex-col h-[50rem] w-full items-center justify-center bg-neutral-200 dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "rounded-lg",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div id="contact" className="rounded-lg absolute inset-0 flex items-center justify-center bg-neutral-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="relative z-20 bg-gradient-to-b from-black-200 to-black bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Contact Me
      </p>
      <ul className="font-bold z-20 text-3xl">
        <li className="bg-cyan-500 my-2 transform duration-200 hover:p-[20px]">
          <Link href={"https://github.com/ohayouarmaan"} target={"_blank"}>
            Github
          </Link>
        </li>
        <li className="bg-teal-500 my-2 transform duration-200 hover:p-[20px]">
          <Link href={"https://www.linkedin.com/in/armaan-gupta-1b114a240/"} target={"_blank"}>
            Linkedin
          </Link>
        </li>
        <li className="bg-fuchsia-500 my-2 transform duration-200 hover:p-[20px]">
          <Link href={"https://www.twitter.com/ohayouarmaan"} target={"_blank"}>
            Twitter
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

