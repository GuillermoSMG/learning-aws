import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import Navbar from './components/Navbar';
import ThemeContextContainer from './components/ThemeContext';
import { useFetchData } from './hooks/useFetchData.jsx';
import Home from './pages/Home';

function App() {
  const { data } = useFetchData();
  console.log(data);
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
