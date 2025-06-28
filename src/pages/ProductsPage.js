import React from 'react';

function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$10',
      image: 'https://vpia.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$15',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$20',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div style={styles.container}>
      <h1>Our Products</h1>
      <div style={styles.grid}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px'
  },
  image: {
    width: '100%',
    height: 'auto'
  }
};

export default ProductsPage;
