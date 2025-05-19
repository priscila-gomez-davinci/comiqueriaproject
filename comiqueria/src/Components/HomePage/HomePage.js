import React from 'react';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import './HomePage.css'; 

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;