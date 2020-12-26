import React from "react";
import { Link } from "react-router-dom";
import { useReducerAPI } from "../api";

import Card from "../components/card";
import Loading from "../components/loading";


const Home = () => {

    const countryState = useReducerAPI(
        "https://simplemaps.com/static/data/country-cities/mm/mm.json"
    );
    
    return (
        <>
            {countryState.loading && <Loading />}
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
    )
};

export default Home;