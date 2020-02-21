/** @jsx jsx */
import cx from 'clsx';
import React from 'react';
import { jsx, Flex, NavLink } from 'theme-ui';

import { computeRangeWindow, generateItems, range } from '../utils/ranges';

const MAX_PAGES_SHOWN = 5;

const Step = ({ href, ...props }) => <NavLink p={2} href={props.disabled ? null : href} {...props} />

export default function Pager({
    currentPage: page,
    numPages: pageCount,
    pages = [],
    nextPage,
    prevPage
}) {
    const pageRange = (pageCount <= MAX_PAGES_SHOWN)
        ? range(0, pageCount)
        : computeRangeWindow(MAX_PAGES_SHOWN, page, pageCount);

    return pageCount <= 1 ? null : (
        <Flex as='nav' sx={{ justifyContent: 'center' }}>
            <Step disabled={page <= 1} href={pages[0]}>
                &laquo;
            </Step>
            <Step disabled={!prevPage} href={prevPage}>
                &lsaquo;
            </Step>

            {[...generateItems(pageRange, x => (
                <Step key={x} className={cx({ active: x === page })} href={pages[x - 1]}>
                    {x}
                </Step>
            ))]}

            <Step disabled={!nextPage} href={nextPage}>
                &rsaquo;
            </Step>
            <Step disabled={page >= pageCount} href={pages[pages.length - 1]}>
                &raquo;
            </Step>
        </Flex>
    );
}