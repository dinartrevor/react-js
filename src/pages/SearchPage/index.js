import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import SearchColumn from "../../components/searchcolumn/SearchColumn.jsx";

const SearchPage = () => {
  return (
    <div>
      <Navbar fix={false} />
      <Sidebar />
      <Hero showbtn={false} />
      <SearchColumn />
      <Footer />
    </div>
  );
};

export default SearchPage;
