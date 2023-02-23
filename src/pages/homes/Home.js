import React  from 'react'
import GeneralHeader from '../../components/common/GeneralHeader'
import BannerOne from '../../components/banner/banner1/BannerOne'
import Testimonial from "../../components/sliders/Testimonial";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import SectionsHeading from "../../components/common/SectionsHeading";
import PopularCategories from "../../components/other/categories/PopularCategories";
import HowItWorkOne from "../../components/hiw/hiw1/HowItWorkOne";
import FunFactsOne from "../../components/other/funfacts/funfacts1/FunFactsOne";
import CtaOne from "../../components/other/cta/CtaOne";
import LatestBlog from "../../components/blogs/LatestBlog";
import Button from "../../components/common/Button";
import SectionDivider from "../../components/common/SectionDivider";
import InfoBox3 from "../../components/other/infoboxes/InfoBox3";
import sectiondata from "../../store/store";
import BannerOneCategories from "/Users/thomivy/Desktop/Valar/valar-frontend/src/components/banner/banner1/BannerOneCategories.js"
import PlaceGrid from '../../components/places/PlaceGrid';

function Home() {
    return (
        <main className="home-1">
            {/* Header Nav */}
            <GeneralHeader />

            {/* Hero Banner */}
            <BannerOne />

            {/* Grid of Places */}
            
            <section className="card-area text-center padding-bottom-100px">
                <div className="container">
                    
                            {/* Banner One Categories */}
                            <BannerOneCategories
                                title={sectiondata.categories.featuredcategories.title}
                                items={sectiondata.categories.featuredcategories.items}
                                connector={sectiondata.categories.featuredcategories.connector}
                            />


                       {/* Place Grid */}
            <section className="card-area padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <PlaceGrid griditems={sectiondata.placesgrid} />
                    </div>
                </div>
            </section>
                </div>
            </section>



            {/* Footer */}
            <Footer />

            <ScrollTopBtn />
        </main>
    )
}

export default Home;
