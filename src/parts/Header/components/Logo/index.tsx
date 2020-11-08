import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


type LogoProps = {
    size: number;
    className?: string;
}

const Logo = ({className, size}: LogoProps) => (
    <Link href="/catalog">
        <a className={className}>
            <Image
                src="/logo.png"
                alt="logo"
                width={size}
                height={size}
            />
        </a>
    </Link>
);


export default Logo;
