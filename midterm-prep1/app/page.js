"use client"

import { useState } from "react";


//  TODO
//  - add button
//  - funciton to fetch data
//  - function to add data to state
//  - make it responsive
//  - display data
//  - function to clear data
//  - component for empty state
//  - component for data state
//  - error handling if the data doesn't come back

export default function Home() {
  // if useState !null,, probably fetching or loading data, or have data
  // uf useState === data, we can display our data
  const [astronomyData, setAstronomyData] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchAstronomyData() {
    setLoading(true);
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5");

    const data = await response.json();

    setAstronomyData(data);
    setLoading(false);
  }

  const DisplayAstronomyData = () => {
    if (loading) return <p>Loading...</p>;

    if (astronomyData) {
      const dataThatIsFormattedForDisplay = astronomyData.map((entry, i) => (
        <article key={i}>
          <img src={entry.url} alt={entry.title} style={{ maxWidth: "100%" }} />
          <h3>{entry.title}</h3>
          <p>{entry.explanation}</p>
        </article>
      ));

      return <section>{dataThatIsFormattedForDisplay}</section>;
    }

    return (
      <div>
        <p>Empty, no data fetched!</p>
      </div>
    );
  };


  const Header = () => {
    // build the UI that grabs data
    return (
    <header>Welcome to my MIDTERM PREP</header>
    );
  }

  return (
    <>
      <div>
        <br />
        <Header />
        <button className="border-2" onClick={fetchAstronomyData}>Fetch Stuff</button>    
        <DisplayAstronomyData />    
      </div>
    </>
  );
}
