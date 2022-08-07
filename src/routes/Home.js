import React from "react";

import Card from "../components/Card";
import "./Index.css";

function Home({ company }) {
  return (
    <div className="HomeContainer">
      {company.length
        ? company.map((item) => <Card key={item.id} item={item} />)
        : null}
    </div>
  );
}

export default Home;
