import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Whishlist from './Pages/Whishlist';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Whishlist' element={<Whishlist/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
