import React from 'react';
import SiteInfo from './SiteInfo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <SiteInfo />
            <Navigation />
        </header>
    );
};

export default Header;