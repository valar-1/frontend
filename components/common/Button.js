import React from 'react';
import Link from 'next/link';

export default function Button({text, url, className, children}) {
    return (
        <>
            <Link href={url} className={'theme-btn ' + className}>{children} {text}</Link>
        </>
    );
}
