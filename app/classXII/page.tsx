import AboutUs from '@/components/AboutUs'
import Admission from '@/components/Admission'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

function ClassXII() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="min-h-screen bg-gray-50">
        <div className="flex flex-col justify-center text-center items-center  ">
          <h1 className="text-3xl md:text-5xl text-yellow-600 underline mt-10 mb-2">
            Class XII
          </h1>
          <p className="text-lg autoshow  text-gray-500">
            We provide the best education for class XII students
          </p>
        </div>
        <div className="grid md:grid-cols-2 font-sans xl:grid-cols-3 gap-3 p-4  mb-5 ">
          <div className=" bg-gray-100 autoshow  hover:bg-gray-200  flex flex-col justify-center items-center text-center border-4 border-yellow-400  rounded-xl md:rounded-t-full px-4 py-2">
            <h2 className="text-lg font-bold mt-5 tracking-wider text-gray-500">DERIVATIVES MATHS</h2>
            <p className="sm:p-8 md:p-12 text-gray-900">
              Our XII  Class derivatives Mathematics course is designed to provide
              students with a comprehensive understanding of all key
              mathematical concepts required for success in the Matriculation
              exams. The course covers topics such as Algebra, Geometry,
              Trigonometry, Calculus, and Statistics, with a focus on
              problem-solving techniques and exam preparation strategies. We
              ensure that each student builds a strong foundation through
              interactive lessons, practice sessions, and regular assessments.
              Our experienced instructors help students strengthen their
              weaknesses and enhance their strengths, ensuring they approach
              their exams with confidence and achieve the best possible results.
            </p>
          </div>
          <div className="bg-gray-100 autoshow   hover:bg-gray-200 flex flex-col justify-center items-center text-center border-4 border-yellow-400 rounded-xl md:rounded-t-full px-4 py-2">
            <h2 className="text-lg font-bold mt-5 tracking-wider text-gray-500">QUANTUM PHYSICS</h2>
            <p className="sm:p-8 md:p-12 text-gray-900">
            Our XII  Class quantum Physics course is designed to make students understand the core principles of physics in a simple and engaging way. Covering essential topics such as Motion, Forces, Energy, Light, and Sound, the course provides a strong foundation for tackling both theoretical concepts and practical problems. We focus on helping students develop a clear understanding of the physical world around them, using real-life examples and hands-on experiments to enhance learning. With regular practice tests, assignments, and one-on-one attention from our experienced instructors, students will build confidence and perform excellently in their Matric exams.
            </p>
          </div>
          <div className=" bg-gray-100 autoshow   hover:bg-gray-200 flex flex-col justify-center items-center text-center border-4 border-yellow-400 rounded-xl md:rounded-t-full px-4 py-2">
            <h2 className="text-lg font-bold mt-5 tracking-wider text-gray-500">MECHANICAL CHEMISTRY</h2>
            <p className="sm:p-8 md:p-12 text-gray-900">
            Our XII  Class mechnical Chemistry course offers a thorough introduction to the fundamental concepts of chemistry, designed to make students proficient in topics like Atomic Structure, Chemical Reactions, Acids and Bases, Periodic Table, and more. The course focuses on building a solid understanding of both theoretical knowledge and practical skills, with an emphasis on laboratory experiments and real-world applications. We provide interactive lessons, problem-solving sessions, and regular assessments to help students grasp complex topics with ease. Our experienced instructors ensure that students develop a strong foundation, preparing them to excel in their Matric exams with confidence.
            </p>
          </div>
          <div className=" bg-gray-100  autoshow  hover:bg-gray-200 flex flex-col justify-center items-center text-center border-4 border-yellow-400 rounded-xl md:rounded-t-full px-4 py-2">
            <h2 className="text-lg font-bold mt-5 tracking-wider text-gray-500">PRO ENGLISH</h2>
            <p className="sm:p-8 md:p-12 text-gray-900">
            Our XII  Class pro English course is designed to help students strengthen their language skills and improve their understanding of English literature and grammar. The course covers key areas such as reading comprehension, writing skills, grammar, vocabulary, and essay writing. We also explore important works of literature to enhance students' analytical and critical thinking abilities. Through interactive lessons, regular assignments, and personalized attention, students will build confidence in both written and spoken English, ensuring they perform their best in their Matric exams.
            </p>
          </div>
          <div className=" bg-gray-100 autoshow   hover:bg-gray-200 flex flex-col justify-center items-center text-center border-4 border-yellow-400 rounded-xl md:rounded-t-full px-4 py-2">
            <h2 className="text-lg font-bold mt-5 tracking-wider text-gray-500">COMPUTER JS</h2>
            <p className="sm:p-8 md:p-12 text-gray-900">
            Our XII  Class Computer Science javascript course is designed to give students a strong understanding of the basics of computers and technology. The course covers topics such as computer hardware, software, operating systems, and programming languages. Students will also learn about the internet, databases, and computer applications, helping them build practical skills for the modern world. With hands-on practice, interactive lessons, and guidance from experienced instructors, students will gain the knowledge and confidence needed to excel in their Matric exams and beyond.
            </p>
          </div>
          <div className=" bg-gray-100 autoshow   hover:bg-gray-200  flex flex-col justify-center items-center text-center border-4 border-yellow-400 rounded-xl md:rounded-t-full px-4 py-2">
            <h2 className="text-lg font-bold mt-5 tracking-wider text-gray-500">BOTNY</h2>
            <p className="sm:p-8 md:p-12 text-gray-900">
            Our XII  Class Botny course is designed to help students understand the fundamentals of life sciences. The course covers essential topics like cell biology, genetics, human anatomy, ecology, and plant biology, with a focus on both theoretical knowledge and practical applications. We use engaging lessons, diagrams, and real-life examples to make complex concepts easy to understand. Regular assessments and interactive learning sessions ensure that students build a strong foundation in biology, helping them perform confidently and successfully in their Matric exams.
            </p>
          </div>
    
        </div>
      </div>
    <hr className='h-2 mt-2 mb-2 bg-yellow-300' />

    <AboutUs/>
    <Admission/>
    <hr className='h-2 mt-2 mb-2 bg-yellow-300' />
    <Footer/>

    </>
  )
}

export default ClassXII
