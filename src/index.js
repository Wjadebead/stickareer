import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import App from './App';

import HomePage from './components/HomePage';
import Information from './pages/Information';

import Hashtag from './pages/Hashtag';

import Mypage from './pages/Mypage';

import LoginPage from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import PostPage from './pages/Community/PostPage';
import Community from './pages/Community';
import AuthLayout from './components/AuthLayouts/AuthLayout';
import PublicLayout from './components/AuthLayouts/PublicLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
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
        children:[
          {
            index: true,
            element: <Community />,
          },
          {
            path: "post/:postno",
            element: <PostPage />
          },
          
        ]
      },
      {
        path: "mypage",
        children:[
          {
            index: true,
            element: (
              <AuthLayout>
                <Mypage />
              </AuthLayout>
          ),
          },
          {
            path: "personal",
          }
        ]
      },
      {
        path: "login",
        element: (
          <PublicLayout>
            <LoginPage />
          </PublicLayout>
      ),
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
