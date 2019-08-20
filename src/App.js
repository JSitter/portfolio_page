import React from 'react';
import './css/styles.css';
import Project from './Project';
import '.'

function App() {
  return (
    <div className="App">
      <header className="">
        <section className="header-logo">Hello!</section>
      </header>
      <section className="hero-block">Justin Sitter's Web Portfolio</section>
      <article>
      <Project 
        imgUrl={require('./images/thumbs/heart.png')} 
        projectUrls={[
            'heart-disease-predictor.herokuapp.com',
            'heart-disease-backend.herokuapp.com'
          ]}>
      </Project>
      <h2>Heart Disease Predictor</h2>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec feugiat sapien. Cras varius odio velit, quis volutpat felis egestas vitae. In nulla ex, venenatis eget sodales sit amet, volutpat ut tortor. In ac dictum urna, non scelerisque nulla. Praesent vel metus ut massa mollis hendrerit sit amet gravida lacus. Mauris ut elementum nisi, vitae consectetur nulla. Morbi pellentesque ligula quis egestas malesuada. Vestibulum ac porta turpis.

Integer blandit cursus lobortis. Curabitur varius ut felis eu vehicula. Phasellus eleifend non ante blandit dictum. Vivamus id felis scelerisque, pulvinar justo at, sodales ipsum. Aliquam sit amet porta arcu, eu scelerisque metus. Etiam a dictum quam, in consectetur urna. Pellentesque id iaculis mauris. Praesent augue dolor, rhoncus ac cursus at, maximus a lacus. In vestibulum tincidunt nisi aliquam iaculis. Quisque non enim magna. Aenean rutrum eleifend lectus non sollicitudin. Aliquam erat volutpat. Suspendisse ut blandit libero, eu posuere massa. Curabitur fringilla sapien quis malesuada semper. Cras vitae justo hendrerit, sagittis lectus ut, faucibus mauris.

Integer et sem sit amet metus tempor mattis id eu eros. Mauris consequat viverra est eu aliquet. Nam interdum enim vel diam sagittis tincidunt. Ut bibendum efficitur vehicula. Nunc nec sem mi. Ut in cursus felis. Morbi mollis tellus quis leo pellentesque, sit amet cursus erat cursus. Donec vulputate dignissim risus. Cras sit amet diam in arcu bibendum feugiat. Etiam iaculis nibh magna, ac feugiat lectus ultricies quis.

Vivamus eleifend eleifend libero at convallis. In semper dictum ipsum vitae fermentum. Vestibulum sodales, tellus eget mattis pretium, metus nisl mattis urna, nec luctus justo velit sed nulla. Cras euismod malesuada dolor, non tempor sapien porttitor sed. Vestibulum ut ultricies nunc. Suspendisse pulvinar bibendum nisi, non egestas augue rhoncus at. In pellentesque metus quis ipsum ornare, id accumsan ligula ornare. Morbi eu nulla ac nunc pretium maximus. Curabitur sagittis non dolor ut mollis. Nam tincidunt sem sed faucibus commodo. Fusce non leo arcu. Praesent ut nisi eu lorem condimentum condimentum. Sed convallis massa quis purus vulputate, vitae consectetur elit dapibus. Nullam imperdiet, purus nec bibendum rhoncus, ante ligula mattis diam, at congue ipsum nibh nec turpis.

Morbi vitae egestas neque. Donec vitae tincidunt lacus. Donec scelerisque lacinia laoreet. Integer efficitur, ipsum a mollis vulputate, tellus odio semper arcu, vitae auctor felis mi non dolor. Morbi scelerisque finibus libero, at tristique turpis aliquam sit amet. Duis porttitor orci mi, quis ornare dolor tempor et. Integer blandit, nibh non varius cursus, metus ipsum scelerisque nunc, vitae euismod magna elit id tellus. Vestibulum erat arcu, egestas in porta in, faucibus non elit. Praesent rhoncus neque quis sem interdum luctus. Pellentesque fermentum tellus ac nisi dapibus bibendum. 
      </article>
    </div>
  );
}

export default App;
