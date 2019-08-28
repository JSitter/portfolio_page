import React from 'react';
import './css/styles.css';
import HeartDisease from './components/HeartDisease';
import Fireworker from './components/Fireworker';
import SlowLoris from './components/SlowLoris';
import DouglasAdams from './components/DouglasAdams';

function App() {
  return (
    <div className="App">
      <header className="parallax">
        <section className="header-logo">Hello!</section>
      </header>
      <section className="hero-block header-color">
        <h1>Justin Sitter</h1>
        <h2>Web Portfolio</h2>
        <p>These projects represent some of the work that I have produced while attending Make School in San Francisco.</p>
      </section>
      <p>Several projects are hosted on Heroku's free tier and may take some time to initially load.</p>
      <HeartDisease />
      <SlowLoris />
      <Fireworker />
      <DouglasAdams />

      <footer>
        <section>
          <h2>
            Support Open Source
          </h2>
          <p>Source code for this product is <a href="https://github.com/JSitter/portfolio_page">available on Github</a>.</p>
        </section>


      </footer>
    </div>
  );
}

export default App;
