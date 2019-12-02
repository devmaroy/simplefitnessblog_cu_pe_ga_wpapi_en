import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';


// Styles

const PaginationList = styled.ul`
    margin: 0;
    padding: 0;
    margin-top: 8rem;
    list-style: none;
    text-align: center;
`;


const PaginationItem = styled.li`
    display: inline-block;
    margin-right: .5rem;
    text-align: center;
    line-height: 1.5;
`;


const PaginationLink = styled( Link )`
    display: inline-block;
    text-decoration: none;
    width: 2rem;
    height: 2rem;
    padding: 1rem;
    border-radius: ${ props => props.theme.base.borderRadius };
    background: ${ props => props.styled.isCurrent ? darken( 0.05, props.theme.colors.secondary ) : props.theme.colors.secondary };
    color: ${ props => props.theme.colors.light };

    transition: ${ props => props.theme.transitions.link };

    &:hover,
    &:focus {
        background: ${ props => darken( 0.05, props.theme.colors.secondary ) };
    }
`;


// Default props 

PaginationLink.defaultProps = {
    styled: {
        isCurrent: false
    }
}


const Pagination = ( { numberOfPages, currentPage, prefix } ) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const previousPage = currentPage - 1 === 1 ? `/${ prefix }` : `/${ prefix }/${ currentPage - 1 }`;
    const nextPage = `/${ prefix }/${ currentPage + 1 }`;
    
    return (
        <PaginationList>
            {
                ! isFirst && (
                    <PaginationItem>
                        <PaginationLink to={ previousPage }>
                            &lt; 
                        </PaginationLink>
                    </PaginationItem>
                )   
            }
            {
                Array.from( { length: numberOfPages } ).map( ( _, i ) => (
                    <PaginationItem key={ i }>
                        <PaginationLink
                            key={ i }
                            to={ i === 0 ? `/${ prefix }` : `/${ prefix }/${ i + 1 }` }
                            styled={ { isCurrent: i + 1 === currentPage } }
                        >
                            { i + 1 }
                        </PaginationLink>
                    </PaginationItem>
                ))
            }
            {
                ! isLast && (
                    <PaginationItem>
                        <PaginationLink to={ nextPage }>
                            &gt; 
                        </PaginationLink>
                    </PaginationItem>
                )
            }
        </PaginationList>
    );
};


export default Pagination;