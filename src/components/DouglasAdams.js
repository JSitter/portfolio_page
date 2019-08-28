import React, { useState } from 'react';
import Project from './Project';

function DouglasAdams(){
    const [status, updateStatus] = useState("link-offline")

    const handleLink = function(event){
      event.preventDefault()
    }

    return (
        <article className="color-four">
        <Project
          imgUrl={require('../images/thumbs/douglas.png')}
          projectUrls={[
            'douglas-adams-front.herokuapp.com',
            'douglas-adams-backend.herokuapp.com'
          ]}
          updateStatus={updateStatus}

        />
        <section className="wrapper">
          <h2>Douglas Adams Tweet Generator</h2>
          <p>Douglas Adams was a genious and his hilarious wit will be with us as long as his works survive.</p>
          <p>This project generates quotes by walking a markov chain created by analyzing a selection of the Hitchhiker's Guide to the Galaxy series.</p>
        </section>

      </article>
    )
}

export default DouglasAdams;