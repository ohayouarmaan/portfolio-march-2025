import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import { Github } from "lucide-react"

export default function TimelineDemo() {
  const data = [
    {
      title: "Early 2025",
      content: (
        <div>
          <div className="pb-3">
            <p className="text-black dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <Link className="text-blue-500 hover:underline" target={"_blank"} href="https://github.com/ohayouarmaan/quarkvm-2">ProtonVM</Link>: Working on a Stack Based Virtual Machine for my own scripting language
            </p>
            <ul className="text-neutral-800">
              <li>
                🎯 Users can do native syscalls
              </li>
              <li>
                🎯 Separate stack and a heap allocator native syscalls
              </li>
              <li>
                🎯 Word Based control over memory
              </li>
              <li>
                🎯 Separate memory for native buffers, heap, and stack for data consensus.
              </li>
              <li>
                🎯 Has it's own bytecode encoder, and it's own Assembly known as QASM
              </li>
              <li className="flex gap-4">
                <Link className="hover:text-blue-500 hover:underline flex gap-2" href="https://github.com/ohayouarmaan/proton" target={"_blank"}>
                 🎯 Check it out: <Github color="blue" />    
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 grid-rows-2 grid-cols-1 md:w-[unset] w-[80%] md:grid-rows-1 gap-4">
            <Image
              src="/proton-logo.webp"
              alt="Proton VM Logo"
              width={500}
              height={500}
              className="rounded-lg object-cover h-50 w-10 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
            />
            <Image
              src="/proton-vm-instructions.png"
              alt="Instruction Example"
              width={500}
              height={500}
              className="rounded-lg object-cover h-50 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Flamingo: a Scripting language with simple Syntax and a simple standard library
            Planning to compile this into QASM for faster execution
          </p>
            <ul className="text-neutral-800 pb-4">
              <li>
                🎯 Function Call Stack
              </li>
              <li>
                🎯 Structs implementation
              </li>
              <li>
                🎯 It's own Garbage Collector
              </li>
              <li>
                🎯 PRATT Parser
              </li>
              <li>
                🎯 Tree recursion interpretation
              </li>
              <li className="flex gap-4">
                <Link className="hover:text-blue-500 hover:underline flex gap-2" href="https://github.com/ohayouarmaan/flamingo" target={"_blank"}>
                 🎯 Check it out: <Github color="blue" />    
                </Link>
              </li>
            </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/flamingo.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/flamingo-syntax.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Yazu: An open source Rust based JSON Formatter 30% faster than Prettier
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Custom JSON Parser
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ 30% Faster than Prettier
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ A Custom transpiler which converts minified JSON to prettified JSON
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ A web based UI / interactive CLI to transpile minified / non-formatted JSON
            </div>
            <div className="flex gap-4">
              <Link className="hover:text-blue-500 text-neutral-700 hover:underline flex gap-2" href="https://github.com/ohayouarmaan/yazu" target={"_blank"}>
               🎯 Check it out: <Github color="blue" />    
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Yazu.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/yazu-example.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
