import { Route, Routes, useLocation} from 'react-router-dom';

import Accueil from './screens/accueil/Accueil.tsx';
import Connexion from './screens/connexion/Connexion.tsx';
import Inscription from './screens/connexion/Inscription.tsx';
import DetailSejour from './screens/sejour/Detail.tsx';
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
      case '/connexion':
        return 'CozyHomes : Connectez-vous';
      case '/inscription':
        return 'CozyHomes : Créer un compte';
      case '/home':
        return "CozyHomes : Trouvez un logement";
      case '/sejour/detail':
        return "CozyHomes : Détail du séjour";
      default:
        return 'CozyHomes';
    }
  };
  return (
    <div className='AppContainer'>
      <Routes>
        <Route path="/" element={<Screen route="connexion"><Connexion/></Screen>} />
        <Route path="/home" element={<Screen route="home"><Accueil/></Screen>} />
        <Route path="/connexion" element={<Screen route="connexion"><Connexion/></Screen>} />
        <Route path="/inscription" element={<Screen route="inscription"><Inscription/></Screen>} />
        <Route path="/sejour/detail/*" element={<Screen route="sejour-detail"><DetailSejour/></Screen>} />

      </Routes>
    </div>
  );
}
export default App;
