import React from 'react';
import Link from 'next/link';

function FooterCategoryWidget({Footercategory}) {
    return (
        <>
            <div className="col-lg-3 column-td-6">
                <div className="Footer-item">
                    <h4 className="Footer__title">
                        {Footercategory.title}
                    </h4>
                    <ul className="list-items">
                        {Footercategory.links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link href={link.path}>{link.text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default FooterCategoryWidget;
