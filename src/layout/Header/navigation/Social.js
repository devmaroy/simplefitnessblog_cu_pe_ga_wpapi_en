import React from 'react';
import styled from 'styled-components';


// Styles

const SocialList = styled.ul`
   	margin: 0;
	padding: 0;
	list-style: none; 
`;

const SocialLink = styled.a`

`;

const Social = () => {
    return (
        <SocialList>
            <li>
                <SocialLink href="/">Twitter</SocialLink>
            </li>
            <li>
                <SocialLink href="/">Facebook</SocialLink>
            </li>
            <li>
                <SocialLink href="/">Instagram</SocialLink>
            </li>
        </SocialList>
    );
};

export default Social;