import React from 'react';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyShop</h2>
      <ul style={styles.navLinks}>
        <li>Home</li>
        <li>Products</li>
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
  }
};

export default Navbar;
