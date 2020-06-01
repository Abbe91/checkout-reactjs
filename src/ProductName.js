import React from 'react';

function ProductName(props){
    let productnameStyle ={
        fontSize: 24,
        textAlign: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: 20,
        
    }
    return(
        <h1 style = {productnameStyle}> {props.name}</h1>
    );
}

var iconStyle = {
    margin: 20
}

export default ProductName;