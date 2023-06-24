import {ReactNode} from 'react';
import React from 'react';
import '../styles/screens/screen.css';
import Header from '../modules/Header';

interface ScreenProps {
  children: ReactNode;
  route?: string;
}
const Screen = ({children, route}: ScreenProps) => {
  return (
    <div className='globalContainer'>
        <div className='containerHeader'>
            <Header />
        </div>
      <div className='backgroundImage' />
        <div className='webContainer'>
          {children}
        </div>
        {/* <Footer /> */}
    </div>
  );
};

export default Screen;