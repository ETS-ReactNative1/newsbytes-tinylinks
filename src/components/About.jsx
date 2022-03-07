import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-screen my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Trusted by people across India</h2>
                    <p className='text-3xl py-6 text-gray-500'>Get the latest news about India, Technology, Bollywood, and Cricket.</p></div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-indigo-600'>50k+</p>
                        <p className='text-gray-400 mt-2'>Visiter</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                        <p className='text-gray-400 mt-2'>News Coverage</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-indigo-600'>100k</p>
                        <p className='text-gray-400 mt-2'>Views/day</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About