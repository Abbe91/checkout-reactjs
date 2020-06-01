import React from 'react';
import './App.css';
import { Layout, Avatar } from 'antd';

import Title from 'antd/lib/typography/Title'
const { Header } = Layout;

function header(){
  return(
<Header style={{padding:10}} > 
<Avatar style={{float:'right'}} src="cart.png" />
  <Title style={{color:'white'}} level={3}>Checkout-Reactjs</Title>
</Header>
);

}
export default header;