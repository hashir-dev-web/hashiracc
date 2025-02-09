"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useRef, useState } from "react";
  

function Navbar() {

const [img, setImg] = useState(false);
const menu = useRef<HTMLUListElement>(null);

const OpenMenu = () => {
    
  if (menu.current) {
    menu.current.classList.toggle('translate-y-[41%]');
    menu.current.classList.toggle('duration-300');
    menu.current.classList.toggle('ease-in');
}
setImg(!img);
}

  return (
    <div  className='sticky top-0 z-10 flex justify-between items-center p-3 bg-gradient-to-r from-yellow-500 to-gray-200'>
     <Link href='/'> <div className='flex items-center'>
        <img className='w-16 sm:w-24 mix-blend-multiply' src="https://png.pngtree.com/element_our/png/20180823/career-coaching-logo-design-template-vector-png_62559.jpg" alt="" />
        <h1 className='font-bold tracking-wider text-2xl -mx-3 font-sans'>HCC</h1>
      </div></Link>
      <ul ref={menu} className='rounded-b-full bg-gradient-to-r from-yellow-500 to-yellow-200 md:bg-gradient-to-r md:from-transparent md:to-transparent  absolute right-0 md:h-0 md:right-10 items-center translate-y-[-60%]  md:translate-y-0 flex flex-col md:flex-row  p-6 md:p-2 z-10 md:z-0   pt-24 md:bg-transparent gap-48 md:gap-12 text-lg font-semibold'>
       
        <li  className="">
        <DropdownMenu >
  <DropdownMenuTrigger className="p-2 px-5 md:px-0   bg-gradient-to-r from-yellow-400 to-gray-100 border border-black   rounded-full md:p-0 md:rounded-none  md:border-none md:bg-gradient-to-r md:from-transparent md:to-transparent font-sans text-gray-700">Subjects</DropdownMenuTrigger>
  <DropdownMenuContent className=" bg-gradient-to-r from-yellow-400 to-gray-100 shadow-lg rounded-xl w-40 lg:w-52 p-4">
    <DropdownMenuLabel>Classes</DropdownMenuLabel>
    <DropdownMenuSeparator className="bg-black" />
  <Link href='/classX'><DropdownMenuItem className="cursor-pointer">Class X</DropdownMenuItem></Link>
  
    <Link href='/classXI'><DropdownMenuItem className="cursor-pointer">Class XI</DropdownMenuItem></Link>
    
    <Link href='/classXII'><DropdownMenuItem className="cursor-pointer">Class XII</DropdownMenuItem></Link>
  </DropdownMenuContent>
</DropdownMenu>

        </li>
        <li> <a href='#about' className="p-3 font-sans px-5 md:px-0 bg-gradient-to-r from-yellow-400 to-gray-100 border border-black  rounded-full md:p-0 md:rounded-none  md:border-none md:bg-gradient-to-r md:from-transparent md:to-transparent text-gray-700" >About Us</a></li>
        <a href="#contact"> <li className="p-2 px-5 font-sans  mb-10 md:mb-0 bg-gradient-to-r from-yellow-400 to-gray-100 rounded-full   border-2 border-black  md:bg-gradient-to-r md:from-transparent md:to-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:to-gray-100 text-gray-700">Contact Us</li></a>
      </ul>
<div>
   <button onClick={OpenMenu} className='md:hidden'>
    {img ?<img className='w-12 absolute z-50 right-0 top-3  sm:top-5 sm:w-14 mix-blend-multiply' src="https://img.pikbest.com/png-images/qiantu/hand-drawn-cartoon-yellow-open-book_2727001.png!sw800" alt="" />: <img className='absolute z-50 right-0 top-3 sm:top-5 w-12 sm:w-14 mix-blend-darken' src="https://banner2.cleanpng.com/20181118/pbb/kisspng-motion-graphs-and-derivatives-curve-graph-of-a-fun-labcamera-explore-to-learn-5bf1b03db0f1e6.3030644515425659497248.jpg" alt="" />  }

   </button>
</div>
    </div>
  )
}

export default Navbar
