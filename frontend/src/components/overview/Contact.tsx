import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 py-20 max-w-4xl mx-auto text-center text-white"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-8">
        Interested in my projects or want to collaborate? Feel free to reach
        out!
      </p>
      <div className="flex justify-center gap-8">
        <a
          href="https://github.com/leapwithluvi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-gray-400 transition"
        >
          <Github size={32} />
          <span className="mt-2 text-sm">GitHub</span>
        </a>
        <a
          href="mailto:itsluvi13@example.com"
          className="flex flex-col items-center hover:text-gray-400 transition"
        >
          <Mail size={32} />
          <span className="mt-2 text-sm">Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/luviaprilyansyahgabriel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-gray-400 transition"
        >
          <Linkedin size={32} />
          <span className="mt-2 text-sm">LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
