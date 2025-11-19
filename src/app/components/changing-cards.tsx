"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const stands = [
  {
    id: 1,
    num :"01",
    title: "Mezzanine - Double Decker Stands",
    description:
      "Dazzle Exhibitions & Events is a leading double decker exhibition stand design and build company, offering innovative and efficient solutions for trade shows and exhibitions worldwide. Our custom double decker stands are designed for easy installation, smart space utilization, and maximum visual impact. By expanding your display area, these multi-level stands enhance brand visibility, create premium meeting spaces, and elevate your product showcase at any event.",
    img: "/image/4.png",
  },
  {
    id: 2,
    num :"02",
    title: "Modular Stands",
    description:
      "Dazzle Exhibitions & Events specializes in designing modular exhibition stands, offering a wide variety of options. From small, self-assembly displays to larger, structural designs, we have a solution to fit any need. Our team will work with you to customize a stand that meets your specific business requirements.",
    img: "/image/5.png",
  },
  {
    id: 3,
    num :"03",
    title: "Custom Stands",
    description:
      "Dazzle Exhibitions & Events is a premier provider of custom exhibition stands, offering the finest bespoke solutions for all types of businesses. We have worked with top brands and companies of all sizes to create stunning displays that effectively represent their brand and products. If you're in need of a bespoke exhibition stand that showcases your business in a professional way, look no further. At Dazzle Exhibitions & Events, we specialize in combining exceptional design with expert project management to deliver top-notch custom-built exhibition stands.",
    img: "/image/7.png",
  },
  {
    id: 4,
    num :"04",
    title: "Portable Stands",
    description:
      "Dazzle Exhibitions & Events specializes in designing, building, and manufacturing portable exhibition stands for various events such as exhibitions, tradeshows, brand activations, and conferences. Their products include banner stands, mountable screens, and fabric displays that provide a modern aesthetic and help maximize a company's presence at an event while being cost-effective.",
    img: "/image/6.png",
  },
  {
    id: 5,
    num :"05",
    title: "Country Pavilion",
    description:
      "Dazzle Exhibitions & Events specializes in manufacturing country pavilion booths throughout India. We offer a vast selection of impeccable country pavilion booths with captivating design and ample space to elegantly display your brand at any event. Using state-of-the-art technology at our facility, we craft these booths to be a harmonious mix of artistry and modern design.",
    img: "/image/8.png",
  },
];

export default function StandTabs() {
  const [activeTab, setActiveTab] = useState(stands[0].id);

  const activeStand = stands.find((s) => s.id === activeTab)!;

  return (
    <section className="bg-[#FCFBF5] text-[#121212] ">
      {/* Tabs */}
      <div className="flex flex-wrap lg:gap-25 gap-10 border-b !border-gray-600 pb-4">
        {stands.map((stand) => (
          <button
            key={stand.id}
            onClick={() => setActiveTab(stand.id)}
            className={`!uppercase text-sm font-semibold tracking-wide relative transition-colors ${activeTab === stand.id ? "text-gray-500" : "text-gray-800 hover:text-gray-500"
              }`}
          >
            {stand.title.split("|")[0].trim()}
            {activeTab === stand.id && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-black"
              />
            )}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="mt-10 bg-[#FCFBF5] border">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStand.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="lg:flex  items-center"
          >
            <div className="col-lg-6 p-8">
              <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] text-[#000] lg:pb-[30px] pb-[10px]">{activeStand.num}</p>
              <h2 className="lg:text-[2vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw]  font-[bo] mb-4 ">{activeStand.title}</h2>
              <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] font-[me] leading-[4vw] text-[#000] lg:pb-[20px] pb-[10px] mb-8">{activeStand.description}</p>
              <button className="border border-black rounded-5 py-1.5 px-1">
                <div className="flex gap-2 items-center">
                  <p className="m-0 lg:text-[0.8vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] lg:pl-3 pl-2">LEARN MORE</p>
                  <Image className="lg:w-8 w-5" src="/image/arrow.svg" alt="logo" width={1830} height={750} />
                </div>
              </button>
            </div>

            {/* w-full h-[300px] md:h-[400px] */}

            <div className="col-lg-6 relative flex justify-end p-4">
              <div className="col-lg-10 ">
                <Image
                  src={activeStand.img}
                  alt={activeStand.title}
                  width={1830} height={750}
                  className="object-cover "
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
