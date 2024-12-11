// Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';  // Import the CSS file for styling

const Products = ({ addToCart }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/products/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const fetchProductsByCategory = async (category) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/products/category/${category}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        fetchProductsByCategory(category);
    };

    const handleAddToCart = (product) => {
        if (addToCart) {
            addToCart(product);
        } else {
            console.error('addToCart function is not defined');
        }
    };

    return (
        <div className="products-container">
            <div className="categories-section">
                <h3 className="section-title">Categories</h3>
                {categories.map((category) => (
                    <button key={category} className="category-button" onClick={() => handleCategoryClick(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="products-section">
                
                {products.length === 0 ? (
                    <p className="no-products-message">No products available in this category</p>
                ) : (
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            <h4 className="product-name">{product.name}</h4>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">Price: {product.price}/-</p>
                            <img src={product.imageUrl} alt={product.name} className="product-image" />
                            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Products;
