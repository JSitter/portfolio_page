import React from 'react';
import Project from './Project';

function SlowLoris(){
    return (
        <article className="color-two">
        <Project
          imgUrl={require('../images/thumbs/loris.png')}
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
    )
}

export default SlowLoris;