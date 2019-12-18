import React from 'react';
import PropTypes from 'prop-types';
import { allPostPropTypes } from '../../propTypeValues';
import styled from 'styled-components';
import Hero from './Hero';


// Styles

const Article = styled.article`
    display: flex;
`;


const Preview = ( { post } ) => {
    return (
        <Article>
            <Hero post={ post } />
        </Article>
    );
};


// Proptypes
Preview.propTypes = {
    post: PropTypes.shape({
        ...allPostPropTypes
    }).isRequired,
};


export default Preview;