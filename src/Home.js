// Home.js
import React from 'react';

function Home() {
  return (
    <div className="home-container">
      
      
      <section className="home-intro"> 
        
      <h1>Welcome to BMW Car Showcase</h1> 
        <h2>Discover BMW</h2>
        <p>Explore our range of models from sporty coupes to luxurious sedans, each crafted with precision and innovation.</p>
      </section>
      <section className="home-models">
        <h2>Our Models</h2>
        <ul>
          <li>BMW 3 Series</li>
          <li>BMW 5 Series</li>
          <li>BMW 7 Series</li>
          <li>BMW X1</li>
          <li>BMW X3</li>
          <li>BMW X5</li>
          <li>BMW X6</li>
          <li>BMW Z4</li>
          <li>BMW i3</li>
          <li>BMW i8</li>
          <li>BMW M2</li>
          <li>BMW M3</li>
          <li>BMW M4</li>
          <li>BMW M5</li>
          <li>BMW M8</li>
        </ul>
      </section>
      <footer className="home-footer">
        <p>Drive the future with BMW.</p>
      </footer>
    </div>
  );
}

export default Home;