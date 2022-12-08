import { HTMLAttributes } from 'react';

export default function PageWrapper({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="">
            <main className="">{children}</main>
        </div>
    );
}
