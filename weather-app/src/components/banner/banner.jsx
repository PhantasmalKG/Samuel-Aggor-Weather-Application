import React from "react";
import Logo from "../logo/logo";
import Options from "../options/options";
import QueryResults from "../query/queryresults";

import "../banner/banner.css";

const banner = () => {
  return (
    <header className="banner_container">
      <Logo />
      <QueryResults />
      <Options />
    </header>
  );
};

export default banner;
