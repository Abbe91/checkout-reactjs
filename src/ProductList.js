import React from 'react';
import ReactDOM from 'react-dom'
import ButtonArea from './ButtonArea';
import ProductName from './ProductName';
import ProductImage from './ProductImage'
function ProductList(props){
    let products = props.products;

        let ProductListStyle = {
        display: 'inline-block',
        margin: 10,
        height: 300,
        width: 200,
        padding: 0,
        backgroundColor: '#FFF',
        WebkitFilter: "drop-shadow(0px 0px 5px #555)",
        filter: "drop-shadow(0px 0px 5px #555)",
        };

    let singleItem= props.products.map(function(item){
  

        return  <div key = {item.name} style={ProductListStyle}>
                    <div style = {{backgroundColor: 'lightgrey'}}>
                        <ProductImage img = {item.img}/>
                        <hr/>
                    </div>
                    <ProductName name = {item.name}/>
                    <ButtonArea/>
                 </div>
        
    });

    return(
        
        <div>
        {singleItem}
        </div>
    );
}

export default ProductList;