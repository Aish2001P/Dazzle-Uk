import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./components/header";
import Card from "./components/changing-cards";
import CountUp from './components/countup';
import Footer from "../app/components/footer";



export default function Home() {
  return (
    <>
      <Header />
      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#FCFBF5] lg:pt-[150px] pt-[120px] lg:pb-[60px] pb-[40px]  ">

        <div className="row">
          <div className="col-lg-12">
            <div className="lg:flex items-center  lg:pb-[50px] pb-[30px]" >
              <div className="col-lg-6">
                <div className="col-lg-8">
                  <p className="lg:text-[2.5vw] text-[5.5vw] lg:leading-[3vw] leading-[6vw]  font-[bo]">We blend art & science
                    to create  Exhibitions & events magic.</p>
                </div>
                <div className="col-lg-7">
                  <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[0px] pt-[5px] lg:pb-[10px] pb-[0px] text-[#707070]">We've built our reputation by taking even the boldest visions and making them achievable realities </p>
                  <button className="border !border-[#000] rounded-5 py-1.5 px-3">
                    <div className="flex gap-2 items-center">
                      <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] ">GET IN TOUCH</p>
                      <Image className="lg:w-8 w-5" src="/image/arrow.svg" alt="logo" width={1830} height={750} />
                    </div>
                  </button>
                </div>
              </div>

              <div className="col-lg-6 lg:pt-[0px] pt-[20px] ">

                <Image src="/image/1.png" alt="logo" width={1830} height={750} />
              </div>
            </div>


          </div>
        </div>

      </section>

      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#FCFBF5] lg:pt-[40px] pt-[10px] lg:pb-[90px] pb-[40px] ">

        <div className="row">
          <div className="col-lg-7 ">
            <div className="flex lg:gap-3 gap-2 items-center">
              <Image className="lg:w-5 w-3" src="/image/snow.svg" alt="logo" width={1830} height={750} />
              <p className="lg:text-[1.2vw] text-[4vw] lg:leading-[2vw] leading-[4vw] text-[#707070] m-0 font-[sb]" >About</p>
            </div>
            <div className="col-lg-8 lg:pt-[20px] pt-[15px] ">
              <p className="lg:text-[2.5vw] text-[5.5vw] lg:leading-[3vw] leading-[6vw]  font-[bo]">Transforming Ideas Into Unforgettable Event Experiences</p>
            </div>
          </div>
          <div className="col-lg-5 flex items-end lg:justify-end">
            <div className="flex lg:justify-end">
              <div className="col-lg-12 col-12  pb-4 ">
                <div className="flex items-center gap-2 text-[#141414]">
                  <CountUp to={30} duration={3} separator=","
                    className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]"
                  />
                  <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]">+</span>
                </div>
                <p className="lg:text-[1vw] text-[4vw] lg:leading-[2vw] leading-[5vw]  text-[#545353]">years of experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7 ">
            <div className="flex justify-end lg:pt-[30px] pt-[5px]">
              <div className="col-lg-7 ">
                <Image className="" src="/image/2.png" alt="logo" width={1830} height={750} />
              </div>
            </div>

            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] lg:pt-[100px] pt-[30px] text-[#565656] ">We always strive to provide the premium quality material and solutions for best exhibition booth design and thus ensure that our services are visually appealing and have a strong foundation and structure that can endure sudden weather conditions or any other unforeseen glitches. Moreover, the team of our dedicated project managers ensure that the individual design of the exhibition stand becomes a reality for a first-class experience for our eminent clients and their target customers. Our team will design to budget, working within your deadlines, creating the perfect sales environment for your team and your business.</p>

            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[15px] pt-[10px] text-[#565656]">Dazzle Exhibitions & Events is a globally recognized brand delivering customized and innovative exhibition stand design and fabrication services. As a leading exhibition stand design and build company, we offer superior-quality materials, creative designs, and end-to-end solutions for exhibitions worldwide.</p>

            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[15px] pt-[10px] text-[#565656]">Our expert designers understand your business goals to craft stands that attract attention and deliver measurable results. From concept to installation, we provide a complete one-stop solution for exhibition design, fabrication, branding, and project management.</p>

            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[15px] pt-[10px] text-[#565656]">With extensive experience in exhibition booth design, project management, and branding, Dazzle Exhibitions & Events ensures your presence stands out and supports your business objectives—making us your trusted partner for global exhibition success.</p>

            <p className="lg:text-[1vw] text-[3.5vw] lg:leading-[2vw] leading-[4.5vw]  lg:pt-[15px] pt-[10px] underline font-[sb]">Ready to Boom Events? Let&apos;s talk</p>
          </div>

          <div className="col-lg-5 ">
            <Image className="lg:pt-[30px] pt-[10px]" src="/image/3.png" alt="logo" width={1830} height={750} />
          </div>
        </div >

      </section >

      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#121212] text-[#fff] lg:pt-[90px] pt-[40px] lg:pb-[80px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="flex lg:gap-3 gap-2 items-center">
              <Image className="lg:w-5 w-3" src="/image/whitesnow.svg" alt="logo" width={1830} height={750} />
              <p className="lg:text-[1.2vw] text-[3.5vw] lg:leading-[2vw] leading-[4vw]  m-0 font-[sb]" >Numbers</p>
            </div>
            <div className="col-lg-7 lg:pt-[20px] pt-[20px] ">
              <p className="lg:text-[2.5vw] text-[5.5vw] lg:leading-[3vw] leading-[6vw]  font-[bo]">Numbers that speak for themselves.</p>
              <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[15px] pt-[0px] ">Our work goes beyond beautiful events — it&apos;s about delivering results our clients can see and feel.</p>
              <button className="border !border-[#fff] rounded-5 py-1.5 px-3">
                <div className="flex gap-2 items-center">
                  <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] ">READ MORE</p>
                  <Image className="lg:w-8 w-5" src="/image/whitearrow.svg" alt="logo" width={1830} height={750} />
                </div>
              </button>
            </div>
          </div>
          <div className="col-lg-6 ">
            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw]  lg:pt-[60px] pt-[20px] ">Dazzle Exhibitions & Events is one of the best exhibition stand builders in India, specializing in custom, modular, country pavilion, and double-decker exhibition stands. With over 10 years of experience, we provide end-to-end services including design, fabrication, installation, dismantling, storage, and logistics — all tailored to your brand guidelines and objectives.</p>

            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw]  lg:pt-[10px] pt-[10px] ">Our expert team ensures every stand is meticulously planned, visually impactful, and delivered on time. From concept to completion, we handle every detail, ensuring a smooth and stress-free exhibiting experience.</p>

            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.8vw] leading-[4vw]  lg:pt-[10px] pt-[10px] ">Based in Sahibabad, Ghaziabad, we serve both domestic and international clients, offering innovative, space-efficient, and cost-effective exhibition stand solutions that enhance visitor engagement and brand presence.</p>

            <div className="row  justify-center lg:pt-[70px] pt-[40px] lg:pb-[20px] pb-[10px] ">
              <div className="col-lg-6 col-6  pb-4">
                <div className="flex items-center gap-2 text-[#fff]">
                  <CountUp to={200} duration={3} separator=","
                    className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]"
                  />
                  <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]">+</span>
                </div>

                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] lg:pt-[10px] pt-[10px]  ">client&apos;s</p>

              </div>

              <div className="col-lg-6 col-6  pb-4 ">
                <div className="flex lg:justify-center gap-2">
                  <CountUp to={1} duration={1} separator=","
                    className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]"
                  />
                  <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]">K+</span>
                </div>

                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] lg:pt-[10px] pt-[10px]   lg:text-center">projects</p>

              </div>
            </div>

            <div className="row">
              <div className="col-lg-6  col-6  pb-4 ">
                <div className="flex  ">

                  <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]">0</span>
                  <CountUp to={7} duration={3} separator=","
                    className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]"
                  />
                </div>

                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] lg:pt-[10px] pt-[10px]   ">continents</p>

              </div>

              <div className="col-lg-6  col-6  pb-4  ">
                <div className="flex lg:justify-center gap-2">
                  <CountUp to={500} duration={2} separator=","
                    className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]"
                  />
                  <span className="lg:text-[2.8vw] text-[6vw] lg:leading-[3.8vw] leading-[7vw] font-[bo]">+</span>
                </div>

                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] lg:pt-[10px] pt-[10px]   lg:text-center lg:pr-10">exhibitions</p>

              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="lg:px-[60px] px-[20px]  overflow-hidden  bg-[#FCFBF5] text-[#121212] lg:pt-[90px] pt-[30px] lg:pb-[80px] pb-[40px] ">

        <div className="row">
          <div className="lg:flex   lg:pb-[70px] pb-[30px]" >
            <div className="col-lg-7 ">
              <div className="flex lg:gap-3 gap-2 items-center">
              <Image className="lg:w-5 w-3" src="/image/snow.svg" alt="logo" width={1830} height={750} />
              <p className="lg:text-[1.2vw] text-[4vw] lg:leading-[2vw] leading-[4vw] text-[#707070] m-0 font-[sb]" >Our Expertise</p>
            </div>
            </div>

            <div className="col-lg-5">
              <p className="lg:text-[2vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw]  font-[bo] ">Expert Exhibition Stand Designers & Global Booth Fabrication Specialists</p>
              <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw]  lg:pt-[10px] pt-[10px]">We design and build innovative exhibition stands that make your brand stand out. With global production facilities and expert craftsmanship, Dazzle Exhibitions & Events delivers seamless exhibition experiences worldwide.</p>
            </div>


          </div>
        </div>
        <Card />
        <Image className="lg:pt-[80px] pt-[20px] " src="/image/9.png" alt="logo" width={1830} height={750} />

      </section>

      <section className="lg:px-[60px] px-[20px]   bg-[#FCFBF5] lg:pt-[40px] pt-[30px] lg:pb-[60px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-12">
            <div className=" lg:pb-[50px] pb-[20px]" >
              <div className="col-lg-5 ">
                <div className="col-lg-9 ">
                  <p className="lg:text-[1.2vw] text-[4vw] lg:leading-[2.3vw] leading-[5vw]  font-[sb]">Our Work Process</p>
                  <p className="lg:text-[2vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw]  font-[sb]">Dazzle is here to guide you through every step of your exhibition journey.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12">

              <hr className="border !border-[#9A9A9A]"></hr>
              <div className="bg-[#FCFBF5]  mb-4">
                <div className="flex items-center">
                  <div className="col-lg-3 col-1  flex justify-center  items-center">
                    <p className="text-[#707070] font-[bo]  lg:text-[2vw] text-[7vw] lg:leading-[3vw] leading-[8vw]">01</p>
                  </div>
                  <div className="col-lg-7 col-7">
                    <div className="col-lg-9 ">
                      <div className="p-4  ">
                        <div className="flex gap-2">
                          <Image className="w-6 " src="/image/1.svg" alt="logo" width={1830} height={1830} />
                          <p className="m-0 lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] uppercase">Brief</p>
                        </div>
                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-[#595959] lg:pt-[20px] pt-[10] " >We listen and gather as much information as possible from the clients. We thoroughly research and investigate different concepts to understand the business goal.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-3">
                    <Image src="/image/10.png" alt="logo" width={1830} height={750} />
                  </div>
                </div>
              </div>
              <hr className="border !border-[#9A9A9A]"></hr>

<hr className="border !border-[#9A9A9A]"></hr>
              <div className="bg-[#FCFBF5]  mb-4">
                <div className="flex items-center">
                  <div className="col-lg-3 col-1  flex justify-center  items-center">
                    <p className="text-[#707070] font-[bo]  lg:text-[2vw] text-[7vw] lg:leading-[3vw] leading-[8vw]">02</p>
                  </div>
                  <div className="col-lg-7 col-7">
                    <div className="col-lg-9 ">
                      <div className="p-4  ">
                        <div className="flex gap-2">
                          <Image className="w-6 " src="/image/2.svg" alt="logo" width={1830} height={1830} />
                          <p className="m-0 lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] uppercase">3D Visuals</p>
                        </div>
                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-[#595959] lg:pt-[20px] pt-[10] " >We create multiple 3D visuals on the basis of your brief, budget and our suggestion. Our team are well versed in 3D graphic design.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-3">
                    <Image src="/image/11.png" alt="logo" width={1830} height={750} />
                  </div>
                </div>
              </div>
              <hr className="border !border-[#9A9A9A]"></hr>

              <hr className="border !border-[#9A9A9A]"></hr>
              <div className="bg-[#FCFBF5]  mb-4">
                <div className="flex items-center">
                  <div className="col-lg-3 col-1  flex justify-center  items-center">
                    <p className="text-[#707070] font-[bo]  lg:text-[2vw] text-[7vw] lg:leading-[3vw] leading-[8vw]">03</p>
                  </div>
                  <div className="col-lg-7 col-7">
                    <div className="col-lg-9 ">
                      <div className="p-4  ">
                        <div className="flex gap-2">
                          <Image className="w-6 " src="/image/3.svg" alt="logo" width={1830} height={1830} />
                          <p className="m-0 lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] uppercase">Feedback</p>
                        </div>
                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-[#595959] lg:pt-[20px] pt-[10] " >We involve our clients throughout the process and are able to take their feedback and optimise our ideas to create a defining concept for the stand.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-3">
                    <Image src="/image/12.png" alt="logo" width={1830} height={750} />
                  </div>
                </div>
              </div>
              <hr className="border !border-[#9A9A9A]"></hr>

              <hr className="border !border-[#9A9A9A]"></hr>
              <div className="bg-[#FCFBF5]  mb-4">
                <div className="flex items-center">
                  <div className="col-lg-3 col-1  flex justify-center  items-center">
                    <p className="text-[#707070] font-[bo]  lg:text-[2vw] text-[7vw] lg:leading-[3vw] leading-[8vw]">04</p>
                  </div>
                  <div className="col-lg-7 col-7">
                    <div className="col-lg-9 ">
                      <div className="p-4  ">
                        <div className="flex gap-2">
                          <Image className="w-6 " src="/image/4.svg" alt="logo" width={1830} height={1830} />
                          <p className="m-0 lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] uppercase">Build & Install</p>
                        </div>
                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-[#595959] lg:pt-[20px] pt-[10] " >After final approval of 3D booth design, we take the entire responsibility of the booth executed like the building and installation of a booth.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-3">
                    <Image src="/image/13.png" alt="logo" width={1830} height={750} />
                  </div>
                </div>
              </div>
              <hr className="border !border-[#9A9A9A]"></hr>

              <hr className="border !border-[#9A9A9A]"></hr>
              <div className="bg-[#FCFBF5]  mb-4">
                <div className="flex items-center">
                  <div className="col-lg-3 col-1  flex justify-center  items-center">
                    <p className="text-[#707070] font-[bo]  lg:text-[2vw] text-[7vw] lg:leading-[3vw] leading-[8vw]">05</p>
                  </div>
                  <div className="col-lg-7 col-7">
                    <div className="col-lg-9 ">
                      <div className="p-4  ">
                        <div className="flex gap-2">
                          <Image className="w-6 " src="/image/5.svg" alt="logo" width={1830} height={1830} />
                          <p className="m-0 lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] uppercase">Onsite Supervision</p>
                        </div>
                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-[#595959] lg:pt-[20px] pt-[10] " >Our team will take care of any unforeseen circumstances to create an unparalleled on-site experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-3">
                    <Image src="/image/14.png" alt="logo" width={1830} height={750} />
                  </div>
                </div>
              </div>
              <hr className="border !border-[#9A9A9A]"></hr>

              <hr className="border !border-[#9A9A9A]"></hr>
              <div className="bg-[#FCFBF5]  mb-4">
                <div className="flex items-center">
                  <div className="col-lg-3 col-1  flex justify-center  items-center">
                    <p className="text-[#707070] font-[bo]  lg:text-[2vw] text-[7vw] lg:leading-[3vw] leading-[8vw]">06</p>
                  </div>
                  <div className="col-lg-7 col-7">
                    <div className="col-lg-9 ">
                      <div className="p-4  ">
                        <div className="flex gap-2">
                          <Image className="w-6 " src="/image/6.svg" alt="logo" width={1830} height={1830} />
                          <p className="m-0 lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[4vw] font-[sb] uppercase">Dismantle & Storage</p>
                        </div>
                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-[#595959] lg:pt-[20px] pt-[10] " >After the successful completion of the show, our team will dismantle and store your trade show booth for your future use as required.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-3">
                    <Image src="/image/15.png" alt="logo" width={1830} height={750} />
                  </div>
                </div>
              </div>
              <hr className="border !border-[#9A9A9A]"></hr>

            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-[60px] px-[20px]  overflow-hidden bg-[#FFF] lg:pt-[60px] pt-[30px] lg:pb-[60px] pb-[40px] ">
        <div className="row">
          <div className="col-lg-12">
            <div className="lg:flex items-center  lg:pb-[50px] pb-[30px]" >
              <div className="col-lg-5">
                <div className="col-lg-9 ">
                  <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] uppercase m-0">Brand Collaborations</p>
                  <p className="lg:text-[1.3vw] text-[4vw] lg:leading-[2.3vw] leading-[5vw] uppercase font-[sb]">Esteemed Clients over the Years</p>
                  <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.4vw] leading-[4vw] ">We're honored to have partnered with these reputable organizations on impactful events projects through the decades.</p>

                  <div className="col-lg-12 lg:pt-[60px] pt-[10px]">
                    <div className="row marquee-anim ">
                      <div className="flex  lg:gap-16 gap-10 items-center">
                        <Image src="/image/m1.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m2.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m3.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m4.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m5.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m6.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m7.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m8.svg" alt="logo" width={1830} height={750} />

                        <Image src="/image/m1.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m2.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m3.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m4.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m5.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m6.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m7.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m8.svg" alt="logo" width={1830} height={750} />

                        <Image src="/image/m1.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m2.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m3.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m4.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m5.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m6.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m7.svg" alt="logo" width={1830} height={750} />
                        <Image src="/image/m8.svg" alt="logo" width={1830} height={750} />
                      </div>
                    </div>
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
