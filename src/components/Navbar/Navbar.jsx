import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className='flex flex-col items-center m-10'>
            <Link to='login' className='self-end'>로그인</Link>
            <Link to='/' className='text-brand font-bold text-5xl'>STICKareer</Link>
            <nav className='flex md:flex-row items-center md:gap-16 justify-evenly m-10 flex-col gap-2'>
                <Link to='/info'>공채 / 시험 정보</Link>
                <Link to='/hashtag'>해시태그</Link>
                <Link to='/community'>커뮤니티</Link>
                <Link to='/mypage'>마이페이지</Link>
            </nav>
        </header>
    );
}

