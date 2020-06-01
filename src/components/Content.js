import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Products from './Products.tsx'
import ProductList from './ProductList'
const { Content } = Layout;

function content(){
    return(
        <Content>Content

            <div style={{width:1000, height:500, backgroundColor:"white"}}>
                <ProductList 
                    products = {Products}
                />
            </div>
        </Content>
  );
  
  }
  export default content;