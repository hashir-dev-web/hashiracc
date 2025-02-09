import React from 'react'
import './style.css'

function AboutUs() {
  return (
    <>
    <div id='about'className='min-h-screen bg-gray-100 font-sans'>
      <div className='flex justify-center items-center'>
        <h1 className='my-10 font-sans font-semibold text-3xl md:text-5xl text-yellow-500 cursor-pointer hover:underline '>ABOUT US</h1>
      </div>
      <div className='flex flex-col justify-center items-center p-5'>
<div className='flex flex-col md:flex-row  items-center p-3 '>
  <div className='md:w-[50%]'>
  <img className='m-auto autoshow hover:scale-[1.035] duration-200 cursor-pointer' src="https://p.kindpng.com/picc/s/50-500807_cartoon-shared-vision-clipart-vision-statement-hd-png.png" alt="" />
  </div>
  <div className='md:w-[50%] autoshow md:aboutshow   hover:bg-gray-200 shadow-lg p-3 md:p-5 md:mr-10'>
    <h1 className='text-2xl sm:text-4xl font-semibold text-gray-700 mb-1'>Our Vision :-</h1>
    <p className='sm:text-lg font-semibold text-yellow-800'>"Our vision at Hashir's Coaching Center is to become a leading center of excellence in education, where every student is inspired to reach their full potential. We aim to create a nurturing and dynamic learning environment that not only focuses on academic achievements but also encourages personal development, critical thinking, and lifelong learning. Through innovative teaching methods, dedicated mentorship, and a commitment to individualized support."</p>
  </div>
  
</div>
<div className='flex flex-col-reverse md:flex-row items-center mt-14 p-3 '>

<div className='md:w-[50%] autoshow md:aboutshow  hover:bg-gray-200 shadow-lg p-3 md:p-5 md:mr-10  '>
    <h1 className='text-2xl sm:text-4xl font-semibold  text-gray-700 mb-1'>Why Choosing Us:-</h1>
    <p className=' sm:text-lg font-semibold text-yellow-800'>"At Hashir's Coaching Center, we are committed to providing a unique and personalized learning experience tailored to each student’s needs. Our team of expert educators uses innovative teaching methods and proven strategies to ensure that students not only understand the material but also gain the confidence to apply their knowledge. We prioritize one-on-one attention, creating a supportive and motivating environment where every student can thrive. With a focus on both academic excellence and personal growth."</p>
  </div>
  <div className='md:w-[50%]'>
  <img className='m-auto w-[60%] autoshow  hover:scale-[1.035] duration-200 cursor-pointer mix-blend-multiply' src="https://img.freepik.com/premium-vector/friendly-approachable-cartoon-male-teacher-standing-confidently-front-blackboard_851674-43576.jpg" alt="" />
  </div>
 
  </div>
  <div className='flex  flex-col md:flex-row  items-center mt-14 p-3  '>
  <div className='md:w-[50%] '>
  <img className='m-auto w-[80%] autoshow  hover:scale-[1.035] duration-200 cursor-pointer mix-blend-multiply'src="https://img.freepik.com/premium-vector/experienced-teacher-explaining-lesson-school-classroom_1120558-48808.jpg" alt="" />
  </div>
  <div className='md:w-[50%] autoshow md:aboutshow  hover:bg-gray-200 shadow-lg p-3 md:p-5 md:mr-10  '>
    <h1 className='text-2xl sm:text-4xl font-semibold  text-gray-700 mb-1'>Experienced Teaching:-</h1>
    <p className='sm:text-lg font-semibold text-yellow-800'>"At Hashir's Coaching Center, our team of highly experienced and dedicated educators brings a wealth of knowledge and passion to the classroom. With years of expertise in their respective fields, our instructors understand the diverse learning styles of students and adapt their teaching methods to ensure every individual grasps the material thoroughly. We focus on providing clear explanations, real-world examples, and continuous support to help students overcome challenges and build confidence."</p>
  </div>
 
  </div>
      </div>
    </div>
    <hr className='h-2 mt-2 mb-2 bg-yellow-300' />

    </>
  )
}

export default AboutUs
