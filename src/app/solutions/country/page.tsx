import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <section className="lg:px-[60px] px-[20px] overflow-hidden bg-[#FCFBF5] lg:pt-[200px] pt-[100px]">
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
                                                <p className="lg:text-[2.8vw] text-[6vw] lg:leading-[3vw] leading-[7vw] lg:pt-[20px] pt-[10px] text-[#000]  font-[bo]">Country Pavilion Exhibition Booth</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 ">Dazzle Exhibitions & Events specializes in manufacturing country pavilion booths throughout India. We offer a vast selection of impeccable country pavilion booths with captivating design and ample space to elegantly display your brand at any event. Using state-of-the-art technology at our facility, we craft these booths to be a harmonious mix of artistry and modern design.</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] m-0 pt-4">More Details about this Service. 👇</p>
                                        </div>
                                    </div>
                                </div>
                                <Image className=" mb-4" src="/image/36.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#FCFBF5] text-[#000] lg:pt-[80px] pt-[10px] lg:pb-[100px] pb-[40px] ">
                <div className="row items-center">
                    <div className="col-lg-8">
                        <p className="lg:text-[2.2vw] text-[5vw] lg:leading-[3vw] leading-[6vw]  font-[sb]">Why Country Pavilion Stands?</p>

                        <div className="col-lg-10 lg:pb-[0px] pb-[30px]">
                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">Country pavilion displays showcase the culture, religion, and way of life of a nation. It includes a collection of smaller exhibition stands where businesses can showcase their brand alongside fellow exhibitors. We initiate the process of creating country pavilion booth designs by garnering a clear understanding of our client&apos;s specifications and business goals.</p>

                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] ">At Dazzle Exhibitions & Events, we specialize in designing and building impeccable country pavilion stands, providing the perfect opportunity to showcase your brand, products, or activities. We work closely with you to develop a unique concept, theme, and design, and our expertise is in creating large-scale, impressive structures that include spaces for hospitality, catering, and private meetings. Each country pavilion booth comes with a dedicated exhibitor brochure that includes your profile, logo, and contact information, which you can use for promoting your brand.</p>

                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] lg:pb-[20px] pb-[10px]">Designing a country pavilion stand is a delicate task that demands meticulous attention to detail and prudent planning. We specialize in designing unique and modern country pavilion exhibits. Utilizing simple 3D-letter volumes, we create dynamic and informative displays that showcase the best of the represented country and its exhibitors. With over 10-12 years of experience in the exhibition industry, we stay up-to-date on the latest trends and know how to build exhibits that instill confidence in visitors. Check out some sample for design ideas and inspiration. For any future exhibiting plans, don't hesitate to contact us directly.</p>

                            <button className="border !border-[#000] rounded-5 py-1.5 px-1 bg-[#000]">
                                <div className="flex gap-2 items-center">
                                    <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] uppercase text-[#fff] lg:pl-3 pl-2">GET FREE QUOTATION</p>
                                    <Image className="lg:w-8 w-5" src="/image/whitearrow.svg" alt="logo" width={1830} height={750} />
                                </div>
                            </button>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">

                            <Image className=" mb-4" src="/image/37.png" alt="logo" width={1830} height={750} />

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

