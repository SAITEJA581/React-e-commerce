import React from "react";

import Header from './Header';
import ProductNavbar from './ProductNavbar';
import Electronics from './Electronics';
import FashDeal from './FashDeal';
import Flip1 from './Flip1';
import Footer from "./components/Footer";

import './ProductNavbar.css';

function App() {

  

  return (
  <>
    <Header />
    <ProductNavbar />
    <Electronics />
    <FashDeal />
    <Flip1 />
    <Footer />
  </>
  );
}

export default App;
