import Image from "next/image";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CountUp from "../components/countup";

export default function Home() {
    return (
        <>
            <Header />

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#FCFBF5] lg:pt-[180px] pt-[100px] lg:pb-[20px] pb-[20px] ">

                <div className="row">
                    <div className="lg:flex   lg:pb-[70px] pb-[30px]" >
                        <div className="col-lg-8 ">
                            <div className="col-lg-6 ">
                                <p className="lg:text-[1.3vw] text-[3.5vw] lg:leading-[2.3vw] leading-[4.5vw] lg:pt-[0px] pt-[10px] text-[#000] ">About Our Company</p>
                                <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] text-[#000]  font-[bo]">Welcome to dazzle Exhibitions and events since 2010</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] text-[#000] lg:pt-[100px] pt-[10px]">We take your ideas and concepts and turn them into tangible realities. Our process begins with concept development, then moves on to our creative department for designing, creating, and building the stand. </p>
                            <button className="border !border-[#fff]  bg-black rounded-5 py-1.5 px-3">
                                <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] text-white ">Contact Us</p>
                            </button>
                        </div>
                    </div>
                </div>



            </section>

            <section className=" overflow-hidden bg-[#FCFBF5] ">
                <div className="row p-0 m-0 ">
                    <div className="relative w-full p-0 m-0 ">
                        <Image className="h-full object-cover w-full absolute " src="/image/Vector.png" alt="logo" width={1830} height={750} />
                        <div className="relative  top-[0px]  z-10 ">

                            <div className="lg:px-[60px] px-[20px]">
                                <Image className="" src="/image/16.png" alt="logo" width={1830} height={750} />

                                <div className="row  justify-center lg:pt-[60px] pt-[40px]  ">
                                    <div className="col-lg-3 col-6  pb-4">
                                        <div className="flex items-center gap-2 text-[#141414]">
                                            <CountUp to={200} duration={3} separator=","
                                                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]"
                                            />
                                            <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]">+</span>
                                        </div>

                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[me] lg:pt-[10px] pt-[10px] uppercase text-[#545353]">Client&apos;s</p>

                                    </div>

                                    <div className="col-lg-3 col-6  pb-4 ">
                                        <div className="flex lg:justify-center gap-2">
                                            <CountUp to={1} duration={1} separator=","
                                                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]"
                                            />
                                            <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]">K+</span>
                                        </div>

                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[me] lg:pt-[10px] pt-[10px] uppercase text-[#545353] lg:text-center">Projects</p>

                                    </div>

                                    <div className="col-lg-3  col-6  pb-4 ">
                                        <div className="flex lg:justify-center ">

                                            <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]">0</span>
                                            <CountUp to={7} duration={3} separator=","
                                                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]"
                                            />
                                        </div>

                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[me] lg:pt-[10px] pt-[10px] uppercase text-[#545353] lg:text-center">CONTINENTS</p>

                                    </div>

                                    <div className="col-lg-3  col-6  pb-4 ">
                                        <div className="flex lg:justify-end gap-2">
                                            <CountUp to={500} duration={2} separator=","
                                                className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]"
                                            />
                                            <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]">+</span>
                                        </div>

                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[me] lg:pt-[10px] pt-[10px] uppercase text-[#545353] lg:text-end lg:pr-10">EXHIBITIONS</p>

                                    </div>
                                </div>

                                <div className="row items-center lg:pb-[80px] pb-[20px]">

                                    <div className="col-lg-6 ">
                                        <div className="lg:pb-[80px] pb-[30px] lg:pt-[30px] pt-[10px]">
                                            <p className="lg:text-[1.1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw] text-[#000]  ">We take your ideas and concepts and turn them into tangible realities. Our process begins with concept development, then moves on to our creative department for designing, creating, and building the stand. Our team utilizes the latest technology and quality standards to exceed expectations. With over 12 years of experience providing exhibition stand services in India, we are dedicated to revolutionizing the way you present your business through trade shows, product launches, fairs, and exhibitions. We are a true partner in the exhibition industry, offering a wide range of services including Custom-designed booths, Mezzanine, Modular-designed booths, Portable Stands and Country Pavilions.</p>
                                            <p className="lg:text-[1.1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw] text-[#000]  lg:pt-[20px] pt-[10px]">Dazzle Exhibitions & Events is a top-notch company in Ghaziabad, Uttar Pradesh, India that specializes in designing, building, and managing tradeshow booths. From initial design to final construction, we offer comprehensive tradeshow booth services and handle all aspects of booth management. As an experienced exhibition stand builder in India, we provide end-to-end solutions for our clients' exhibition needs. If exhibiting with the most creative and exclusive exhibition stands in India is your motive, you can rely on us since we acquire an in-house production facility that eases the exhibition process while ensuring quality work.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 ">
                                        <Image className="" src="/image/17.png" alt="logo" width={1830} height={750} />
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="lg:px-[60px] px-[20px] overflow-hidden bg-[#F2F4F7] lg:pt-[60px] pt-[10px] lg:pb-[60px] pb-[10px]">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-5 text-center">
                                <div className="flex items-center gap-3 justify-center">
                                    <Image className="lg:w-5 w-3" src="/image/Icon.svg" alt="logo" width={1830} height={750} />
                                    <p className="lg:text-[1.1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw]  m-0 text-[#707070]">Our History</p>
                                </div>
                                <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] text-[#000] lg:pt-[10px] pt-[10px] font-[bo]">A legacy of trust and growth</p>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] text-[#000] lg:pt-[10px] pt-[10px]">From a small vision to a trusted real estate partner, our journey has been defined by dedication, growth, and client success.</p>
                            </div>
                        </div>

                        <div className="row lg:pt-[80px] pt-[10px] lg:pb-[20px] pb-[10px]">
                            <div className="col-lg-3">
                                <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] text-[#000] lg:pt-[10px] pt-[10px] ">2010</p>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] text-[#000] lg:pt-[10px] pt-[10px] uppercase">Founded</p>

                            </div>
                            <div className="col-lg-3">
                                <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] text-[#000] lg:pt-[10px] pt-[10px] ">2015</p>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] text-[#000] lg:pt-[10px] pt-[10px] uppercase">Building Reputation</p>
                            </div>
                            <div className="col-lg-3">
                                <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] text-[#000] lg:pt-[10px] pt-[10px] ">2020</p>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] text-[#000] lg:pt-[10px] pt-[10px] uppercase">Expanding Horizons</p>
                            </div>
                            <div className="col-lg-3">
                                <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] text-[#000] lg:pt-[10px] pt-[10px] ">2025</p>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] text-[#000] lg:pt-[10px] pt-[10px] uppercase">Leading Today</p>
                            </div>
                        </div>

                        <Image className="w-full" src="/image/lineh.png" alt="logo" width={1830} height={750} />


                    </div>
                </div>

            </section>

            <section className="  overflow-hidden bg-[#121212] lg:pt-[60px] pt-[10px]  ">
                <div className="row">
                    <div className="lg:flex items-center" >
                        <div className="col-lg-7 ">
                            <Image src="/image/b1.png" alt="logo" width={1830} height={750} />
                        </div>
                        <div className="lg:px-[60px] px-[20px] col-lg-5">
                            <div className="flex lg:justify-end">
                                <div className="col-lg-10">
                                    <p className="lg:text-[1.1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw] text-[#fff] font-[sb]">OUR MISSION</p>
                                    <p className="lg:text-[1.1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw] text-[#fff] lg:pt-[20px] pt-[10px]lg:pb-[20px] pb-[10px]">To craft exhibition experiences that seamlessly blend creativity and functionality, elevating the presence of every brand we collaborate with. At Dazzle Exhibitions & Events, we push the boundaries of stand design, embracing innovation and sustainability to create lasting impressions at every event we undertake.</p>
                                    <Image className="w-40" src="/image/Karan Adlakha.svg" alt="Karan Adlakha" width={1830} height={750} />
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] text-[#878585] m-0 pt-3 uppercase">CEO, Dazzle exhibitions </p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] text-[#878585] uppercase">and events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="  overflow-hidden bg-[#fff] lg:pt-[60px] pt-[10px]  ">
                <div className="row">
                    <div className="lg:flex items-center" >
                        <div className="lg:px-[60px] px-[20px] col-lg-7 ">

                            <div className="col-lg-7">
                                <p className="lg:text-[1.1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw] text-[#000] font-[sb]">OUR VISION</p>
                                <p className="lg:text-[1.1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw] text-[#000] lg:pt-[15px] pt-[10px]lg:pb-[20px] pb-[10px]">We envision a world where exhibitions go beyond displays — becoming powerful experiences that inspire, engage, and connect people across industries and cultures. At Dazzle Exhibitions & Events, our vision is to redefine global exhibition design by blending creativity, innovation, and sustainability, leaving a lasting impression on every brand we showcase and every audience we engage.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <Image src="/image/b2.png" alt="logo" width={1830} height={750} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#121212] text-[#fff] lg:pt-[80px] pt-[10px] lg:pb-[100px] pb-[40px] ">


                <div className="col-lg-4">
                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] uppercase ">Brand Collaborations</p>
                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw]  uppercase font-[bo]">Esteemed Clients over the Years</p>
                </div>
                <div className="col-lg-3">
                    <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  ">We're honored to have partnered with these reputable organizations on impactful events projects through the decades.</p>
                </div>


                <div className="row lg:pt-[60px] pt-[10px]">
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/01.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/02.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/03.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/04.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/05.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/06.svg" alt="logo" width={1830} height={750} />
                    </div>
                </div>

                <div className="row lg:pt-[30px] pt-[10px]">
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/07.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/08.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/09.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/010.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/011.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/012.svg" alt="logo" width={1830} height={750} />
                    </div>
                </div>

                <div className="row lg:pt-[30px] pt-[10px]">
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/013.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/014.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/015.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/016.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/017.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/018.svg" alt="logo" width={1830} height={750} />
                    </div>
                </div>

                <div className="row lg:pt-[30px] pt-[10px]">
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/019.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/020.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/021.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/022.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/023.svg" alt="logo" width={1830} height={750} />
                    </div>
                    <div className="col-lg-2 mb-4">
                        <Image src="/image/024.svg" alt="logo" width={1830} height={750} />
                    </div>
                </div>


            </section>

            <Footer />

        </>
    );
}
