import { Route, Routes } from 'react-router-dom';
import { AnimeDetails } from './pages/AnimeDetails';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="anime" element={<AnimeDetails />} />
    </Routes>
  );
}

export default App;
