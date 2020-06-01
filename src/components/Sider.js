import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
// I Will use mailOutLined on the future to make contact us page

const { SubMenu } = Menu;

const { Sider } = Layout;

function sider(){
    return(
       <Sider >
       <Menu  defaultSelectedKeys={['Dashboard']}
       mode="inline"
       >
       <Menu.Item key="Dashboard">
       Menu
       </Menu.Item>
           <SubMenu
            key="sub1"
            title={
                <span>
                    <AppstoreOutlined />
                    <span>My Menu</span>
                </span>
            }
           >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
    
       </Menu>
       </Sider>
    );
}
export default sider;