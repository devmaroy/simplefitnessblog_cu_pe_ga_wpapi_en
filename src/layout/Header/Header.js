import React from 'react';
import SiteLogo from './SiteLogo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <SiteLogo />
            <Navigation />
        </header>
    );
};

export default Header;