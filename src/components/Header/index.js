import React from 'react';

import Logo from '../../images/logo.png'

import { FaSearch } from 'react-icons/fa';

import './styles.css';

function Header() {
  return (
      <nav>
          <a href="/" className='logo'>
              <img src={Logo} alt='Logo' />
          </a>

          <ul className='menu'>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Filmes</a></li>
              <li><a href='/'>Séries</a></li>
              <li><a href='/'>Meus favoritos</a></li>
          </ul>

          <div className="search">
              <input type="text" placeholder='Busque seus filmes favoritos...' />
              <FaSearch size={16} color='#3a3a3a' />
          </div>
      </nav>
  );
}

export default Header;