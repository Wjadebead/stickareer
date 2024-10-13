import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { authAtom, userNameAtom } from '../../stores/Login/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function KakaoLogin() {

    const navigate = useNavigate();

    const [userId, setUserId] = useAtom(authAtom);
    const [userName, setUserName] = useAtom(userNameAtom)

    const params = new URL(document.URL).searchParams;
    const code = params.get('code');

    const grantType = "authorization_code";
    const REST_API_KEY = `${process.env.REACT_APP_REST_API}`;
    const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT}`;

    const getToken = async () => {
        axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        }
      )
      .then(res => {
        console.log(res)
        const { access_token } = res.data
        axios
          .post(
            `https://kapi.kakao.com/v2/user/me`,
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-type":
                  "application/x-www-form-urlencoded;charset=utf-8"
              }
            }
          )
          .then(res => {
            console.log("2번쨰", res);
            console.log(res.data.id);            
            console.log(res.data.properties.nickname);
            setUserId(res.data.id)
            setUserName(res.data.properties.nickname);
            navigate('/');
          })
      })
      .catch(Error => {
        console.log(Error)
      })
    };

    useEffect(() => {
        if(code){getToken();}
    }, [code]);

    return (
        <div>
            인가코드
            <div>{code}</div>
        </div>
    );
}

