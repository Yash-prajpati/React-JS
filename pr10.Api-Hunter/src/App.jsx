import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch(`https://dummyjson.com/products`)
            .then(response => response.json())
            .then(AllProducts => {
                setProducts(AllProducts.products); // Update state with the fetched products
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="data-container py-5 bg-light">
            <h1 className="text-center mb-4" style={{ fontSize: '36px', color: '#333' }}>
                Products API Using Fetch Method
            </h1>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover table-striped table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Stock</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products && products.map((product) => (
                                    <tr key={product.id}>
                                        <th scope="row">{product.id}</th>
                                        <td>
                                            <img
                                                src={product.thumbnail}
                                                alt={product.title}
                                                className="rounded"
                                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                            />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>${product.price}</td>
                                        <td>{product.rating}</td>
                                        <td>{product.stock}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
