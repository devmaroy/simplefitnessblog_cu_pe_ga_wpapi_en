import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// Styles

const SocialList = styled.ul`
    list-style: none;
    margin: 6rem 0 0 0;
    padding: 0;

    @media ( min-width: 858px ) {
        margin: 0 0 0 6rem;
    }
`;


const SocialListItem = styled.li`
    display: inline-block;

    &:not( :last-child ) {
        margin-right: 2rem;
    }
`;


const SocialLink = styled( Link )`
    color: ${ props => transparentize( 0.2, props.theme.colors.veryLightGray ) };

    transition: ${ props => props.theme.transitions.link };

    &:hover,
    &:focus {
        color: ${ props => props.theme.colors.veryLightGray };
    }

    svg {
        font-size: 1.6rem;
    }
`; 


const Social = () => {
    return (
        <div>
            <SocialList>
                <SocialListItem>
                    <SocialLink to="/">
                        <FontAwesomeIcon 
                            icon={["fab", "twitter"]}
                            fixedWidth 
                        />
                    </SocialLink>
                </SocialListItem>
                <SocialListItem>
                    <SocialLink to="/">
                        <FontAwesomeIcon 
                            icon={["fab", "facebook-f"]}
                            fixedWidth 
                        />
                    </SocialLink>
                </SocialListItem>
                <SocialListItem>
                    <SocialLink to="/">
                        <FontAwesomeIcon 
                            icon={["fab", "instagram"]}
                            fixedWidth 
                        />
                    </SocialLink>
                </SocialListItem>
            </SocialList>
        </div>
    );
};

export default Social;  