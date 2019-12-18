import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


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
    margin-right: .8rem;
    text-align: center;
`;


const PaginationLink = styled( Link )`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: ${ props => props.theme.base.borderRadius };
    background: ${ props => props.styled.isCurrent ? props.theme.colors.pagination : 'none' };
    color: ${ props => props.theme.colors.lightGray };
    font-weight: ${ props => props.theme.fonts.weights.bold };

    transition: ${ props => props.theme.transitions.general };

    &:hover,
    &:focus {
        background: ${ props => props.theme.colors.pagination };
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