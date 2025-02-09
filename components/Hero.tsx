import React from 'react'

function Hero() {
  return (
    <>
    <div id='home' className=' h-[70vh] w-full flex flex-col-reverse md:flex-row justify-evenly md:justify-between items-center bg-gradient-to-r from-yellow-400 to-gray-100 '>
      <div className='flex font-sans md:w-[60%] flex-col text-3xl sm:text-4xl lg:text-5xl font-bold text-center md:ml-10 '>
<h1 className='text-white'>HASHIR'S <span className='text-gray-500'>COACHING CENTER</span></h1>
<h2 className='flex m-auto text-2xl sm:text-3xl lg:text-4xl mt-1 mb-2'>A Bright Future Awaits You <img className='ml-3 w-8 sm:w-10' src="https://png.pngtree.com/png-clipart/20230813/original/pngtree-vector-light-bulb-cartoon-isolated-object-solution-design-vector-picture-image_10584543.png" alt="" /></h2>
<h3 className='text-2xl sm:text-3xl lg:text-4xl '>Welcome To A Brilliant Enviroment</h3>
      </div>
      <div className='w-[50%] sm:w-[40%]'>
<img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-teachers-day-math-teacher-lecture-original-hand-drawn-cartoon-illustration-image_2297891.jpg" className='mix-blend-darken md:w-[85%] ' alt="" />
      </div>
    </div>
    <hr className='h-2 mt-2 mb-2 bg-yellow-300' />
    </>
  )
}
 
export default Hero
