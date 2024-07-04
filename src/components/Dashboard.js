import React, { useState } from 'react';
import ProductList from './ProductList';

const Dashboard = () => {
    //Initialize the products array in State.
    const [products] = useState([
        { id: 1, name: 'Apple Smartwatch Ultra 2 Alpine Loop' },
        { id: 2, name: 'Titan Smart 3 Premium Smartwatch' },
        { id: 3, name: 'Samsung Galaxy Fit 5 Smartwatch' },
        { id: 4, name: 'Fasttrack Pro Premium Smartwatch' },
        { id: 5, name: 'OnePlus Nord Smartwatch' },
        { id: 6, name: 'boAt Wave Sigma 3 Smartwatch' },
        { id: 7, name: 'Pebble Cosmos Unisex Smartwatch' },
        { id: 8, name: 'Noise ColorFit Icon Plus Smartwatch' }
    ]); 

    //State to hold the search term.
    const [searchTerm , setSearchTerm] = useState ('');

    //Function to handle filtering products based on search term.
     const handleFilter = (event) => {
        setSearchTerm(event.target.value);
    };
 
    return(
        <div className ='dashboard'>
            <input
              type = "text"
              placeholder = "Search for a Product by ID or Name"
              value = {searchTerm}
              onChange = {handleFilter}
              className = "search-input"
            />
            <ProductList products = {products} searchTerm = {searchTerm} />
        </div>
    );
};

export default Dashboard;
