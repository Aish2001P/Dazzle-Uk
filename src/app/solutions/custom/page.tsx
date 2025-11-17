import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <section className="lg:px-[60px] px-[20px] overflow-hidden bg-[#FCFBF5] lg:pt-[200px] pt-[90px]">
                <div className="row  ">

                    <div className="lg:px-[60px] px-[20px]  lg:pb-[60px] pb-[20px]">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="lg:pb-[50px] pb-[20px]">

                                    <div className=" lg:pb-[50px] pb-[20px]">
                                        <div className="flex items-center gap-4 ">

                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] m-0 p-0  ">SOLUTIONS</p>
                                        <p className="border !border-[#DCDCDC] w-full p-0 m-0 "></p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="col-lg-8">
                                                <p className="lg:text-[2.8vw] text-[6vw] lg:leading-[3vw] leading-[7vw] lg:pt-[20px] pt-[10px] text-[#000]  font-[bo]">Custom Exhibition Stands</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 ">Dazzle Exhibitions & Events is a premier provider of custom exhibition stands, offering the finest bespoke solutions for all types of businesses. We have worked with top brands and companies of all sizes to create stunning displays that effectively represent their brand and products. If you're in need of a bespoke exhibition stand that showcases your business in a professional way, look no further. At Dazzle Exhibitions & Events, we specialize in combining exceptional design with expert project management to deliver top-notch custom-built exhibition stands. </p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] m-0 pt-4">More Details about this Service. 👇</p>
                                        </div>
                                    </div>
                                </div>
                                <Image className=" mb-4" src="/image/24.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#FCFBF5] text-[#000] lg:pt-[80px] pt-[10px] lg:pb-[100px] pb-[40px] ">
                <div className="row items-center">
                    <div className="col-lg-8">
                        <p className="lg:text-[2.2vw] text-[5vw] lg:leading-[3vw] leading-[6vw]  font-[sb]">Why Custom Exhibition Stands?</p>

                        <div className="col-lg-10 lg:pb-[0px] pb-[30px]">
                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">We pride ourselves on being able to handle projects of any size and complexity, from small stands to large-scale exhibits. Your unique needs and brand identity are at the forefront of our proposal, and we work closely with you to meet all of your specifications. Our custom approach is truly tailored to your individual requirements. Whether you're looking to promote your services or showcase new products, custom exhibit booths offer limitless possibilities. Our custom exhibition stands are designed to complement and enhance your corporate branding.</p>

                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] ">We at Dazzle Exhibitions & Events manufacture all of our exhibition stands to the highest standards and specifications, enabling you to save a lot of money on your exhibition costs. We specialize in creating custom exhibit booths that effectively engage audiences. With our comprehensive capabilities, we deliver top-notch custom exhibition stands. From design to construction, all aspects of creating custom trade show exhibits are handled in-house by our skilled team. We will design and build unique custom trade show displays that will make your brand stand out and be functional.</p>

                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] lg:pb-[20px] pb-[10px]">From concept development to design ideas, all the way through to the final construction of custom trade show exhibits or displays, the entire process is carried out with the utmost precision. We specialize in providing our clients with an immaculate range of custom trade show displays throughout the entire country of India. Because we have all end-to-end capabilities in-house, we are capable of delivering custom exhibition stands that are of high quality and one-of-a-kind. We would be glad to provide you with more information on custom exhibition stands by speaking to one of our team members.</p>

                            <button className="border !border-[#000] rounded-5 py-1.5 px-3 bg-[#000]">
                                <div className="flex gap-2 items-center">
                                    <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] uppercase text-[#fff] ">GET FREE QUOTATION</p>
                                    <Image className="lg:w-8 w-5" src="/image/whitearrow.svg" alt="logo" width={1830} height={750} />
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">

                            <Image className=" mb-4" src="/image/25.png" alt="logo" width={1830} height={750} />

                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[60px] px-[20px] overflow-hidden bg-[#FCFBF5] ">
                <div className="row p-0 m-0 ">
                   
                            <div className="lg:px-[60px] px-[20px] lg:pt-[60px] pt-[60px] lg:pb-[60px] pb-[40px]">
                                <div className="row">

                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/26.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/27.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/28.png" alt="logo" width={1830} height={750} />
                                    </div>

                                </div>

                                <div className="row lg:pt-[30px] pt-[10px]">

                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/29.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/30.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="col-lg-4">
                                        <Image className="mb-4" src="/image/31.png" alt="logo" width={1830} height={750} />
                                    </div>

                                </div>
                            </div>
                        </div>

                    
            </section>


            <Footer />
        </>
    );
}
