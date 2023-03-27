import React from 'react';
import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import Locations from "../../components/other/categories/Locations";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/Footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from '../../public/images/bread-bg.jpg'
import sectiondata from "../../data/store";

const state = {
    breadcrumbImg: breadcrumbimg,
}
function AllLocations() {
    return (
        <main className="all-locations">
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="All Locations" MenuPgTitle="Categories" img={state.breadcrumbImg} />

            {/* Locations */}
            <section className="location-area padding-top-50px padding-bottom-50px">
                <div className="container">
                    <Locations locationitems={sectiondata.locations} />
                </div>
            </section>

            {/* Newsletter */}
            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />
        </main>
    );
}

export default AllLocations;
