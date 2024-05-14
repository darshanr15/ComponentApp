import React from 'react';
import { Link } from 'react-router-dom';
//import './HomePage.css'

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>
      <p>Explore our services and products</p>
      <button className="dashboard-button"><Link to="/dashboard">Show Dashboard</Link></button>
    </div>
  );
}

export default HomePage;