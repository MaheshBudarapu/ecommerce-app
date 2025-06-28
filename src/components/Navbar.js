import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyShop</h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/products" style={styles.link}>Products</Link></li>
        <li>Cart</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: '#333',
    color: '#fff'
  },
  logo: {
    fontSize: '24px'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    cursor: 'pointer'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Navbar;
