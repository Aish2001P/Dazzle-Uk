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
                                                <p className="lg:text-[2.8vw] text-[6vw] lg:leading-[3vw] leading-[7vw] lg:pt-[20px] pt-[10px] text-[#000]  font-[bo]">Portable Display Stands</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 ">Dazzle Exhibitions & Events specializes in designing, building, and manufacturing portable exhibition stands for various events such as exhibitions, tradeshows, brand activations, and conferences. Their products include banner stands, mountable screens, and fabric displays that provide a modern aesthetic and help maximize a company's presence at an event while being cost-effective.</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] m-0 pt-4">More Details about this Service. 👇</p>
                                        </div>
                                    </div>
                                </div>
                                <Image className=" mb-4" src="/image/38.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#FCFBF5] text-[#000] lg:pt-[80px] pt-[10px] lg:pb-[100px] pb-[40px] ">
                <div className="row items-center">
                    <div className="col-lg-8">
                        <p className="lg:text-[2.2vw] text-[5vw] lg:leading-[3vw] leading-[6vw]  font-[sb]">Why Portable Exhibition Stands?</p>

                        <div className="col-lg-10 lg:pb-[0px] pb-[30px]">
                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">Dazzle Exhibitions & Events specializes in creating portable exhibition stands that are both visually appealing and functional. Their offerings include banner stands, digital engagement screens, and fabric displays, all designed to enhance the modern aesthetic. With their portable exhibition booth services, they aim to add value to a variety of events and spaces, including exhibitions, trade shows, brand activations and conferences. The company's portable exhibition display is an affordable and effective way to increase your visibility and impact at any event.</p>

                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] ">At Dazzle Exhibitions & Events, we have the perfect portable exhibition booth solution for any event, whether it's a new product launch or exhibiting in a shell scheme space. Our team will work closely with you to bring your vision to life, while staying true to your company's brand guidelines and incorporating creative elements. We offers portable displays that are ideal for do-it-yourself exhibitors due to their ease of use and convenience. Our portable exhibition booth effectively communicates your brand's key message and attracts a high volume of visitors during exhibitions. We have a proven track record of delivering high-quality portable exhibition stands for various projects. Whether you need a completely new design or want to revamp an existing one, we guarantee the best artwork for your portable exhibition stand.</p>

                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px] lg:pb-[20px] pb-[10px]">At Dazzle Exhibitions & Events, we take pride in producing and finishing all artwork at our in-house manufacturing unit to ensure the highest quality standards. They are lightweight, designed for easy setup and breakdown, and have low shipping costs. Our pop-up displays are among the best in the market, with a reputation for high-quality and durability. We offer a comprehensive solution for all your exhibition needs, from design to setup. If you're looking for something unique or require assistance with portable exhibition displays, our experts will have the best solution for you. We strive to make the process as seamless and stress-free as possible for our clients. Contact our experienced team to access any information you may need regarding portable exhibition booths.</p>

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

                            <Image className=" mb-4" src="/image/39.png" alt="logo" width={1830} height={750} />

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




