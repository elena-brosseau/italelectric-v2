import { Route, Routes } from 'react-router-dom';
import './app.css'
import { Header } from "./features/header/Header";
import { Footer } from "./features/footer/Footer"
import { Home } from './pages/home/Home';
import { Merch } from './pages/merch/Merch';
import { Build } from './pages/build/Build';
import { ProductPage } from './pages/productPage/ProductPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/merch" element={<Merch />}/>
        <Route path="/merch/:id" element={<ProductPage />}/>
        <Route path="/build" element={<Build />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
