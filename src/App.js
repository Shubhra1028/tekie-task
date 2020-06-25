import React, { useEffect, useState } from "react";
import "./styles.css";
import gql from "graphql-tag";
import request from "./utils/request";
import Header from "./components/header";
import Search from "./components/search";
import ResultCards from "./components/resultCards";

export default function App() {
  const [ships, setShips] = useState(null);
  const [showShips, setShowShips] = useState(null);
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
    setShips(response.data.ships);
    setShowShips(response.data.ships);
  };

  useEffect(() => {
    fetchShips();
  }, []);

  const renderResultCards = () => {
    if (!showShips) {
      return null;
    }
    return showShips.map((ship, key) => {
      return <ResultCards key={key} ship={ship} />;
    });
  };

  const handleFiter = term => {
    setShowShips(
      ships.filter(ship => {
        return ship.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <Search
        total={!showShips ? 0 : showShips.length}
        handleFiter={handleFiter}
      />
      <div className="searchResults">{renderResultCards()}</div>
    </div>
  );
}
