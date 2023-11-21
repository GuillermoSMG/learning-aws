import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import Navbar from './components/Navbar';
import ThemeContextContainer from './components/ThemeContext';
import Home from './pages/Home';
import { getFirebase } from './services/fetchDatabase';

function App () {

    fetch(getFirebase())
    .then(res => res.json)
    .then(data => console.log(data))
  
  
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
