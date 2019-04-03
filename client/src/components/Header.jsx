import React from 'react';
import logo from '../assets/logo.svg';

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="enovos logo" />
            </div>
        </div>
    );
}
