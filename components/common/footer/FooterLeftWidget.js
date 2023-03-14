import React from 'react';
import Logo from "../Logo";
import SocialProfile from "../../other/account/SocialProfile";

function FooterLeftWidget({Footerleftcnts}) {
    return (
        <>
            <div> 
                <div className="Footer-item">
                        <SocialProfile socials={Footerleftcnts.sociallinks} />
                </div>
            </div>
        </>
    );
}

export default FooterLeftWidget;
