import React from 'react';
import '../css/Tabs.css';
import Link from './Link'; // Import your custom link component

const Header = () => {
  return (
    <header className='container'>
      <div className='box'>
        <Link href='https://p5aholic.me/projects/'>Home</Link>
      </div>
      <div className='box'>
        <Link href='https://p5aholic.me/projects/'>About Me</Link>
      </div>
      <div className='box'>
        <Link href='https://p5aholic.me/projects/'>Projects</Link>
      </div>
      <div className='box'>
        <Link href='https://p5aholic.me/projects/'>Skills</Link>
      </div>
      <div className='box'>
        <Link href='https://p5aholic.me/projects/'>Resume</Link>
      </div>
      <div className='box'>
        <Link href='https://p5aholic.me/projects/'>Contact</Link>
      </div>
    </header>
  );
};

export default Header;