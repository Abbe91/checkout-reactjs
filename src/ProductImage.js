import React from 'react';
function ProductImage(props){

    let imageStyle={
        marginLeft: 25,
        marginTop: 20,
        width: 150,
        height: 150,
        borderRadius: "50%",
        objectFit: 'cover',
        backgroundColor: 'grey'
    }
    return(
        <img src={props.img} alt="profilepic" style={imageStyle}/>
    );
}

export default ProductImage;