import React from 'react';
import Logo from "../Logo";
import SocialProfile from "../../other/account/SocialProfile";

function FooterLeftWidget({footerleftcnts}) {
    return (
        <>
            <div> 
                <div className="footer-item">
                        <SocialProfile socials={footerleftcnts.sociallinks} />
                </div>
            </div>
        </>
    );
}

export default FooterLeftWidget;
