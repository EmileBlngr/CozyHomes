import { Route, Routes } from 'react-router-dom';
import HomeLocations from './screens/HomeLocations.tsx';
import Screen from './screens/screen.tsx'
import React from 'react';
import './App.css';
function App() {
  return (
    <div className='AppContainer'>
      <Routes>
        <Route path="/" element={<Screen><HomeLocations/></Screen>} />
        <Route path="/Home" element={<Screen><HomeLocations/></Screen>} />
      </Routes>
    </div>
  );
}
export default App;
