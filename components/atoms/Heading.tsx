import classNames from 'classnames';
import { createElement, HTMLAttributes } from 'react';
import { IHeadings } from 'types/headings';

interface IHeadingsElement extends HTMLAttributes<HTMLElement> {
    htmlTag: IHeadings;
    styles?: string;
}

export default function Heading({ htmlTag, styles, children, ...rest }: IHeadingsElement) {
    const TextClasses = classNames({
        'text-2xl': htmlTag === 'h2',
        'text-lg': htmlTag === 'h3',
        [`${styles}`]: styles,
    });
    return createElement(htmlTag, { className: TextClasses, ...rest }, children);
}
