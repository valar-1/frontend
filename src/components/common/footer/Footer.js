import React from 'react';
import Copyright from "./Copyright";
import FooterLeftWidget from "./FooterLeftWidget";
import FooterQuickLinkWidget from "./FooterQuickLinkWidget";
import FooterCategoryWidget from "./FooterCategoryWidget";
import FooterContactWidget from "./FooterContactWidget";
import sectiondata from "../../../store/store";

function Footer() {
    return (
        <>
            <section className="footer-area">
                <div className="container">
                    {/* Copyright */}
                    <Copyright />
                </div>
            </section>
        </>
    );
}

export default Footer;
