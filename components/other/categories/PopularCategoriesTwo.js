import React from 'react';
import Link from 'next/link';

function PopularCategoriesTwo({catitems, title}) {
    return (
        <>
            <ul className="tag-list">
                {
                    title ?
                    <li className="font-weight-semi-bold color-text-2">{title}</li>
                    : ''
                }
                {catitems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={item.url} className="radius-rounded line-height-20">
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default PopularCategoriesTwo;
