"use client";
import { SidebarMain } from "../components/custom/sidebar.tsx";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GlareCard } from "../components/ui/glare-card.tsx";
import { FloatingDockMain } from "../components/custom/floatingcontact.tsx";
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
      , playing{" "}
      <strong className="font-semibold text-gray-900">guitar</strong> in my band{" "}
      <strong className="font-semibold text-gray-900">Riverrun</strong>, or dreaming up the
      perfect caravan trip.
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
      <div id="about-me" className="grid grid-cols-2 bg-neutral-200 rounded-lg">
        <div className="intro-section col-span-1 rounded-lg p-10">
          <h1 className="font-bold text-2xl">
            Hello, I'm Armaan Gupta!
          </h1>
          <br />
          <AboutMe />
        </div>
        <Image src={"/avatar.png"} width={450} height={450} className="mx-auto my-auto" alt={"avatar"} />
      </div>
      <div id="projects" className="p-10 bg-neutral-200 rounded-lg mt-4">
        <h1 className="font-bold text-2xl pb-6">Projects.</h1>
        <div className="flex gap-6">
          <GlareCard className="flex flex-col items-start justify-center py-8 px-6">
            <p className="font-bold text-white text-lg">Flamingo</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              A programming language, With a custom pratt parser, and a top down tree recursive interpreter. With a custom syntax and some really cool features
            </p>
            <div className="flex items-center justify-center mt-5">
              <button className="px-8 z-[1000] py-2 rounded-sm bg-[#000000] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-brown-500 cursor-pointer">
                Github
              </button>
            </div>
          </GlareCard>
          <GlareCard className="flex flex-col items-start justify-center py-8 px-6">
            <p className="font-bold text-white text-lg">Proton Virtual Machine</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              A stack based virtual machine with custom byte code encoding and a custom assembler and it's own allocator with instructions written from scratch!
            </p>
            <div className="flex items-center justify-center mt-5">
              <button className="px-8 z-[1000] py-2 rounded-sm bg-[#000000] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-brown-500 cursor-pointer">
                Github
              </button>
            </div>
          </GlareCard>
          <GlareCard className="flex flex-col items-start justify-center py-8 px-6">
            <p className="font-bold text-white text-lg">Ramen Backend Framework</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              A lightweight micro REST API framework for Node.js with a custom router, middleware support, and optimized request handling for high performance!
            </p>
            <div className="flex items-center justify-center mt-5">
              <button className="px-8 z-[1000] py-2 rounded-sm bg-[#000000] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-brown-500 cursor-pointer">
                Github
              </button>
            </div>
          </GlareCard>
          <GlareCard className="flex flex-col items-start justify-center py-8 px-6">
            <p className="font-bold text-white text-lg">Yazu: JSON Formatter</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              An open source CLI based JSON formatter written in rust which is marginally faster thatn Prettier, It has it's own parser, transpiler and supports all the modern JSON values.
            </p>
            <div className="flex items-center justify-center mt-5">
              <button className="px-8 z-[1000] py-2 rounded-sm bg-[#000000] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-brown-500 cursor-pointer">
                Github
              </button>
            </div>
          </GlareCard>
        </div>
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

