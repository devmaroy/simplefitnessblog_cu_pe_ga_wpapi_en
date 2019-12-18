import PropTypes from 'prop-types';

const ConditionalWrapper = ( { condition, wrapper, children }) => condition ? wrapper( children ) : children;


ConditionalWrapper.propTypes = {
    condition: PropTypes.bool,
    wrapper: PropTypes.func,
    children: PropTypes.element,
};


export default ConditionalWrapper;