import React from 'react';

function HomePage() {
  return (
    <div style={styles.banner}>
      <h1>Welcome to MyShop</h1>
      <p>Find the best products here</p>
      <button style={styles.button}>Shop Now</button>
    </div>
  );
}

const styles = {
  banner: {
    textAlign: 'center',
    marginTop: '50px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  }
};

export default HomePage;
