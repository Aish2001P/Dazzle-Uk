"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    { year: "2010", top: "Founded", bottom: "Started with a simple mission: to make real Expo Events stand for, accessible, and client-focused." },
    { year: "2015", top: "Building Reputation", bottom: "Earned trust through successful transactions and expanded services in international and national expos." },
    { year: "2020", top: "Expanding Horizons", bottom: "Reached 250+ closed deals and introduced specialized support for investors and luxury buyers for the clients." },
    { year: "2025", top: "Leading Today", bottom: "With $150M+ in sales and 500+ clients served, we stand as a trusted partner in every Expo and events journey." },
];

export default function Timeline() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const lineFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={sectionRef} className="w-full">

            {/* DESKTOP HORIZONTAL TIMELINE */}
             <div className="hidden md:block h-[200vh] relative">
                <div className="sticky top-40 w-full">

                    {/* TEXT ABOVE TIMELINE */}
                     <div className="flex justify-between w-[80%] mx-auto mb-6">
                        {steps.map((s, i) => (
                            <div key={i} className="text-center w-1/4">
                                 <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] text-[#000] lg:pt-[10px] pt-[10px] ">{s.year}</p>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] text-[#000]  uppercase">{s.top}</p>
                            </div>
                        ))}
                    </div>
                      


                    {/* TIMELINE */}
                    <div className="flex justify-center w-full">
                        <div className="relative w-[80%]"> 

                            {/* Grey Base Line */}
                             <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-300 rounded-full -translate-y-1/2"></div> 

                            {/* Animated Fill Line */}
                             <motion.div
                                className="absolute left-0 top-1/2 h-1 bg-[#FFA800] rounded-full -translate-y-1/2"
                                style={{ width: lineFill }}
                                transition={{ duration: 0.4 }}
                            /> 

                            {/* DOTS */}
                             <div className="flex justify-between items-center w-full relative">
                                {steps.map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-6 h-6 bg-white border-4 border-gray-300 rounded-full z-10"
                                        style={{
                                            borderColor: useTransform(
                                                scrollYProgress,
                                                [i / steps.length, (i + 1) / steps.length],
                                                ["gray", "orange"]
                                            ),
                                        }}
                                    ></motion.div>
                                ))}
                            </div>
                        </div>
                    </div> 

                    {/* TEXT BELOW TIMELINE */}
                     <div className="flex justify-between w-[80%] mx-auto mt-6">
                        {steps.map((s, i) => (
                            <div key={i} className="text-center w-1/4">
                                <div className="flex justify-center">
                                <div className="col-lg-9">
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] text-[#000]  ">{s.bottom}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>  




            {/* MOBILE VERTICAL TIMELINE */}
            <div className="md:hidden w-full relative mt-10">

                {/* LEFT VERTICAL LINE */}
                <div className="absolute left-4 top-0 h-full w-1 bg-gray-300"></div>

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        className="relative flex items-start mb-12 w-full"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* DOT */}
                        <div className="z-10 w-6 h-6 bg-[#FFA800] rounded-full border-4 border-white shadow absolute left-2"></div>

                        {/* TEXT */}
                        <div className="ml-12">
                            {/* TOP TEXT */}
                            <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[3vw] leading-[6vw] text-[#000] lg:pt-[10px] pt-[10px] ">{step.year}</p>
                            <p className="lg:text-[0.9vw] text-[3.5vw] lg:leading-[1.4vw] leading-[4vw] text-[#000]  uppercase">{step.top}</p>

                            {/* BOTTOM TEXT */}
                            <p className="lg:text-[0.9vw] text-[3.3vw] lg:leading-[1.4vw] leading-[4vw] text-gray-600 text-sm mt-1 text-left">
                                {step.bottom}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}



