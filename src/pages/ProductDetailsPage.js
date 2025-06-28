import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();

  // For now, just display the id. Later we will fetch product details from backend.
  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetailsPage;
