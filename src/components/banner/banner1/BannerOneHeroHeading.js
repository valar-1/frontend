import React from 'react'

export default function BannerOneHeroHeading({titlePrefix, content, titleHighlight, titleSuffix}) {
    return (
        <>
            <div className="hero-heading">
                <div className="section-heading">
                    <h2 className="sec__title cd-headline zoom">
                        {titlePrefix}
                        <span className="cd-words-wrapper">
                            {titleHighlight.map((item, index) => {
                                return (
                                    <b className={item.active ? 'is-visible' : ' '} key={index}> {item.text}</b>
                                )
                            })}
                        </span>
                        {titleSuffix}
                    </h2>
                    <p className="sec__desc">
                        {content}
                    </p>
                </div>
            </div>
        </>
    )
}
