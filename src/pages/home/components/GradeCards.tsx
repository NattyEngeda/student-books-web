import students from '../../../assets/images/other/students.jpg';
import Tilt from 'react-parallax-tilt';
export default function GradeCards() {
  return (
    <Tilt>
      < div className="w-full normshad flex flex-col rounded-xl overflow-hidden shadow item-transition cursor-pointer" >
        <div className='object-fill'>
          <img
            className='w-full  object-cover'
            src={students}
            alt="Grade 12 Students" />
        </div>
        <div className='bg-white w-full flex flex-col gap-5 items-start px-5 py-5'>
          <div>
            <h1 className='text-2xl font-bold text-center text-gray-700'>Grade 12</h1>
          </div>
        </div>
      </div >
    </Tilt>
  )
}
