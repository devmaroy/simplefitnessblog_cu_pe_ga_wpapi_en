// import Navigation and Social... a tento sidebar vytvori to vysouvaci menu

import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Social from './Social';

const SidebarWrapper = styled.div`
    background: red;
`;

class Sidebar extends Component {
    render() {
        return (
            <SidebarWrapper>
                <Navigation />
                <Social />
            </SidebarWrapper>
        );
    }
}

export default Sidebar;