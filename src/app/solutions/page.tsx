import Image from "next/image";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
    return (
        <>
            <Header />

            <section className="lg:px-[60px] px-[20px] overflow-hidden bg-[#FCFBF5] ">
                <div className="row  ">
                    <div className="lg:px-[60px] px-[20px] lg:pb-[30px] pb-[20px] lg:pt-[180px] pt-[50px]">
                        <div className="col-lg-12">
                            <div className="lg:pb-[50px] pb-[20px]">

                                <div className=" lg:pb-[50px] pb-[20px]">
                                    {/* <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] m-0 "><tr className="border-2 !border-[#c9c8c8]">WHAT WE DO</tr></p> */}
                                    <div className="flex items-center gap-4 ">
                                        <div className="col-lg-1">
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] m-0 p-0  ">WHAT WE DO</p>
                                        </div>
                                        <div className="col-lg-11">
                                            <p className="border !border-[#DCDCDC] w-full p-0 m-0 "></p>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <p className="lg:text-[2.8vw] text-[6vw] lg:leading-[3vw] leading-[7vw] lg:pt-[0px] pt-[10px] text-[#000]  font-[bo]">Our Services</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] m-0 ">At Dazzle, we offer a range of premium architectural and design services tailored to meet your unique needs. </p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] m-0 pt-4">Check out all Services. 👇 </p>
                                    </div>
                                </div>
                            </div>



                            <div className="row items-center lg:pt-[30px] pt-[20px] lg:pb-[30px] pb-[20px] hover:bg-black  hover:text-white p-4 ">
                                <div className="col-lg-7">
                                    <div className="col-lg-8 lg:pt-[0px] pt-[30px] lg:pb-[0px] pb-[30px]">
                                        <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw]  font-[bo]">Custom Exhibition Stands</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px]">Dazzle Exhibitions & Events is a premier provider of custom exhibition stands, offering the finest bespoke solutions for all types of businesses. We have worked with top brands and companies of all sizes to create stunning displays that effectively represent their brand and products.</p>
                                        <button className="border !border-[#000] hover:border-[#fff] rounded-5 py-1.5 px-3">
                                            <div className="flex gap-2 items-center">
                                                <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] uppercase">LEARN MORE</p>
                                                <Image className="lg:w-8 w-5" src="/image/arrow.svg" alt="logo" width={1830} height={750} />
                                            </div>
                                        </button>
                                    </div>

                                </div>
                                <div className="col-lg-5">
                                    <Image src="/image/18.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>



                            <div className="row items-center lg:pt-[30px] pt-[20px] lg:pb-[30px] pb-[20px] hover:bg-black  hover:text-white p-4">
                                <div className="col-lg-7">
                                    <div className="col-lg-8 lg:pt-[0px] pt-[30px] lg:pb-[0px] pb-[30px]">
                                        <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw]  font-[bo]">Modular Exhibition Stands</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px]">Dazzle Exhibitions & Events specializes in designing modular exhibition stands, offering a wide variety of options. From small, self-assembly displays to larger, structural designs, we have a solution to fit any need. Our team will work with you to customize a stand that meets your specific business requirements.</p>
                                        <button className="border !border-[#000] rounded-5 py-1.5 px-3">
                                            <div className="flex gap-2">
                                                <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] uppercase">LEARN MORE</p>
                                                <Image className="lg:w-8 w-5" src="/image/arrow.svg" alt="logo" width={1830} height={750} />
                                            </div>
                                        </button>
                                    </div>

                                </div>
                                <div className="col-lg-5">
                                    <Image src="/image/19.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>



                            <div className="row items-center lg:pt-[30px] pt-[20px] lg:pb-[30px] pb-[20px] hover:bg-black  hover:text-white p-4">
                                <div className="col-lg-7">
                                    <div className="col-lg-8 lg:pt-[0px] pt-[30px] lg:pb-[0px] pb-[30px]">
                                        <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw]  font-[bo]">Double Decker Exhibition Stands</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px]">Dazzle Exhibitions & Events is the premier provider of double decker exhibition stands. Our designs are simple and efficient in planning and construction, allowing for quick installation and an attractive addition to your exhibit space. Not only do our double decker exhibition stands expand your display area, but also offer increased opportunities for branding and product promotion.</p>
                                        <button className="border !border-[#000] rounded-5 py-1.5 px-3">
                                            <div className="flex gap-2">
                                                <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] uppercase">LEARN MORE</p>
                                                <Image className="lg:w-8 w-5" src="/image/arrow.svg" alt="logo" width={1830} height={750} />
                                            </div>
                                        </button>
                                    </div>

                                </div>
                                <div className="col-lg-5">
                                    <Image src="/image/20.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>



                            <div className="row items-center lg:pt-[30px] pt-[20px] lg:pb-[30px] pb-[20px] hover:bg-black  hover:text-white p-4">
                                <div className="col-lg-7">
                                    <div className="col-lg-8 lg:pt-[0px] pt-[30px] lg:pb-[0px] pb-[30px]">
                                        <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw]  font-[bo]">Country Pavilion Exhibition Booth</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px]">Dazzle Exhibitions & Events specializes in manufacturing country pavilion booths throughout India. We offer a vast selection of impeccable country pavilion booths with captivating design and ample space to elegantly display your brand at any event.</p>
                                        <button className="border !border-[#000] rounded-5 py-1.5 px-3">
                                            <div className="flex gap-2">
                                                <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] uppercase">LEARN MORE</p>
                                                <Image className="lg:w-8 w-5" src="/image/arrow.svg" alt="logo" width={1830} height={750} />
                                            </div>
                                        </button>
                                    </div>

                                </div>
                                <div className="col-lg-5">
                                    <Image src="/image/21.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>



                            <div className="row items-center lg:pt-[30px] pt-[20px] lg:pb-[30px] pb-[20px] hover:bg-black  hover:text-white p-4">
                                <div className="col-lg-7">
                                    <div className="col-lg-8 lg:pt-[0px] pt-[30px] lg:pb-[0px] pb-[30px]">
                                        <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw]  font-[bo]">Portable Display Stands</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px]">Dazzle Exhibitions & Events specializes in designing, building, and manufacturing portable exhibition stands for various events such as exhibitions, tradeshows, brand activations, and conferences. Their products include banner stands, mountable screens, and fabric displays that provide a modern aesthetic and help maximize a company's presence at an event while being cost-effective.</p>
                                        <button className="border !border-[#000] rounded-5 py-1.5 px-3">
                                            <div className="flex gap-2">
                                                <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] uppercase">LEARN MORE</p>
                                                <Image className="lg:w-8 w-5" src="/image/arrow.svg" alt="logo" width={1830} height={750} />
                                            </div>
                                        </button>
                                    </div>

                                </div>
                                <div className="col-lg-5">
                                    <Image src="/image/22.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </section>

            <section className=" overflow-hidden bg-white ">
                <div className="row p-0 m-0 ">
                    <div className="relative w-full p-0 m-0 ">
                        <Image className="h-full object-cover w-full absolute " src="/image/23.png" alt="logo" width={1830} height={750} />
                        <div className="relative  top-[0px]   z-10 ">

                            <div className="flex justify-center lg:pb-[120px] pb-[10px]">
                                <div className="col-lg-6">
                                    <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3vw] leading-[7vw] lg:pt-[120px] pt-[10px]  text-[#fff]  text-center"> We are always open to collaboration and happy to welcome new projects.</p>
                                    <div className="flex justify-center">
                                        <button className="border border-[#fff] rounded-5 py-1.5 px-3 ">
                                            <div className="flex gap-2 items-center">
                                                <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] uppercase text-white">LEARN MORE</p>
                                                <Image className="lg:w-8 w-5" src="/image/whitearrow.svg" alt="logo" width={1830} height={750} />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
}