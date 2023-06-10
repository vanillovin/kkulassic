'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '../AuthProvider';

function MainNavigation() {
  const [scrollY, setScrollY] = useState(0);
  const auth = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 0;

  return (
    <header className={`w-full max-w-6xl flex items-center justify-between bg-white px-3 sm:px-6 h-12 sm:h-16 fixed shadow-sm z-50 ${isScrolled ? 'bg-opacity-100 transition-all shadow-md' : 'bg-opacity-70'}`}>
      <Link
        href='/'
        className='text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 
          to-yellow-600 animate-fade-in'
      >
        클메<span className='text-xs ml-1 hidden sm:inline'>당신의 클래식 메이트</span>
      </Link>
      <nav>
        <ul className='flex font-medium text-sm sm:text-base'>
          <li className='mr-2 sm:mr-4 hover:text-yellow-500 transition-all'>
            <Link href='/classics'>모든 클래식</Link>
          </li>
          <li className='mr-2 sm:mr-4 hover:text-yellow-500 transition-all'>
            <Link href='/tags'>태그로 찾기</Link>
          </li>
          {auth.user ? (
            <li className='hover:text-yellow-500 transition-all'>
              <Link href={`/profile`}>{auth.user.email?.split('@')[0]}님</Link>
            </li>
          ) : (
            <li className='bg-yellow-400 bg-opacity-40 text-sm text-white rounded-sm flex items-center px-1'>
              <Link href='/login'>로그인·회원가입</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
