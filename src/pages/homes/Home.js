import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import AnnouncementBar from '../../components/common/AnnouncementBar';  // import AnnouncementBar component
import Footer from '../../components/common/footer/Footer';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import sectiondata from '../../store/store';
import CategoriesFilterBar from '../../components/common/CategoriesFilterBar';
import PlaceGrid from '../../components/places/PlaceGrid';

function Home({ search }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredGridItems, setFilteredGridItems] = useState(sectiondata.placesgrid);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredGridItems(sectiondata.placesgrid);
    } else {
      setFilteredGridItems(sectiondata.placesgrid.filter((item) => {
        return item.categories && item.categories.includes(selectedCategory);
      }));
    }
  }, [selectedCategory, sectiondata.placesgrid]);

  return (
    <main className="home">

      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Header / Nav */}
      <Header />

      {/* Listings */}
      <section className="card-area text-center padding-bottom-100px">
        <div className="fluid-80pxPadding-container">
          {/* Category Filter */}
          <CategoriesFilterBar
            title={sectiondata.categories.featuredcategories.title}
            items={sectiondata.categories.featuredcategories.items.map((category) => ({
              text: category.displaytitle,
              value: category.name,
            }))}
            onCategorySelect={handleCategorySelect}
          />

          {/* Place Grid */}
          <PlaceGrid griditems={filteredGridItems} />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default Home;
