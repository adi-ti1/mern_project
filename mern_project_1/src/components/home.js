import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
  return (
    <div className='container text-center'>
      <h1>Welcome to MERN Projects</h1>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link>
        <Link to="/login" style={{ textDecoration: 'none', color: '#007bff' }}>Log In</Link>
      </div>
    </div>
  );
}

export default Home;