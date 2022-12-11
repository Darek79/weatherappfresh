import { HTMLAttributes } from 'react';

export default function PageWrapper({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...rest}>
            <main className="min-h-screen w-full max-w-screen-xl grid gap-2 m-auto py-4">{children}</main>
        </div>
    );
}
