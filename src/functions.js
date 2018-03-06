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