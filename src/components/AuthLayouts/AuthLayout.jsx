import { useAtomValue } from 'jotai';
import React, { useEffect } from 'react';
import { authAtom } from '../../stores/Login/auth';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AuthLayout({ children }) {

    const user = useAtomValue(authAtom);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (user === null) {
            alert("로그인이 필요한 항목입니다.")
            navigate('/login', { state: pathname, replace: true });
        }
    }, [navigate, user]);

    return children;
}

