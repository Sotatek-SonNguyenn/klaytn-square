import { Col, Menu, Row, Button } from 'antd';
import React from 'react';
import Wallet from '../ConnectWallet';
import logo from 'assets/logo-square.png';
import { NavLink } from 'react-router-dom';
const items = [
  { label: 'Home', to: '/' },
  // { label: 'About us', to: '/about' },
  // { label: 'Governance Agenda', to: '/governance-agenda' },
  { label: 'Governance Council', to: '/governance-council' },
  // { label: 'Community', to: '/community' },
  { label: 'My Page', to: '/my-page' }
];

const NavBar: React.FC = () => {
  return (
    <Row>
      <Col span={5}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={9}>
        <Menu mode="horizontal">
          {items.map((item) => {
            return (
              <Menu.Item key={item.label}>
                <NavLink style={{ color: '#fff' }} to={item.to}>
                  {item.label}
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </Col>
      <Col span={10} style={{ textAlign: 'end' }}>
        <Wallet />
      </Col>
    </Row>
  );
};

export default NavBar;
