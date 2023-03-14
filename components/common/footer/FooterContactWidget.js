import React from 'react';

function FooterContactWidget({Footercontact}) {
    return (
        <>
            <div className="col-lg-3 column-td-6">
                <div className="Footer-item">
                    <h4 className="Footer__title">
                        {Footercontact.title}
                    </h4>
                    <ul className="info-list contact-links">
                        {Footercontact.lists.map((list, index) => {
                            return (
                                <li key={index}>
                                    <span className="la">
                                        {list.icon}
                                    </span> {list.text}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default FooterContactWidget;
