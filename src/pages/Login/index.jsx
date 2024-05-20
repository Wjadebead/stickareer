import React from 'react';
import KakaoImg from '../../assets/imgs/kakao_login.png';

export default function LoginPage() {

    const handleKakaoLogin = () => {
        
    }

    return (
        <div className='flex justify-center mx-auto'>
            <button><img src={KakaoImg} alt='kakao' /></button>
        </div>
    );
}

