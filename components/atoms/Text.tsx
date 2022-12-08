import { createElement, HTMLAttributes } from 'react';

export default function Text({ children, ...rest }: HTMLAttributes<HTMLElement>) {
    return createElement('p', { ...rest }, children);
}
