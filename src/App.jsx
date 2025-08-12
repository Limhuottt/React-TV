import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  // Store the list of shows (from data)
  const [showList] = useState(tvShows);
  // Track which show is currently selected
  const [activeShow, setActiveShow] = useState(null);

  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection
          shows={showList}
          selectedShow={activeShow}
          setSelectedShow={setActiveShow}
        />
      </header>

      <main>
        {/* 
          Using key forces ShowDetails to reset
          when activeShow changes 
        */}
        <ShowDetails key={activeShow?.name} show={activeShow} />
      </main>
    </>
  );
}
