"use client";

import { useState } from "react";

//  TODO
//  - add button
//  - function to fetch data
//  - function to add data to state
//  - make it responsive
//  - display data
//  - function to clear data
//  - component for empty state
//  - component for data state
//  - error handling if the data doesn't come back

export default function Home() {
  const [astronomyData, setAstronomyData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchAstronomyData() {
    if (astronomyData) {
      // If data already exists, clear it instead of fetching new data
      setAstronomyData(null);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5"
      );
      const data = await response.json();
      setAstronomyData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  }

  const DisplayAstronomyData = () => {
    if (loading) return <p>Loading...</p>;

    if (astronomyData && astronomyData.length > 0) {
      return (
        <section>
          {astronomyData.map((entry, i) => (
            <article key={i}>
              <img src={entry.url} alt={entry.title} style={{ maxWidth: "100%" }} />
              <h3>{entry.title}</h3>
              <p>{entry.explanation}</p>
            </article>
          ))}
        </section>
      );
    }

    return <div><p>Empty, no data fetched!</p></div>;
  };

  const Header = () => {
    return <header>Welcome to my MIDTERM PREP</header>;
  };

  return (
    <>
      <div>
        <Header />
        <button className="border-2" onClick={fetchAstronomyData}>
          {astronomyData ? "Clear Data" : "Fetch Stuff"}
        </button>
        <DisplayAstronomyData />
      </div>
    </>
  );
}