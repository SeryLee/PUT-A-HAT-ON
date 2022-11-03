import React from 'react';
import { Menu } from 'antd';
import { types } from '../../AllProductPage/Sections/Datas';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {

  return (
    <div className='leftmenu'>
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/about">About</a>
        </Menu.Item>
        <SubMenu title={<span>Shop</span>}>
          <MenuItemGroup title="Shopping!">
            <Menu.Item key="setting:1">
              <a href="/product/shop">All</a>
            </Menu.Item>
            <Menu.Item key="setting:2"><a href={`/product/shop/${types[0]._id}`}>Baseball</a></Menu.Item>
            <Menu.Item key="setting:3"><a href={`/product/shop/${types[1]._id}`}>Bucket hat</a></Menu.Item>
            <Menu.Item key="setting:4"><a href={`/product/shop/${types[2]._id}`}>Beret</a></Menu.Item>
            <Menu.Item key="setting:5"><a href={`/product/shop/${types[3]._id}`}>Beanie</a></Menu.Item>
            <Menu.Item key="setting:6"><a href={`/product/shop/${types[4]._id}`}>Fedora</a></Menu.Item>
            <Menu.Item key="setting:7"><a href={`/product/shop/${types[5]._id}`}>Trapper</a></Menu.Item>
            <Menu.Item key="setting:8"><a href={`/product/shop/${types[6]._id}`}>Other</a></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default LeftMenu