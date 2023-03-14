import React from 'react';
import Header from "../components/common/Header";
import Breadcrumb from "../components/common/Breadcrumb";
import RecoverPassBox from "../components/other/account/RecoverPassBox";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from '../public/images/bread-bg.jpg'
import sectiondata from "../data/store";

const state = {
    breadcrumbimg: breadcrumbimg,
}
function RecoverPassword() {
    return (
        <main className="recover-pass-page">
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Recover Password" MenuPgTitle="Pages" img={state.breadcrumbimg} />

            <RecoverPassBox />

            {/* Newsletter */}
            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default RecoverPassword;
