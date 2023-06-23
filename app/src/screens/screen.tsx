import {ReactNode} from 'react';
import React from 'react';
import '../styles/screens/screen.css';
import { backgroundImage } from '../assets/_export';
import Header from '../modules/Header';

interface ScreenProps {
  children: ReactNode;
  route?: string;
}
const Screen = ({children, route}: ScreenProps) => {
  return (
    <div className='globalContainer'>
        <div>
            <Header />
        </div>
      <div className='backgroundImage'></div>
        <div className={`screenScale webContainer`}>
          {children}
        </div>
        {/* <Footer /> */}
    </div>
  );
};

export default Screen;