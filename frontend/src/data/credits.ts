export const creditsData = {
    heading: "Credits.",
    subheading: "Resource Allocation Monitor",
    description: "Monitoring real-time computational expenditure and system unit balance for the Nexus Protocol.",
    metrics: [
        { label: "Uptime", value: "99.998%", type: "Activity" },
        { label: "Sync Latency", value: "14ms", type: "Zap" },
        { label: "Protocol", value: "SECURE_v4", type: "ShieldCheck" }
    ],
    usageHistory: [
        { id: "TX-9281", type: "Inference", model: "Gemma 4.0", amount: "-120 Units", time: "2026.04.11 12:45" },
        { id: "TX-9275", type: "Training", model: "Core Calibration", amount: "-500 Units", time: "2026.04.11 09:12" },
        { id: "TX-9260", type: "Inference", model: "Gemma 4.0", amount: "-45 Units", time: "2026.04.10 22:30" },
        { id: "SYS-001", type: "Daily Grant", model: "System", amount: "+1000 Units", time: "2026.04.10 00:00" },
    ],
    tier: {
        label: "Intelligence Tier",
        value: "Alpha Protocol"
    },
    refreshRate: "Daily Refresh Rate: +1,000 Units / 24h"
};
