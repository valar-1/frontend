import React from 'react';
import Link from 'next/link';

function SocialProfile({socials}) {
    return (
        <>
            <ul className="social-profile padding-top-30px padding-bottom-30px">
                {socials.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link href={item.url}>
                                <i className="fa">{item.icon}</i>
                            </Link>
                         </li>
                    )
                })}
            </ul>
        </>
    );
}

export default SocialProfile;
