import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import'./Haeder.css';

const Haeder = () => {
    return (
        <div>
          <div className='containers'>
          <div className='header'>
          <FontAwesomeIcon className='img' icon={faUserGear}></FontAwesomeIcon>
          <h2 className=''>PRO-GYMNASIUM-CLUB</h2>
          </div>
          <nav>
            <a href="/home">Home</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
          </nav>
          </div>
        </div>
    );
};

export default Haeder;