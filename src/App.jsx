import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryPage from './components/CategoryPage';
import ThemeContextContainer from './components/ThemeContext';

function App() {
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
