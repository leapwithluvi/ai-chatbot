import { Terminal, Shield, Cpu, Zap, Globe } from "lucide-react";

export const docSections = [
    { 
        id: "intro", 
        title: "Introduction", 
        icon: Terminal,
        heading: "System Overview",
        tagline: "Nexus is an advanced, high-integrity intelligence interface built to showcase a production-grade orchestration between a specialized frontend and a robust backend infrastructure.",
        description: "This project was developed to demonstrate how AI technologies (Gemma 4.0) can be integrated into high-stakes enterprise environments that prioritize security and scalability. The primary focus is not just on chat functionality, but on the architectural layers that protect it.",
        links: [
            { id: "01", title: "Architectural_Core", desc: "Deep dive into the NestJS + Next.js orchestration and database strategy.", targetId: "architecture" },
            { id: "02", title: "Security_Shield", desc: "Understanding the protocols that ensure data integrity and system stability.", targetId: "security" }
        ]
    },
    { 
        id: "architecture", 
        title: "Architecture", 
        icon: Cpu,
        heading: "Technical Foundations",
        stackLabel: "The Golden Stack",
        stackDesc: "Nexus utilizes an architecture that strictly enforces Separation of Concerns. Next.js handles Server-Side Rendering for maximum performance and SEO, while NestJS acts as a highly-structured backend logic layer.",
        stack: [
            { label: "Frontend", title: "Next.js 15", desc: "Edge-Ready Interface & Streaming UI." },
            { label: "Backend", title: "NestJS (TS)", desc: "Modular API Architecture & Validation." },
            { label: "Storage", title: "PostgreSQL", desc: "Relational Data & Prisma ORM." }
        ],
        zones: [
            {
                id: "Zone_01",
                title: "Frontend_Infiltration",
                items: [
                    { icon: Globe, title: "Client_Browser", desc: "Next.js 15 Client-Side Application." },
                    { icon: Shield, title: "Auth_Middleware", desc: "Session Validation & Route Guarding.", highlight: true }
                ]
            },
            {
                id: "Zone_02",
                title: "NestJS_Neural_Orchestra",
                core: {
                    label: "Core_API_Unit",
                    guards: ["JWT_Guard", "Zod_Validation_Pipe", "Rate_Limiter"],
                    services: [
                        { icon: Terminal, title: "Chat_Service", desc: "Logic processing, prompt wrapping, and history aggregation." },
                        { icon: Cpu, title: "AI_Inference_Wrapper", desc: "Managing streaming chunks and SSE connection stability." }
                    ]
                }
            },
            {
                id: "Zone_03",
                title: "External_Data_&_Inference",
                gateways: [
                    { icon: Zap, title: "PostgreSQL_Storage", color: "bg-blue-500", desc: "Persisting interaction logs via Prisma ORM for cold-storage and history retrieval." },
                    { icon: Cpu, title: "Gemma_4.0_API_Core", color: "bg-emerald-500", desc: "Executing heavy cognitive tasks and returning tokenized response streams." }
                ]
            }
        ],
        dbStrategyLabel: "Database Strategy",
        dbStrategyDesc: "We chose PostgreSQL to ensure atomicity and consistency in conversation data. By implementing optimized indexing on `chat_id` and `user_id` fields, Nexus achieves history retrieval latency of sub-10ms across thousands of records."
    },
    {
        id: "setup",
        title: "Installation",
        icon: Zap,
        heading: "System Deployment",
        subheading: "Follow these protocols to successfully initialize and deploy the Nexus core in your local environment.",
        phases: [
            { 
                id: "Phase_01", 
                title: "Infrastructure_Initialization",
                steps: [
                    { label: "01. Clone Neural Repository", code: "git clone https://github.com/leapwithluvi/nexus-neural-orchestrator.git", color: "text-emerald-500" },
                    { label: "02. Install Dependencies", code: "npm install" }
                ]
            },
            {
                id: "Phase_02",
                title: "Neural_Configuration",
                envVars: [
                    { key: "DATABASE_URL", type: "PostgreSQL", desc: "Prisma connection string for persistence." },
                    { key: "GEMMA_API_KEY", type: "External_API", desc: "Authorization key for Google neural core." },
                    { key: "JWT_SECRET", type: "Security", desc: "Cryptographic key for operator auth." }
                ]
            },
            {
                id: "Phase_03",
                title: "Operational_Execution",
                commands: [
                    { label: "Development_Mode", code: "npm run dev", subtext: "Hot-reload active. Neural bridge unstable.", isMain: true },
                    { label: "Production_Build", code: "npm run build && npm start", subtext: "Optimized chunks. High-integrity protocol.", isMain: false }
                ]
            }
        ],
        requirements: [
            { label: "Runtime_Node", value: "v18.0.0+" },
            { label: "DB_Instance", value: "PostgreSQL_14" },
            { label: "Neural_Core", value: "Gemma_4.0_Flash" }
        ]
    },
    {
        id: "security",
        title: "Security",
        icon: Shield,
        heading: "Integrity Protocols",
        protocols: [
            { id: "01", title: "Rate Limiting", desc: "Prevents Brute Force and DoS attacks by restricting the number of requests per operator using a Sliding Window strategy." },
            { id: "02", title: "Data Sanitization", desc: "Every user input is parsed and sanitized to prevent XSS (Cross-Site Scripting) and Prompt Injection before being processed by the AI core.", italic: true },
            { id: "03", title: "JWT Authentication", desc: "Utilizes asymmetrically signed JSON Web Tokens to ensure only validated operators can establish a connection with the neural infrastructure." },
            { id: "04", title: "CORS Enforcement", desc: "Restricts API access exclusively to official Nexus domains to mitigate cross-origin exploitation from unauthorized third-party sources.", italic: true }
        ],
        footerNote: "Our security model is designed to be proactive, not reactive. Data sovereignty is not a feature, it is a requirement."
    }
];
