import React, { Fragment } from "react";

import { Hero } from "../components";
import { HomeContent } from "../components";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <HomeContent />
  </Fragment>
);

export default Home;