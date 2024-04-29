import './App.css';
import logo from './assets/logo_imagine.jpg';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <header className='bg-white'>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
          <div>
            <img src={logo} className='w-16 cursor-pointer' alt="ImagineCloud" />
          </div>
          <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menu ? 'top-[8.7%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li><a className="hover:text-gray-500" href="inicio">INICIO</a></li>
              <li><a className="hover:text-gray-500" href="foro">FOTO</a></li>
              <li><a className="hover:text-gray-500" href="">PRECIO</a></li>
            </ul>
          </div>
          <div className='flex items-center gap-6'>
          <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
              
            {!menu && (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id='menu' onClick={toggleMenu} className={"md:invisible w-6 h-6 cursor-pointer"}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
            {menu && (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id='close' onClick={toggleMenu}  className="md:invisible w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;
