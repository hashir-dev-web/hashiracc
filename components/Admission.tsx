import React from 'react'
import { Textarea } from "@/components/ui/textarea"


function Admission() {
  return (
    <>
    <div id='contact' className='min-h-screen p-4 bg-gray-100'>
      <div className='flex justify-center items-center  '>
<h1 className='my-10 text-3xl md:text-5xl hover:underline cursor-pointer text-yellow-500'>Contact Us</h1>
      </div>
      <div className='flex flex-col autoshow justify-center items-center font-sans text-center'>
        <h2 className='text-xl sm:text-3xl mb-1 text-yellow-900'>Fill the form and be a part of our 2k25 batch to make your future bright as your choice</h2>
        <h3 className='sm:text-lg mb-8'>Please fill out the admission form carefully to ensure that all the information provided is accurate. This will help us process your application smoothly. If you have any doubts or need clarification on any part of the form, feel free to reach out to us, and we’ll be happy to assist you. Is there any specific section you’d like more information on?</h3>
      </div>
      <div className='flex flex-col gap-5 justify-center items-center '>
        <input className='w-[90%] autoshow md:contactin md:w-[50%] rounded-xl p-2 border-2 border-black '  placeholder='Full Name' type="text" />
        <input className='w-[90%] autoshow md:contactout md:w-[50%] rounded-xl p-2 border-2 border-black' placeholder='Fathers Name' type="text" />
        <input className='w-[90%] autoshow md:contactin md:w-[50%] rounded-xl p-2 border-2 border-black' placeholder='Adress' type="text" />
        <input className='w-[90%] autoshow md:contactout md:w-[50%] rounded-xl p-2 border-2 border-black' placeholder='Phone Number' type="number" />
        <input className='w-[90%] autoshow md:contactin md:w-[50%] rounded-xl p-2 border-2 border-black' placeholder='Fathers Phone Number' type="number" />
        <Textarea className='w-[90%] autoshow md:contactout md:w-[50%] bg-white rounded-lg' placeholder='Want To Ask Any Thing?' />


        <button className='border-2 autoshow border-black py-2 w-[50%] md:w-[20%] rounded-full font-bold tracking-wide text-xl bg-gradient-to-r from-yellow-500 to-yellow-200'>Submit</button>
      </div>

    </div>
    
    </>
  )
}

export default Admission
