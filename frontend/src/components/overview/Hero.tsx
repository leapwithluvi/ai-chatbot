import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h4 className="text-xl font-semibold tracking-tight mb-4 text-gray-300 pb-6">
        LeapAI
      </h4>

      <h1 className="font-extrabold text-balance mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Welcome to my AI chatbot project, powered by Ollama Gemma 2B
      </h1>

      <p className="leading-7 max-w-xl sm:max-w-2xl mb-8">
        This lightweight yet powerful AI model enables fast, smart, and
        practical conversations, helping users get answers, explore ideas, and
        boost productivity effortlessly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Button internal */}
        <Button
          asChild
          className="bg-white text-black hover:bg-gray-200 transition"
        >
          <a href="/">Try It Now</a>
        </Button>

        {/* Button eksternal */}
        <Button
          asChild
          className="bg-white text-black hover:bg-gray-200 transition"
        >
          <a
            href="https://ollama.com/library/gemma:2b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ollama Gemma 2B
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
