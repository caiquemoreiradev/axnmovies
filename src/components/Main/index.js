import React from 'react';
import Showcase from '../Showcase';

import './styles.css';
import Latest from '../Latest';
import Movies from '../Movies';

function Main() {
  return (
      <section className='main'>
          <Showcase />

          <Latest />

          <Movies />
      </section>
  );
}

export default Main;