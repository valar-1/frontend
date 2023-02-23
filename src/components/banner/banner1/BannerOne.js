import React from 'react'
import BannerOneHeroHeading from './BannerOneHeroHeading'
import BannerOneCategories from './BannerOneCategories'
import sectiondata from "../../../store/store";

export default function BannerOne() {
    return (
        <>
            <section className="hero-wrapper" style={{backgroundImage: 'url('+sectiondata.herobanners.banner1.bgimage+')'}}>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heroBorderBox">
                            {/* Banner One Hero Heading */}
                            <BannerOneHeroHeading
                                titlePrefix={sectiondata.herobanners.banner1.titlePrefix}
                                content={sectiondata.herobanners.banner1.content}
                                titleHighlight={sectiondata.herobanners.banner1.titleHighlight}
                                titleSuffix={sectiondata.herobanners.banner1.titleSuffix} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
