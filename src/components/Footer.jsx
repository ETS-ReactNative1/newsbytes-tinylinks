import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
    return (

        <div className='w-screen mt-15 bg-slate-900 text-gray-300 py-2 px-1 text-center m-2'>
            <div className='mb-3 p-5 max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='font-bold uppercase pt-2 text-center text-2xl '>NewsBytes</h6>
                    <ul>
                        <li className='py-1 text-center'>India News</li>
                        <li className='py-1 text-center'>Business News</li>
                        <li className='py-1 text-center'>World News</li>
                        <li className='py-1 text-center'>Sports News</li>
                        <li className='py-1 text-center'>Politics News</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2 text-center text-2xl'>Company</h6>
                    <ul>
                        <li className='py-1 text-center'>About us</li>
                        <li className='py-1 text-center'>Blog..</li>
                        <li className='py-1 text-center'>Jobs Posting.</li>
                        <li className='py-1 text-center'>Press 24/7</li>
                        <li className='py-1 text-center'>Partner with Us!</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2 text-center text-2xl'>Legal</h6>
                    <ul>
                        <li className='py-1 text-center'>Claims</li>
                        <li className='py-1 text-center'>Privacy</li>
                        <li className='py-1 text-center'>Terms..</li>
                        <li className='py-1 text-center'>Policies</li>
                        <li className='py-1 text-center'>Conditions</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2 text-center text-2xl'>Support</h6>
                    <ul>
                        <li className='py-1 text-center'>Career News</li>
                        <li className='py-1 text-center'>Bollywood News</li>
                        <li className='py-1 text-center'>24/7 Non-Stop</li>
                        <li className='py-1 text-center'>Finance</li>
                        <li className='py-1 text-center'>History</li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                    <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..' />
                        <button className='p-2 mb-4'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <p className='py-4'>All rights reserved © NewsBytes 2022</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaGithub />
                </div>
            </div>
        </div>

    )
}

export default Footer