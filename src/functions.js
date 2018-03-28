import React from 'react';
import { Sticky } from 'react-sticky';

export function createMarkup(html) {
    return {__html: html};
}

export function drawSticky(stickyComponent) {
    return (
        <Sticky>
            {
                ({
                     style,

                     // the following are also available but unused in this example
                     isSticky,
                     wasSticky,
                     distanceFromTop,
                     distanceFromBottom,
                     calculatedHeight
                 }) => {
                    return (
                        <div style={style} className={isSticky ? 'sticky' : 'sticky-default'}>
                            {stickyComponent}
                        </div>
                    )
                }
            }
        </Sticky>);
}

export function getPageDataBySlug(pages = [], slug = '') {
    if (pages && pages.length && slug) {
        let currentPage = '';
        pages.map((page) => {
            if (page.slug === slug) currentPage = page;
            return false;
        });
        return currentPage;
    } else {
        return null;
    }
}