import React from 'react';
import './css/styles.css';
import Project from './Project';
import '.'

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
      <article className="color-one">
      <Project 
        imgUrl={require('./images/thumbs/heart.png')} 
        projectUrls={[
            'heart-disease-predictor.herokuapp.com',
            'heart-disease-backend.herokuapp.com'
          ]}
      />
      <section className="wrapper">
        <h2>Heart Disease Predictor</h2>
        <p>
        Heart disease is the number one killer of people around the globe. This project explores the UCI Heart Disease Dataset and uses machine learning to predict the occurance of heart disease using data that could be read from an electrocardiogram.
        </p>
        <p>
          Given the non invasive nature of the test inputs, one could surmise that with a high enough accuracy score you may be able to predict the presence of heart disease on a watch one day. Provided it comes with the appropriate sensors.
        </p>
      </section>
      </article>
      <article className="color-two">
        <Project
          imgUrl={require('./images/thumbs/loris.png')}
          projectUrls={[
            'jaytria.com/slowloris'
          ]}
        />
        <section className="wrapper">
          <h2>Slow Loris</h2>
          <p>The Javascript game engine -- Phaser -- allows you to make games that work not only on the web, but also using the Electron framework.</p>
          <p>This project builds the first level in a demonstration game called Slow Loris. Guide the slow loris to the tree and avoid being eaten by the wolves that are wandering the area.</p>

        </section>
      </article>
      <article className="color-three">
        <Project
          imgUrl={require('./images/thumbs/fireworker.png')}
          projectUrls={[
            'fireworker.herokuapp.com'
          ]}
        />
        <section className="wrapper">
          <h2>Fireworker</h2>
          <p>Ever had to send a sensitive document through an email? Did you wish there was a more secure way?</p>
          <p>Email isn't the most secure form of communication. If you wanted to send a document with a social security number on it you would be wise to think twice about how that information travels to your recipient. This project allows you to send a file to someone and know while making certain that someone you don't know doesn't get it as well.</p>
        </section>
      </article>
      <article className="color-four">
        <Project
          imgUrl={require('./images/thumbs/douglas.png')}
          projectUrls={[
            'douglas-adams-front.herokuapp.com',
            'douglas-adams-backend.herokuapp.com'
          ]}
        />
        <section className="wrapper">
        <h2>Douglas Adams Tweet Generator</h2>
          <p>Douglas Adams was a genious and his hilarious wit will be with us as long as his works survive.</p>
          <p>This project generates quotes by walking a markov chain created by analyzing a selection of the Hitchhiker's Guide to the Galaxy series.</p>
        </section>

      </article>
    </div>
  );
}

export default App;
