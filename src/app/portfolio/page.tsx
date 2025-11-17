"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer"

const images = [

    { src: "/image/i1.svg", className: "md:col-span-3 md:row-span-3" },
    { src: "/image/i2.svg", className: "" },
    { src: "/image/i3.svg", className: "md:row-span-2" },
    { src: "/image/i4.svg", className: "md:row-span-2" },
    { src: "/image/i5.svg", className: "" },


    { src: "/image/i6.svg", className: "md:row-span-2" },
    { src: "/image/i7.svg", className: "md:col-span-3 md:row-span-3" },
    { src: "/image/i8.svg", className: "" },
    { src: "/image/i9.svg", className: "md:row-span-2" },
    { src: "/image/i10.svg", className: "" },

    { src: "/image/i11.svg", className: "md:col-span-3 md:row-span-3" },
    { src: "/image/i12.svg", className: "" },
    { src: "/image/i13.svg", className: "md:row-span-2" },
    { src: "/image/i14.svg", className: "md:row-span-2" },
    { src: "/image/i15.svg", className: "" },

     { src: "/image/i16.svg", className: "md:row-span-2" },
    { src: "/image/i17.svg", className: "md:col-span-3 md:row-span-3" },
    { src: "/image/i18.svg", className: "" },
    { src: "/image/i19.svg", className: "md:row-span-2" },
    { src: "/image/i20.svg", className: "" },

    { src: "/image/i21.svg", className: "md:col-span-3 md:row-span-3" },
    { src: "/image/i22.svg", className: "" },
    { src: "/image/i23.svg", className: "md:row-span-2" },
    { src: "/image/i24.svg", className: "md:row-span-2" },
    { src: "/image/i25.svg", className: "" },

     { src: "/image/i26.svg", className: "md:row-span-2" },
    { src: "/image/i27.svg", className: "md:col-span-3 md:row-span-3" },
    { src: "/image/i28.svg", className: "" },
    { src: "/image/i29.svg", className: "md:row-span-2" },
    { src: "/image/i30.svg", className: "" },

    { src: "/image/i31.svg", className: "md:col-span-3 md:row-span-3" },
    { src: "/image/i32.svg", className: "" },
    { src: "/image/i33.svg", className: "md:row-span-2" },
    { src: "/image/i34.svg", className: "md:row-span-2" },
    { src: "/image/i35.svg", className: "" },

     { src: "/image/i36.svg", className: "md:row-span-2" },
    { src: "/image/i37.svg", className: "md:col-span-3 md:row-span-3" },
    { src: "/image/i38.svg", className: "" },
    { src: "/image/i39.svg", className: "md:row-span-2" },
    { src: "/image/i40.svg", className: "" },

    { src: "/image/i41.svg", className: "md:col-span-3 md:row-span-3" },
    { src: "/image/i42.svg", className: "" },
    { src: "/image/i43.svg", className: "md:row-span-2" },
    { src: "/image/i44.svg", className: "md:row-span-2" },
    { src: "/image/i45.svg", className: "" },
];

export default function GalleryPage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const handlePrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(
                selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
            );
        }
    };

    return (
<>
        <Header />
        <div className=" bg-[#FCFBF5] py-20 px-4 md:px-16 lg:pt-[180px] pt-[90px] lg:pb-[60px] pb-[40px]">

            <div className="flex justify-center lg:pb-[40px] pb-[20px]">
             <div className="col-lg-5">
             <p className="lg:text-[2.8vw] text-[6vw] lg:leading-[3vw] leading-[7vw] lg:pt-[0px] pt-[10px] text-[#000] text-center font-[bo]">Our Portfolio</p>
             <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] lg:pb-[20px] pb-[20px] text-center">Our creations are our source of pride and joy. They shape our identity, drive us forward, and empower us to take risks, trust our instincts, and remain dedicated to our clients' brand and principles. Viewing our portfolio will give you a sense of our work.</p>
             </div>
             </div>

            {/* === Masonry Grid === */}
            <div
                className="
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
    auto-rows-[200px] gap-4
  "
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`
        relative overflow-hidden rounded-lg shadow cursor-pointer hover:scale-[1.03] transition-transform duration-300
        ${img.className} 
        col-span-1 row-span-1
        sm:${img.className} 
      `}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <Image
                            src={img.src}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            className="object-cover w-full"
                        />
                    </div>
                ))}
            </div>



            {/* === Lightbox Popup === */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-5 right-5 text-white"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X size={32} />
                        </button>

                        {/* Left Arrow */}
                        <button
                            className="absolute left-5 text-white bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
                            onClick={handlePrev}
                        >
                            <ChevronLeft size={36} />
                        </button>

                        {/* Large Image */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex justify-center items-center"
                        >
                            <Image
                                src={images[selectedIndex].src}
                                alt={`Large Image ${selectedIndex + 1}`}
                                width={1000}
                                height={800}
                                className="object-contain rounded-lg"
                                priority
                            />
                        </motion.div>

                        {/* Right Arrow */}
                        <button
                            className="absolute right-5 text-white bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
                            onClick={handleNext}
                        >
                            <ChevronRight size={36} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        <Footer />
        </>
    );
}


