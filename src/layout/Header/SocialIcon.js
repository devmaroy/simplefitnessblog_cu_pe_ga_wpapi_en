import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialIcon = ( { icon, type, fixedWidth } ) => {
    icon = icon.toLowerCase();

    const squareIcons = {
        facebook: 'facebook-square',
        twitter: 'twitter-square',
        linkedin: 'linkedin',
        youtube: 'youtube-square',
        instagram: 'instagram'
    }

    const normalIcons = {
        facebook: 'facebook-f',
        twitter: 'twitter',
        linkedin: 'linkedin-in',
        youtube: 'youtube',
        instagram: 'instagram'
    }

    const renderIcon = ( type ) => {
        switch ( type ) {
            case 'square':
                return <FontAwesomeIcon icon={ [ "fab", squareIcons[ icon ] ] } fixedWidth={ fixedWidth } />
            default:
                return <FontAwesomeIcon icon={ [ "fab", normalIcons[ icon ] ] } fixedWidth={ fixedWidth } />
        }

    }

    return (
        <div>
            { renderIcon( type ) }
        </div>
    );
};


// Default props

SocialIcon.defaultProps = {
    type: 'normal',
    fixedWidth: false
}


export default SocialIcon;