import React from 'react';

function FooterQuickLinkWidget({Footerquicklink}) {
    return (
        <>
            <div className="col-lg-3 column-td-6">
                <div className="Footer-item">
                    <h4 className="Footer__title">
                        {Footerquicklink.title}
                    </h4>
                    <ul className="list-items">
                        {Footerquicklink.links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link href={link.path}>
                                    {link.text}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default FooterQuickLinkWidget;
