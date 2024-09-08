import React from 'react';
import KakaoImg from '../../assets/imgs/kakao_login.png';
import { useAtom } from 'jotai';
import { authAtom, nickNameAtom } from '../../stores/Login/auth';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API}&redirect_uri=${process.env.REACT_APP_REDIRECT}&response_type=code`;
                            

    const handleKakaoLogin = () => {
        window.open(KAKAO_AUTH_URL);
    }

    const [testLogin, setTestLogin] = useAtom(authAtom);

    const handleTestLogin = () => {
        setTestLogin("myID");
        
    }

    return (
        <div className='flex flex-col items-center justify-center mx-auto'>
            <button 
            className='w-auto h-auto m-5'
            onClick={handleKakaoLogin}
            ><img src={KakaoImg} alt='kakao'/></button>
            <button onClick={handleTestLogin}>jotai 실험용 login</button>
        </div>
    );
}

