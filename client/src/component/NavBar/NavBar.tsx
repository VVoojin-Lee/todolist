import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../_reducers';
import { setLogout } from '../../_actions/user_action';

function NavBar() {
  const user = useSelector((state: RootState) => state.user_reducer.loginUser);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(setLogout());
    localStorage.setItem('accessToken', '');
  };

  return (
    <div className="top-0 w-1/6 h-screen left-0 bg-slate-800 text-white py-5 font-bold">
      <div className="flex-row items-center m-auto ">
        <Link to="/">
          <div className="flex-[1_1_0] text-center text-xl my-4">TodoList</div>
        </Link>
        <div className="flex-[1_1_0] text-center ">
          {!user ? (
            <Link to="/Login">
              <button className="flex m-auto items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Login{' '}
              </button>
            </Link>
          ) : (
            <>
              <button
                onClick={logoutHandler}
                className="flex m-auto items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout{' '}
              </button>
              <div className="flex my-4 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  />
                </svg>
                {user.username}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
