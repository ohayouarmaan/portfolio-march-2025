"use client";
import Image from "next/image";
import { useState }  from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { BackgroundLines } from "@/components/ui/background-lines";
import ColourfulText from "@/components/ui/colourful-text";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "../components/ui/sparkles";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import Link from "next/link";
import Timeline from "../components/custom/timeline.tsx";
import { Vortex } from "../components/ui/vortex.tsx";
 

export default function Home() {
  const [words, setWords] = useState(["Full Stack Web Developer", "Language Designer", "Low Code Enthusiast"])
  return (
    <div className="min-h-[100vh] text-white w-full bg-black">
      <AuroraBackground 
        children={
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Hi I'm <ColourfulText text={"Armaan Gupta"}/>
            </h2>
            <div className="overflow-hidden text-lg uppercase font-bold">
              <FlipWords words={words} className={"text-neutral-700"} duration={1400} /> <br />
            </div>
            <div className="w-[40rem] h-20 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#000000"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-zinc-50 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <div className="flex w-[40%] h-[10%] items-center justify-center gap-9 text-lg z-100">
                <Link href={"https://github.com/ohayouarmaan/"} target={"_blank"} className="cursor-pointer shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.9)] px-8 py-2 bg-[#181717] rounded-md text-white font-light transition duration-200 ease-linear">
                  GitHub
                </Link>

                <Link href={"https://www.linkedin.com/in/armaan-gupta-1b114a240/"} target={"_blank"} className="cursor-pointer shadow-[0_4px_14px_0_rgba(10,102,194,0.4)] hover:shadow-[0_6px_20px_rgba(10,102,194,0.3)] hover:bg-[rgba(10,102,194,0.9)] px-8 py-2 bg-[#0A66C2] rounded-md text-white font-light transition duration-200 ease-linear">
                  LinkedIn
                </Link>
            </div>
          </BackgroundLines>
        }
      />
      <Timeline />
      <div className="w-[100%] bg-white text-neutral-700 mx-auto rounded-md  h-[30rem] overflow-hidden">
        <Vortex
          backgroundColor="transparent"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-2xl md:text-6xl font-bold text-center">
            Interested?
          </h2>
          <p className="text-sm md:text-2xl max-w-xl mt-6 text-center">
            Reach me out via my Linkedin or through my Mail, I'd love to hear from you guys
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="text-white px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              LinkedIn
            </button>
            <button className="text-white px-4 py-2 bg-neutral-600 hover:bg-neutral-700 transition duration-200 rounded-lg shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Mail me? 📧
            </button>
          </div>
        </Vortex>
      </div>
    </div>
  );
}
