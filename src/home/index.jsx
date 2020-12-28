import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/card";
import Loading from "../components/loading";

import { HZAPIHook } from "../hz";

const Home = () => {
  const url = "https://simplemaps.com/static/data/country-cities/mm/mm.json";

  const countryState = HZAPIHook(url);

  return (
    <>
      {countryState.loading && <Loading />}
      {countryState.error && <p>I M an error</p>}
      {countryState.data &&
        countryState.data.map((item) => (
          <Link
            data-testid="location"
            to={`${process.env.PUBLIC_URL}/detail/${item.lat}/${item.lng}`}
            key={`${item.population}-${item.city}`}
          >
            <Card name={item.city} population={item.population} />
          </Link>
        ))}
    </>
  );
};

export default Home;
