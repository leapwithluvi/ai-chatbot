import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="px-6 py-20 max-w-5xl mx-auto text-center">
      {/* About Gemma 2B */}
      <Card className="bg-gray-900 text-white shadow-lg mb-10">
        <CardContent>
          <CardTitle className="text-3xl font-bold mb-4">
            About Gemma 2B
          </CardTitle>
          <p className="leading-7 text-gray-300">
            Gemma 2B by Ollama is a lightweight yet powerful AI model designed
            for fast, intelligent, and practical conversations. It excels at
            understanding questions, generating helpful answers, and supporting
            creative tasks, making it perfect for web-based chatbots and
            interactive demos.
          </p>
        </CardContent>
      </Card>

      {/* About Project */}
      <Card className="bg-gray-900 text-white shadow-lg">
        <CardContent>
          <CardTitle className="text-3xl font-bold mb-4">
            About the Project
          </CardTitle>
          <p className="leading-7 text-gray-300">
            This AI chatbot project is part of my personal{" "}
            <strong>portfolio</strong>. Built using Gemma 2B, it demonstrates my
            skills in AI integration, web development, and interactive design.
            Users can experience intelligent, real-time conversations directly
            in the browser, exploring how AI can assist with questions, ideas,
            and productivity.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
