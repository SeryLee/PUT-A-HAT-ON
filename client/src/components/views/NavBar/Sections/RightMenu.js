/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Badge, Icon } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div className='rightmenu'>
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Login</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Signup</a>
        </Menu.Item>
      </Menu>
      </div>
    )
  } else if (user.userData && user.userData.isAuth && user.userData.email == 'admin@gmail.com') {
    return (
      <div className='rightmenu'>
      <Menu mode={props.mode}>
        <Menu.Item key="upload">
          <a href="/product/upload">Upload</a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
      </div>
    )
  } else {
    return (
      <div className='rightmenu'>
      <Menu mode={props.mode}>
        <Menu.Item key="history">
          <a href="/history">History</a>
        </Menu.Item>
        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href='/user/cart' style={{ marginRight: -20, color: '#667777' }}>
              <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}

export default withRouter(RightMenu);

