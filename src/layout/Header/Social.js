import React from 'react';
import styled from 'styled-components';
import SocialIcon from './SocialIcon';


// Styles

const SocialList = styled.ul`
    list-style: none;
    margin: 3rem 0 0 0;
    padding: 0;
`;


const SocialListItem = styled.li`
    display: inline-block;

    &:not( :last-child ) {
        margin-right: 2rem;
    }
`;


const SocialLink = styled.a`
    color: ${ props => props.theme.colors.dark };

    transition: ${ props => props.theme.transitions.link };

    &:hover,
    &:focus {
        color: ${ props => props.theme.colors.primary };
    }
`;


const Social = ( { links, type, fixedWidth } ) => {
    return (
        <SocialList>
            {
                links.map( ( { title, url } ) => {
                    if ( url ) {
                        return (
                            <SocialListItem key={ title }>
                                <SocialLink href={ url }>
                                    <SocialIcon icon={ title } type={ type } fixedWidth={ fixedWidth } />
                                </SocialLink>
                            </SocialListItem>
                        )
                    }
                })
            }
        </SocialList>
    );
};


export default Social;