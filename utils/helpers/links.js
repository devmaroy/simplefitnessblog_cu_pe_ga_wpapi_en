// Remove base url from path
// We need this because we use gatsby link and we can't use absolute urls
// e.q. https://mywebsite.com/about-me => /about-me
export const createLocalLink = ( url, wordpressUrl ) => {
    if ( '#' === url ) {
        return url;
    }

    return url.replace( wordpressUrl, '' );
}


// Check if provided url is absolute url and if this url is external url
// e.q. https://google.com will be matched as external link (true) but https://mywebsite.com/about-me not because it's our own website
export const isExternalLink = ( url, wordpressUrl ) => {
    return url.indexOf( wordpressUrl ) === -1 && ( url.indexOf('://') > 0 || url.indexOf('//') === 0 );
};