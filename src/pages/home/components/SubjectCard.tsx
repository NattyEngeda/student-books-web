import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

// Images
import chemistry from '../../../assets/images/other/chemistry.avif';

export default function SubjectCard() {
  return (
    <Tilt>
      <Link 
      to={'/chapter'}
      className="w-full normshad flex flex-col rounded-xl overflow-hidden shadow item-transition cursor-pointer" >
        <div className='object-fill'>
          <img
            className='w-full  object-cover'
            src={chemistry}
            alt="Chemistry" />
        </div>
        <div className='bg-white w-full flex flex-col gap-5 items-start px-5 py-5'>
          <div>
            <h1 className='text-2xl font-bold text-center text-gray-700'>Chemistry</h1>
          </div>
        </div>
      </Link >
    </Tilt>
  )
}
