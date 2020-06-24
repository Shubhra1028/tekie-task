import React, { useEffect, useState } from "react";
import "./styles.css";
import gql from "graphql-tag";
import request from "./utils/request";
import Header from "./components/header";
import Search from "./components/search";
import ResultCards from "./components/resultCards";

export default function App() {
  const [ships, setShips] = useState(null);

  const fetchShips = async () => {
    const response = await request(gql`
      {
        ships {
          name
          home_port
          image
          roles
        }
      }
    `);
    console.log(response);
    setShips(response.data.ships);
  };

  useEffect(() => {
    fetchShips();
  }, []);

  const renderResultCards = () => {
    if (!ships) {
      return null;
    }
    return ships.map((ship, key) => {
      return <ResultCards key={key} ship={ship} />;
    });
  };

  return (
    <div className="App">
      <Header />
      <Search />
      <div className="searchResults">{renderResultCards()}</div>
    </div>
  );
}
