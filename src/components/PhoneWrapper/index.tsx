import React, {useRef} from 'react';

import {isPhoneSize} from '@/util/isPhoneSize';
import {copyElementContent} from '@/util/copyElementContent';


type PhoneWrapperProps = {
    phone: string;
    className?: string;
}

const PhoneWrapper = ({
    phone,
    className,
}: PhoneWrapperProps) => {
    const wrapperRef = useRef<HTMLAnchorElement | null>(null);

    const handleClick = (e: React.SyntheticEvent<HTMLElement>) => {
        e.preventDefault();

        if (isPhoneSize(document.documentElement.clientWidth)) {
            const tempAnchor = document.createElement('a');

            tempAnchor.href = `tel:${phone}`;

            tempAnchor.click();
        } else if (wrapperRef.current){
            copyElementContent(e.currentTarget);
        }
    };

    return (
        <a
            href=""
            ref={wrapperRef}
            className={className}
            onClick={handleClick}
        >
            {phone}
        </a>
    );
};

export default PhoneWrapper;
