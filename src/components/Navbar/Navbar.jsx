import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import DarkModeButton from './DarkModeButton';
import { useAtom, useAtomValue } from 'jotai';
import { authAtom, userNameAtom } from '../../stores/Login/auth';

export default function Navbar() {

    //활성화 여부를 위해 useMatch로 현재 경로 확인

    const infoStyle = useMatch('/info') ? "text-brand font-bold" : "";
    const hashtagStyle = useMatch('/hashtag') ? "text-brand font-bold" : "";
    const resumeStyle = useMatch('/resumes') ? "text-brand font-bold" : "";
    const communityStyle = useMatch('/community') ? "text-brand font-bold" : "";
    const mypageStyle = useMatch('/mypage') ? "text-brand font-bold" : "";

    //jotai atom으로 로그인 상태를 받아옴
    const auth = useAtomValue(authAtom);
    const [isLoggedIn, setIsLoggedIn] = useAtom(authAtom);
    const [userName, setUserName] = useAtom(userNameAtom);

    //로그아웃 로직 ( 임시 )
    const handleLogout = () => {
        setIsLoggedIn(null);
        setUserName(null);
    }

    return (
        <header className='flex flex-col items-center m-10'>
            <DarkModeButton />
            {
                auth ? 
                <div className='self-end'>
                    {userName} 회원님
                    <button className='mx-5' onClick={handleLogout}>로그아웃</button>
                </div>
                :
                <Link to='login' className='self-end'>로그인</Link>
            }
            <Link to='/' className='text-brand font-bold text-5xl'>
                <h1 className='title'>STICKareer</h1>
            </Link>
            <nav className='flex xl:flex-row items-center md:gap-16 justify-evenly m-10 flex-col gap-2'>
                <Link to='/info'>
                    <div className={`${infoStyle}`}>공채 / 시험 정보</div>
                </Link>
                <Link to='/hashtag'>
                    <div className={`${hashtagStyle}`}>해시태그</div>
                </Link>
                <Link to='/resumes'>
                    <div className={`${resumeStyle}`}>이력서</div>
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

