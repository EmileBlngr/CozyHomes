import { Route, Routes } from 'react-router-dom';
import HomeLocations from './screens/HomeLocations.tsx';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLocations/>} />
        <Route path="/Home" element={<HomeLocations/>} />
      </Routes>
    </div>
  );
}
export default App;
