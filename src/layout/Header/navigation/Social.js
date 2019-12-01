import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


// Styles

const SocialList = styled.ul`
   	margin: 6rem 0 0 0;
	padding: 0;
	list-style: none; 
`;


const SocialListItem = styled.li`
    display: inline-block;
    margin-right: 2rem;
`;


const SocialLink = styled.a`
    color: ${ props => transparentize( 0.2, props.theme.colors.light ) };

    transition: ${ props => props.theme.transitions.link };
	
	&:hover,
	&:focus {
		color: ${ props => props.theme.colors.light };
	}

    svg {
        font-size: 2rem;
    }
`;


const Social = () => {
    return (
        <SocialList>
            <SocialListItem>
                <SocialLink href="/">
                    <FontAwesomeIcon 
                        icon={["fab", "twitter"]}
                        fixedWidth 
                    />
                </SocialLink>
            </SocialListItem>
            <SocialListItem>
                <SocialLink href="/">
                    <FontAwesomeIcon 
                        icon={["fab", "facebook-f"]} 
                        fixedWidth
                    />
                </SocialLink>
            </SocialListItem>
            <SocialListItem>
                <SocialLink href="/">
                    <FontAwesomeIcon 
                        icon={["fab", "instagram"]} 
                        fixedWidth
                    />
                </SocialLink>
            </SocialListItem>
        </SocialList>
    );
};


export default Social;