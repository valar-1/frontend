import React from 'react';
import Link from 'next/link';

function Breadcrumb ({CurrentPgTitle, MenuPgTitle, }) {
    return (
        <>
            <section className="breadcrumb-area" style={{}}>
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content">
                                    <h2 className="breadcrumb__title">
                                        {CurrentPgTitle}
                                    </h2>
                                    <ul className="breadcrumb__list">
                                        <li className="active__list-item"><Link href="/">home</Link></li>
                                        {MenuPgTitle? (
                                            <li className="active__list-item">{MenuPgTitle}</li>
                                        ) : ''}

                                        <li>
                                            {CurrentPgTitle}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                          </section>
        </>
    );
}

export default Breadcrumb;