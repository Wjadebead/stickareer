import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import App from './App';


import Information from './pages/Information';

import Hashtag from './pages/Hashtag';

import Mypage from './pages/Mypage';

import LoginPage from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import PostPage from './pages/Community/PostPage';
import Community from './pages/Community';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "info",
        element: <Information />,
      },
      {
        path: "hashtag",
        element: <Hashtag />,
      },
      {
        path: "community",
        element: <Community />,
        children:[
        ]
      },
      {
        path: "post/:postno",
        element: <PostPage />
      },
      {
        path: "mypage",
        element: <Mypage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
