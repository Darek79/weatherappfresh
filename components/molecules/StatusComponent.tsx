import { HTMLAttributes } from 'react';
import { PageWrapper, Box } from 'components';

interface IStatusComponent extends HTMLAttributes<HTMLDivElement> {
    message?: string;
}
export default function StatusComponent({ message, children, ...rest }: IStatusComponent) {
    return (
        <PageWrapper {...rest}>
            <Box className="m-auto font-bold">{message}</Box>
            {children}
        </PageWrapper>
    );
}
// className="bg-pageBG flex justify-center"
