import React from 'react';
import {FiRefreshCw} from "react-icons/fi";
import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import PlaceListing from "../../components/places/PlaceListing";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/Footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GenericHeader from "../../components/common/GenericHeader";
import breadcrumbimg from '../../public/images/bread-bg.jpg'
import sectiondata from "../../data/store";

const state = {
    breadcrumbimg: breadcrumbimg,
}
function ListingList() {
    return (
        <main className="listing-list">
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Listing List" MenuPgTitle="Listings" img={state.breadcrumbimg} />

            {/* Place List */}
            <section className="card-area padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <GenericHeader />
                        </div>

                        <div className="col-lg-8">
                            <PlaceListing listitems={sectiondata.listing.listinglists} />
                        </div>

                        <div className="col-lg-4">
                            <ListingListSidebar />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="button-shared text-center">
                                <Button text="load more" url="#" className="border-0">
                                    <span className="d-inline-block">
                                        <FiRefreshCw />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
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

export default ListingList;
