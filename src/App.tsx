import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/homePage/Home';
import Header from './components/header/Header';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/footer';
import Details from './components/Products/Details/Details';
import Notfound from './components/error/Notfound';
import Cart from './components/Products/Cart/Cart';
import Checkout from './components/Products/Chekout/Checkout';
import ProductCategory from './components/categories/Product_category/ProductCategory';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/category/:id/products' element={<ProductCategory />} />
        <Route path='/product/:id/detail' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
