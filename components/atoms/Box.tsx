import { HTMLAttributes } from 'react';

export default function Box({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return <div {...rest}>{children}</div>;
}
