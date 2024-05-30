import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import DarkModeButton from './DarkModeButton';

export default function Navbar() {

    //활성화 여부를 위해 useMatch로 현재 경로 확인
    const infoStyle = useMatch('/info') ? "text-brand font-bold" : "";
    const hashtagStyle = useMatch('/hashtag') ? "text-brand font-bold" : "";
    const communityStyle = useMatch('/community') ? "text-brand font-bold" : "";

    const mypageStyle = useMatch('/mypage') ? "text-brand font-bold" : "";

    return (
        <header className='title flex flex-col items-center m-10'>
            <DarkModeButton />
            <Link to='login' className='self-end'>로그인</Link>
            <Link to='/' className='text-brand font-bold text-5xl'>STICKareer</Link>
            <nav className='flex md:flex-row items-center md:gap-16 justify-evenly m-10 flex-col gap-2'>
                <Link to='/info'>
                    <div className={`${infoStyle}`}>공채 / 시험 정보</div>
                </Link>
                <Link to='/hashtag'>
                    <div className={`${hashtagStyle}`}>해시태그</div>
                </Link>
                <Link to='/community'>
                    <div className={`${communityStyle}`}>커뮤니티</div>
                </Link>
                <Link to='/mypage'>
                    <div className={`${mypageStyle}`}>마이페이지</div>
                </Link>
            </nav>
        </header>
    );
}

