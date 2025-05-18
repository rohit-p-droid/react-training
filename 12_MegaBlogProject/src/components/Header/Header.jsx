import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import {Container, Logo } from '../index';
import LogoutBtn from './LogoutBtn';

const Header = () => {
  const authStatus = useSelector((state) => state.authReducer.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Sign Up",
      slug: "/sign-up",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Create Post",
      slug: "/create-posts",
      active: authStatus
    },

  ]
  return (
    <header>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : (null)
            )}
            {authStatus && <li>
              <LogoutBtn />
            </li>}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header