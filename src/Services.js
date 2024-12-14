// pages/Services.js
import React from 'react';

const carModels = [
  
];

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>At BMW, we offer a variety of services to ensure your vehicle remains in top condition:</p>
      <ul>
        <li>Maintenance and Repairs</li>
        <li>Financing and Leasing Options</li>
        <li>24/7 Roadside Assistance</li>
        <li>Customization and Accessories</li>
      </ul>
      <h2>Our Models</h2>
      <div className="car-models">
        {carModels.map((model, index) => (
          <div key={index} className="car-model">
            <img src={model.img} alt={model.name} />
            <h3>{model.name}</h3>
            <p>{model.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
