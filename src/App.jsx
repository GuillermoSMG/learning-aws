import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import Navbar from './components/Navbar';
import ThemeContextContainer from './components/ThemeContext';
import Home from './pages/Home';
import { useEffect } from 'react';
import { useLabsStore } from './store/labs';

function App() {
  const { fetchLabs } = useLabsStore(state => state);
  useEffect(() => {
    fetchLabs();
  }, []);
  return (
    <ThemeContextContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/category/:name' element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextContainer>
  );
}

export default App;
