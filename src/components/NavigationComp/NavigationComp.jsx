import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './NavigationComp.css';

const { Item } = Menu;

const NavigationComp = () => {
    return (
        <div className="NavigationComp">
            <Menu mode="horizontal">
                <Item>
                    <Link to="/">Home</Link>
                </Item>
                <Item>
                    <Link to="/history">History</Link>
                </Item>
            </Menu>
        </div>
    );
};

export default NavigationComp;
