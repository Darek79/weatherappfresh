import { Text, Box } from 'components';
import Image, { ImageProps } from 'next/image';
import { HTMLAttributes } from 'react';

interface IIconText extends HTMLAttributes<HTMLDivElement> {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
    imageProps: Omit<ImageProps, 'src' | 'alt'>;
}

export default function IconText({ src, alt, imageProps, children, ...rest }: IIconText) {
    return (
        <Box {...rest}>
            <Image src={src} alt={alt} {...imageProps} />
            {children}
        </Box>
    );
}
