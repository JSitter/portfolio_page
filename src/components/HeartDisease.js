import React from 'react';
import Project from './Project';

function HeartDisease() {
    return (
        <article className="color-one">
        <Project 
          imgUrl={require('../images/thumbs/heart.png')} 
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
    )
}

export default HeartDisease;