import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
    <div className=" flex flex-col p-3 gap-10 sm:gap-4  bg-gray-800">
      <div className="flex justify-center text-center items-center">
        <h1 className="text-white text-2xl my-6">HASHIR'S COACHING CENTER</h1>
      </div>
      <div className="flex justify-center text-center items-center">
        <div className="text-white ">
          <h3 className="text-lg  font-bold">SPECIALITY</h3>
          <p className="xl:text-xl ">
            Our coaching center specializes in providing personalized and
            effective teaching that caters to each student's individual learning
            needs. With experienced and dedicated instructors, we focus on
            building strong foundational knowledge and fostering critical
            thinking skills.{" "} <a href="#about">#About</a>
          </p>
        </div>
      </div>
      <div className="text-white flex text-center flex-col items-center">
        <h3 className="text-lg font-bold">LOCATION</h3>
        <p className="xl:text-xl">Pakistan Karachi Port Bin Qasim Gulshen-e-hadeed C-999</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-2 ">
        <div className="flex gap-4 w-full justify-center items-center">
        <img
          className="w-14 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/042/387/654/non_2x/instagram-button-icon-set-instagram-screen-social-media-and-social-network-interface-template-stories-user-button-symbol-sign-logo-stories-liked-editorial-free-png.png"
          alt=""
        />
        <img
          className="w-10 cursor-pointer"
          src="https://img.icons8.com/?size=512&id=uLWV5A9vXIPu&format=png"
          alt=""
        />
        <img
          className="w-10 rounded-full cursor-pointer"
          src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png"
          alt=""
        />
      </div>
      </div>
      <div className="text-white flex flex-col items-center text-center justify-center">
        <p>ALL RIGHT RESERVED || &copy; HCC 2025</p>
        <Link href='/'>  <img className='w-16 mb-3 sm:w-24 rounded-full mix-blend-color-burn mt-3' src="https://png.pngtree.com/element_our/png/20180823/career-coaching-logo-design-template-vector-png_62559.jpg" alt="" /></Link>  

      </div>
    </div>
    <hr className='h-2  bg-yellow-300' />

    </>
  );
}

export default Footer;
