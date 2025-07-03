// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';
import HeroSection from './Pages/HeroSection';
import Collection from './Pages/CollectionsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
