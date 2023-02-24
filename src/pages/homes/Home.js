import React  from 'react'
import GeneralHeader from '../../components/common/GeneralHeader'
import BannerOne from '../../components/banner/banner1/BannerOne'
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
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
