import { Route, Routes, useLocation} from 'react-router-dom';

import HomeLocations from './screens/HomeLocations.tsx';
import SignInPage from './screens/connexion/SignInPage.tsx';
import SignUpPage from './screens/connexion/SignUpPage.tsx';
import Screen from './screens/screen.tsx'
import React, {useEffect} from 'react';
import './App.css';


function App() {
  const location = useLocation();

  useEffect(() => {
    const routeName = getRouteName(location.pathname);
    document.title = routeName;
  }, [location]);

  // Fonction pour obtenir le nom de la route en fonction du chemin
  const getRouteName = (path) => {
    switch (path) {
      case '/':
        return 'CozyHomes : Trouvez un logement';
      case '/home':
        return "CozyHomes : Trouvez un logement";
      default:
        return 'CozyHomes';
    }
  };
  return (
    <div className='AppContainer'>
      <Routes>
        <Route path="/" element={<Screen><HomeLocations/></Screen>} />
        <Route path="/home" element={<Screen><HomeLocations/></Screen>} />
        <Route path="/sign-in" element={<Screen><SignInPage/></Screen>} />
        <Route path="/sign-up" element={<Screen><SignUpPage/></Screen>} />
      </Routes>
    </div>
  );
}
export default App;
