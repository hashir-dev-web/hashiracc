import AboutUs from "@/components/AboutUs";
import Admission from "@/components/Admission";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
<>
<Navbar/>
<Hero/>
<AboutUs/>
<Admission/>
<hr className='h-2 mt-2 mb-2 bg-yellow-300' />
<Footer/>

</>
  );
}
