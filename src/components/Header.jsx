import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  

  function pathMathRouter(route) {
    return route === location.pathname;
  }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img
            className='h-5 cursor-pointer'
            src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg'
            alt='realtor'
            onClick={()=>navigate('/')}
          />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer${
                pathMathRouter('/') && 'text-black border-b-red-500'
              }`}
              onClick={()=>navigate('/')}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
                pathMathRouter('/offers') && 'text-black border-b-red-500'
              }`}
              onClick={()=>navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  cursor-pointer ${
                pathMathRouter('/sign-in') && 'text-black border-b-red-500'
              }`}
              onClick={()=>navigate('/sign-in')}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
