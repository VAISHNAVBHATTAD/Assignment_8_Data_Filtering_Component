import React from 'react';

//ProductList component that receives products and searchTerm as props.
const productList =({ products , searchTerm}) => {

//Filter the products based on searchTerm.
   const filteredProducts = products.filter (product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toString().includes(searchTerm)
   );

   return(
    <div className = "product-list">
        {filteredProducts.length > 0 ? (
            filteredProducts.map ((product) => (
                <div key = {product.id} className ="product-item">
                    <div> {`${product.id} : ${product.name}`}</div> 
                </div>    
            ))
            
        ) : (
            <div> No products found </div>
        )}
    </div>
   );
};

export default productList;