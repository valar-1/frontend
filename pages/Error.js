import React from 'react';
import Link from 'next/link';
import Button from "../components/common/Button";
import { RiReplyLine } from 'react-icons/ri'
import Copyright from "../components/common/Footer/Copyright";
import errorimg from '../public/images/404-img.png'

const state = {
    img: errorimg
}
function Error() {
    return (
        <main className="error-page">
            <section className="error-area padding-top-140px">
                <div className="error-shape"></div>
                <div className="error-actions">
                    <ul>
                        <li><Link href="/">Back to Home</Link></li>
                        <li><Link href="/faq">Help</Link></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                                <div className="error-content text-center">
                                    <div className="section-heading padding-top-30px">
                                        <h3 className="sec__title pt-0 before-none">frick! not found.</h3>
                                        <p className="sec__desc">
                                            The page you are looking for might have been removed,
                                            had its name changed, or is temporarily unavailable.
                                            You can check out our{' '}
                                            <Link href="/faq" className="color-text">
                                                Help Center
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Copyright />
                </div>

            </section>
        </main>
    );
}

export default Error;
