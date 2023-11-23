import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import Navbar from './components/Navbar';
import ThemeContextContainer from './components/ThemeContext';
import Home from './pages/Home';
import { useEffect } from 'react';
import { useLabsStore } from './store/labs';
import Article from './components/Article';

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
          <Route path='/category/:name/article/:id' element={<Article />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextContainer>
  );
}

export default App;
