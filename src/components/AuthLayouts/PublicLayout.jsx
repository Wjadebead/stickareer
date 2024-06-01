import { useAtomValue } from 'jotai';
import React, { useEffect } from 'react';
import { authAtom } from '../../stores/Login/auth';
import { useNavigate } from 'react-router-dom';

export default function PublicLayout({ children }) {

    const user = useAtomValue(authAtom);
    const navigate = useNavigate();

    useEffect(() => {
        if (user != null) {
            navigate('/', { replace: true });
        }
    }, [navigate, user]);

    return children;
}

