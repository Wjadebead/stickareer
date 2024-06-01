import React from 'react';
import KakaoImg from '../../assets/imgs/kakao_login.png';
import { useAtom } from 'jotai';
import { authAtom } from '../../stores/Login/auth';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {

    const handleKakaoLogin = () => {
        
    }

    const [testLogin, setTestLogin] = useAtom(authAtom);
    const handleTestLogin = () => {
        setTestLogin(true);
        
    }

    return (
        <div className='flex flex-col items-center justify-center mx-auto'>
            <button className='w-auto h-auto m-5'><img src={KakaoImg} alt='kakao'/></button>
            <button onClick={handleTestLogin}>jotai 실험용 login</button>
        </div>
    );
}

