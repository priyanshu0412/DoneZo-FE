"use client"
import { amd } from "@/asset";
import React, { useState } from "react";

// ---------------------------------------------

const HomeContactUsPage = () => {

    const [sent, setSent] = useState(false);

    return (
        <div className="w-full flex justify-center items-center py-16 min-h-[80vh] bg-sixthColor">
            <div className="max-w-[1200px] w-full mx-auto flex flex-col xl:flex-row gap-14 px-8 xl:px-0">
                {/* Left: Form Card */}
                <div className="flex-1 bg-white/90 rounded-3xl shadow-2xl border border-gray-200 p-8 sm:p-10 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-gray-500 mb-8 text-lg">
                        We'd love to hear from you! Just fill out the form and our team will be in touch within 24 hours.
                    </p>
                    {sent ? (
                        <div className="p-6 bg-green-50 text-green-800 rounded-xl text-center font-semibold">
                            ✅ Message sent! Thank you for reaching out.
                        </div>
                    ) : (
                        <form
                            className="flex flex-col gap-6"
                            onSubmit={e => {
                                e.preventDefault();
                                setSent(true);
                            }}
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name<sup className="text-rose-500">*</sup>
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 font-medium"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email<sup className="text-rose-500">*</sup>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 font-medium"
                                    placeholder="you@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message<sup className="text-rose-500">*</sup>
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 font-medium resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-2 py-3 bg-teal-600 text-white font-bold rounded-xl shadow hover:bg-teal-700 active:bg-teal-800 transition text-lg"
                            >
                                Send message
                            </button>
                        </form>
                    )}
                    {/* Optional: mini privacy/disclaimer note */}
                    <p className="text-xs text-gray-400 mt-6 text-center">
                        Note: We respect your privacy. Your details are safe and never shared.
                    </p>
                </div>

                {/* Right: Contact Info Card */}
                <div className="flex-1 flex flex-col gap-8 justify-center items-center xl:items-start rounded-3xl shadow-lg border p-10 min-h-[440px]"
                    style={{
                        backgroundImage: `url(${amd.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                    <div>
                        <h2 className="text-3xl font-semibold text-white mb-3">
                            Other Ways to Reach Us
                        </h2>
                        <div className="text-white font-medium space-y-2">
                            <div>
                                <span className="font-bold text-gray-700">Email:</span>{" "}
                                <a href="mailto:hello@yourcompany.com" className="hover:text-teal-600 transition">
                                    hello@yourcompany.com
                                </a>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700">Phone:</span>{" "}
                                <a href="tel:+911234567890" className="hover:text-teal-600 transition">
                                    +91-1234567890
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs text-white mt-2">
                        Note: For urgent support, prefer email or call during office hours.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContactUsPage;
