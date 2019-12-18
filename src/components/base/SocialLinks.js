import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SocialIcon from './SocialIcon';


// Styles

const SocialList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;


const SocialListItem = styled.li`
    display: inline-block;

    &:not( :last-child ) {
        margin-right: 1.5rem;
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


const SocialLinks = ( { links, type, fixedWidth } ) => (
    <SocialList>
        {
            links.filter( ( { url } ) => url !== '' )
                .map( ( { title, url }) => (
                    <SocialListItem key={ title }>
                        <SocialLink href={ url }>
                            <SocialIcon icon={ title } type={ type } fixedWidth={ fixedWidth } />
                        </SocialLink>
                    </SocialListItem>
                ))
        }
    </SocialList>
);


SocialLinks.propTypes = {
    links: PropTypes.array.isRequired,
    type: PropTypes.string,
    fixedWidth: PropTypes.bool,
};


export default SocialLinks;