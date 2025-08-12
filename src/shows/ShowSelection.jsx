import "./shows.css";

/**
 * ShowSelection renders a navigation bar
 * letting users pick a show from the list.
 *
 * Props:
 * - shows: array of show objects
 * - selectedShow: currently selected show object
 * - setSelectedShow: function to update selected show
 */
export default function ShowSelection({ shows, selectedShow, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((show) => {
        // Determine if this show is currently selected
        const isSelected = show === selectedShow;
        // Build the class name with 'selected' if active
        const className = "show" + (isSelected ? " selected" : "");

        return (
          <a
            key={show.name}
            className={className}
            href="#"
            onClick={(e) => {
              e.preventDefault(); // prevent page jump
              setSelectedShow(show);
            }}
          >
            {show.name}
          </a>
        );
      })}
    </nav>
  );
}
