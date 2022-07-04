import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useGetProfile from '../../hooks/useGetProfile';
import {useTranslation} from "react-i18next";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const profile = useGetProfile();
  const {t} = useTranslation();

  const loginHandler = (e:React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    axios
      .post('/auth/login', {
        username,
        password,
      })
      .then((response) => {
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        profile(accessToken);
        navigate('/');
      })
      .catch((err) => {
        if (err.status(500)) alert('아이디가 없습니다');
        if (err.status === 401) alert('비밀번호가 틀렸습니다');
      });
  };
  return (
    <div className="min-h-screen w-5/6 flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login Your Account
          </h2>
        </div>
        <form onSubmit={loginHandler}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="Username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10 sm:text-sm"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="Username" className="sr-only">
                Password
              </label>
              <input
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10 sm:text-sm"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center my-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:rinpm i i18next react-i18next
            ng-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-slate-400 group-hover:text-slate-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            {t("login")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
