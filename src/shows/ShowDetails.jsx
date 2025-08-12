import { useState } from "react";

import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

import "./shows.css";

/**
 * ShowDetails lets users explore episodes for a selected show.
 *
 * Props:
 * - show: the show object to display episodes for
 */
export default function ShowDetails({ show }) {
  // Track which episode is currently selected
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // If no show is selected, prompt user to select one
  if (!show) {
    return <p>Please select a show to learn more.</p>;
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
