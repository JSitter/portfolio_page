import React from 'react';
import Project from './Project';

function Fireworker(){
    return (
        <article className="color-three">
        <Project
          imgUrl={require('../images/thumbs/fireworker.png')}
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
    );
}

export default Fireworker;