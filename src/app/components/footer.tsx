import React from 'react';
import Image from 'next/image';
import Form from './form';
import MarqueeDemo from './marqueee';
import Link from 'next/link';

const footer = () => {
  return (
    <>
      <section className="lg:px-[60px] px-[20px] overflow-hidden   bg-[#FCFBF5]">
        <div className="  lg:pb-[30px] pb-[20px] lg:pt-[80px] pt-[30px]">

          <div className="col-lg-4">
            <p className="lg:text-[3vw] text-[5.5vw] lg:leading-[3vw] leading-[6vw] uppercase font-[bo]">Ready to Elevate Your Game?</p>
          </div>
          <div className="col-lg-3 lg:pb-[50px] pb-[20px]">
            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] lg:pt-[0px] pt-[5px] lg:pb-[10px] pb-[0px] text-[#707070]">Become a member now and start your journey  toward mastering the perfect swing!</p>
            <button className="border !border-[#000] rounded-5 py-1.5 px-3">
              <div className="flex gap-2 items-center">
                <p className="m-0 lg:text-[0.7vw] text-[2.8vw] lg:leading-[1.2vw] leading-[4vw] font-[sb] ">GET IN TOUCH</p>
                <Image className="lg:w-8 w-5" src="/image/arrow.svg" alt="logo" width={1830} height={750} />
              </div>
            </button>
          </div>

          <hr className='border-2 border-[#707070]'></hr>

          <div className="row lg:pt-[50px] pt-[20px]">
            <div className="col-lg-5 text-black ">
              <div className="flex lg:gap-20  gap-8">
                <p className=" lg:text-[0.8vw] text-[3vw]">PHONE</p>
                <p className=" lg:text-[0.8vw] text-[3vw]">(+91) 9310072038</p>
              </div>
              <div className=" flex lg:gap-18 gap-8
                       lg:pt-[30px] pt-[10px]">
                <p className=" lg:text-[0.8vw] text-[3vw]">VISIT US</p>
                <div className="">
                  <p className=" lg:text-[0.8vw] text-[3vw]">Gate No. 2, Delhi Press, A-30, PIR Colony, Sahibabad Industrial <br /> Area Site 4, Sahibabad, Ghaziabad, Uttar Pradesh 201010</p>
                  <Link href="https://www.google.com/maps/place/Dazzle+Exhibitions+And+Events/@28.6711003,77.3597295,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfb45ab7907f3:0x5a99e5c3a139c53b!8m2!3d28.6710956!4d77.3623044!16s%2Fg%2F11q361q7mm?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" className='text-black'><p className="lg:text-[0.8vw] text-[3vw] font-[sb]">SEE ON MAP</p></Link>
                </div>
              </div>
              <div className=" flex lg:gap-22 gap-8 
                       lg:pt-[30px] pt-[10px]">
                <p className=" lg:text-[0.8vw] text-[3vw]">EMAIL</p>
                <p className=" lg:text-[0.8vw] text-[3vw]">info@dazzlexhibition.com | expos@dazzlexhibition.com</p>
              </div>
            </div>

            <div className="col-lg-2 text-black lg:pt-[0px] pt-[20px]">
              <div className="flex gap-2 items-center lg:pb-[20px] pb-[5px]">
                <p className="lg:text-[1.2vw] text-[4.5vw] lg:leading-[2vw] leading-[5vw] m-0 font-[sb]">Dazzle </p>
                <Image className="w-15 " src="/image/Line.svg" alt="logo" width={1830} height={750} />
              </div>
              <Link href="/"><p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2 text-black lg:pt-[0px] pt-[10px]">Home</p></Link>
              <Link href="/about"><p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2 text-black">About Us</p></Link>
              <Link href="/portfolio"><p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2 text-black">Portfolio</p></Link>
              <Link href="/clients"><p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2 text-black">Clients</p></Link>
              <Link href="/career"><p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2 text-black">Career</p></Link>
              <Link href="/privacy-policy"><p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2 text-black">Privacy Policy</p></Link>
              <Link href="/contact"><p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2 text-black">Contact Us</p></Link>
            </div>
            <div className="col-lg-3 text-black lg:pt-[0px] pt-[20px]">
              <div className="flex gap-2 items-center lg:pb-[20px] pb-[5px]">
                <p className="lg:text-[1.2vw] text-[4.5vw] lg:leading-[2vw] leading-[5vw] m-0 font-[sb]">Services</p>
                <Image className="w-15" src="/image/Line.svg" alt="logo" width={1830} height={750} />
              </div>
              <p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2 lg:pt-[0px] pt-[10px]">Consultation</p>
              <p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2">3D Booth Design</p>
              <p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2">Booth Construction</p>
              <p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2">Graphic Production</p>
              <p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2">Trade Show Management</p>
              <p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2">Installation,Dismantling and Shipping</p>
              <p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2">Audio and Visual</p>
              <p className=" lg:text-[0.8vw] text-[3vw] m-0 pb-2">On site supervision</p>
            </div>
            <div className="col-lg-2 text-black lg:pt-[0px] pt-[20px]">
              <div className="flex gap-2 items-center lg:pb-[20px] pb-[5px]">
                <p className="lg:text-[1.2vw] text-[4.5vw] lg:leading-[2vw] leading-[5vw] m-0 font-[sb]">Solutions </p>
                <Image className="w-15" src="/image/Line.svg" alt="logo" width={1830} height={750} />
              </div>
              <Link href="/solutions/portable"><p className=" lg:text-[0.8vw] text-[3vw] text-black m-0 pb-2 lg:pt-[0px] pt-[10px]">Portable Stand</p></Link>
              <Link href="/solutions/custom"><p className=" lg:text-[0.8vw] text-[3vw] text-black m-0 pb-2">Custom Exhibition Stands</p></Link>
              <Link href="/solutions/modular"><p className=" lg:text-[0.8vw] text-[3vw] text-black m-0 pb-2">Modular Exhibition Stands</p></Link>
              <Link href="/solutions/country"><p className=" lg:text-[0.8vw] text-[3vw] text-black m-0 pb-2">Country Pavilion</p></Link>
              <Link href="/solutions/double-decker"><p className=" lg:text-[0.8vw] text-[3vw] text-black m-0 pb-2">Double Decker Exhibition Stands</p></Link>
            </div>
          </div>

            <div className="lg:text-[0.7vw] text-[2.5vw] flex items-center justify-center lg:pt-[40px] pt-[20px] text-[#141414]">
              <p>© 2025 - Dazzle Exhibitions and Events</p>
            </div>

        </div>


      </section>

    </>
  )
}

export default footer
