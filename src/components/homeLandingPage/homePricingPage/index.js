"use client"
import React from "react";

// --------------------------------------

const plans = [
    {
        title: "Individuals",
        price: "$0",
        period: "per month/user",
        description: "Good for individuals who are just starting out and simply want the essentials.",
        button: "Get started",
        features: [
            "1 user",
            "Unlimited calendars",
            "Unlimited event types",
            "Workflows",
            "Integrate with your favorite apps",
            "Accept payments via Stripe",
        ],
        bg: "bg-gradient-to-br from-white via-blue-50 to-gray-50",
        border: "border border-blue-200",
        shadow: "shadow-xl",
        note: "Note: Perfect for personal use & freelancers.",
        accent: "text-blue-700",
    },
    {
        title: "Teams",
        price: "$12",
        period: "per month/user",
        description: "Highly recommended for small teams who seek to upgrade their time & performance.",
        button: "Get started",
        features: [
            "1 team",
            "Schedule meetings as a team",
            "Round-Robin, Fixed Round-Robin",
            "Collective Events",
            "Advanced Routing Forms",
            "Team Workflows",
        ],
        bg: "bg-gradient-to-br from-white via-indigo-50 to-blue-100",
        border: "border-[2.5px] border-indigo-500",
        shadow: "shadow-2xl",
        note: "Note: For startups & fast-growing teams.",
        accent: "text-indigo-800",
    },
    {
        title: "Enterprise",
        price: "$15k",
        period: "per year",
        description: "Robust scheduling for larger teams looking to have more control, privacy & security.",
        button: "Contact us",
        features: [
            "1 parent team and unlimited sub-teams",
            "Organization workflows",
            "Insights – analyze your booking data",
            "Active directory sync",
            "24/7 Email, Chat and Phone support",
            "Sync your HRIS tools",
        ],
        bg: "bg-gradient-to-br from-white via-green-50 to-gray-50",
        border: "border-2 border-green-500",
        shadow: "shadow-xl",
        note: "Note: Tailored for big organizations. Custom onboarding.",
        accent: "text-green-900",
    },
];

// -----------------------------------------

const HomePricingPage = () => {
    return (
        <>
            <div className="w-full flex justify-center py-16 bg-[#1F2937]">
                <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row gap-9 px-8 xl:px-0">
                    {plans.map((plan, idx) => (
                        <div
                            key={plan.title}
                            className={`
            ${plan.bg} ${plan.border} ${plan.shadow}
            flex-1 rounded-3xl backdrop-blur-md bg-opacity-80 border-opacity-80
            flex flex-col relative overflow-hidden
            ring-1 ring-black/5
            hover:scale-[1.03] hover:shadow-3xl
            transition duration-300 ease-in-out`}
                            style={{ minWidth: 0 }}
                        >
                            {/* Card Accent Bar */}
                            <div className={`absolute h-1 w-full rounded-t-3xl left-0 top-0 ${idx === 0 ? 'bg-blue-400' : idx === 1 ? 'bg-indigo-500' : 'bg-green-500'}`} />
                            <div className="p-9 flex flex-col flex-1 relative">
                                <span className={`text-lg font-semibold mb-2 ${plan.accent}`}>{plan.title}</span>
                                <div className="flex items-end gap-2 mb-3">
                                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                                    <span className="text-gray-400 text-base mb-1">{plan.period}</span>
                                </div>
                                <p className="mb-6 text-gray-600 text-base">{plan.description}</p>
                                <button
                                    className={`w-full py-3 font-semibold rounded-xl shadow-md transition-all duration-200 mb-8 text-lg 
                ${idx === 1
                                            ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                            : idx === 2
                                                ? "bg-green-500 text-white hover:bg-green-600"
                                                : "bg-blue-50 text-blue-900 hover:bg-blue-100"}`}
                                >
                                    {plan.button}
                                </button>
                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-500 text-sm pb-1">
                                        {idx === 0
                                            ? "Free, forever"
                                            : idx === 1
                                                ? "Free plan features, plus:"
                                                : "Organization plan features, plus:"}
                                    </span>
                                    {plan.features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-2 pl-1">
                                            <span className="mt-1 text-green-500 text-lg">✓</span>
                                            <span className="text-gray-700 text-[15px]">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-dashed border-gray-200 text-xs text-gray-500 mt-8">
                                    {plan.note}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default HomePricingPage;
