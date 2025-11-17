'use client';
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { motion } from "framer-motion";

const form = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <>

            <div className="col-lg-10">
                <ToastContainer top-center />
                <form  >
                    <div className="row lg:pb-[30px] pb-[15px]">
                        <div className="col-lg-12">
                            <div>
                                <label className="block mb-2 lg:text-[0.9vw] text-[3vw] font-[sb] text-gray-900 ">Name</label>
                                <input type="text" name="name" id="full_name" className="bg-gray-900/5 border border-gray-300 text-gray-900 text-sm rounded-1   block w-full p-2.5" placeholder="Full Name" required />
                            </div>

                        </div>

                        <div className="col-lg-12 lg:pt-[20px] pt-10px]">
                            <div>
                                <label className="block mb-2 lg:text-[0.9vw] text-[3vw] font-[sb] text-gray-900 ">Phone</label>
                                <input type="number" name="phone" id="phone" className="bg-gray-900/5 border border-gray-300 text-gray-900 text-sm rounded-1   block w-full p-2.5" placeholder="(123)-456-7890" required />
                            </div>

                        </div>

                        <div className='col-lg-12 lg:pt-[20px] pt-10px]'>
                            <div>
                                <label className="block mb-2 lg:text-[0.9vw] text-[3vw] font-[sb] text-gray-900 ">Email</label>
                                <input type="text" name="email" id="email" className="bg-gray-900/5 border border-gray-300 text-gray-900 text-sm rounded-1   block w-full p-2.5" placeholder="Email" required />
                            </div>

                        </div>

                        <div className="col-lg-12 lg:pt-[20px] pt-10px]">
                            <div>
                                <label className="block mb-2 lg:text-[0.9vw] text-[3vw] font-[sb] text-gray-900 ">Message</label>
                                <textarea id="large-input" name="message" className="block w-full p-3 text-gray-900 border border-gray-300 rounded-1 bg-gray-900/5 text-base " placeholder="Tell us about your product and goals" required
                                    rows={3}
                                ></textarea>
                            </div>
                        </div>



                        <div className="lg:pt-[40px] pt-[20px]">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                disabled={isSubmitting}
                                className={`border  text-[#fff] bg-[#000] font-medium  text-sm  py-2 px-4 text-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}>
                                {isSubmitting ? 'Sending...' : 'Request Free Estimate'}
                            </motion.button>
                        </div>
                    </div>

                </form>
            </div>

        </>
    )
}

export default form

