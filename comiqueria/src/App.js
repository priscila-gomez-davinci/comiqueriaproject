import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './Components/Header/Header'; 
import Footer from './Components/Footer/Footer'; 
import HomePage from './Components/HomePage/HomePage';
import ContactForm from './Components/ContactForm/ContactForm';
import ProductList from './Components/ProductList/ProductList'; 
import './App.css'; 

function App() {
  return (
    <Router>
        <div className="App" style={{ paddingBottom: '60px' }}> <Header />
        <Routes> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/productos" element={<ProductList />} />
          <Route path="/contacto" element={<ContactForm />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;