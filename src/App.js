import { useState } from "react";
import "./styles.css";

export default function App() {
  const [output, setOutput] = useState([]);

  const genreDictionary = {
    Rock: [
      "In the end -Linkin park 5/5",
      "Numb -Linkin park 5/5",
      "American idiot -Green day 3.5/5"
    ],
    Pop: [
      "I like me better -Lauv 4/5",
      "Feelings -Lauv 3.5/5",
      "Love yourself -Justin Bieber 4/5"
    ],
    Alternate: [
      "Stressed out -TwentyOnePilots 5/5",
      "Heathens -TwentyOnePilots 4/5",
      "The hype -TwentyOnePilots 4/5"
    ],
    Indie: [
      "If I go, I'm goin -Gregory A Isokov 5/5",
      "San luis -Gregory A Isokov 4/5",
      "Cold mess -Prateek Kuhad 4/5"
    ],
    Bollywood: [
      "Qafirana -Arijit Singh 4/5",
      "Zinda -Amit Trivedi 5/5",
      "Love you zindagi -Amit Trivedi 5/5"
    ]
  };

  var genres = Object.keys(genreDictionary);

  function buttonClickHandler(genre) {
    var data = genreDictionary[genre];
    setOutput(data);
  }
  return (
    <div className="App">
      <h1 style={{ marginTop: "5rem" }}>🎵 Akatsuki music</h1>
      <h2>Checkout my favorite music. Select a genre to get started!</h2>
      {genres.map((genre) => {
        return (
          <button
            style={{
              margin: "0.5rem",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              cursor: "pointer"
            }}
            onClick={() => buttonClickHandler(genre)}
          >
            {genre}
          </button>
        );
      })}

      <ul style={{ listStyleType: "none", margin: "10px auto" }}>
        {output.map((ls) => {
          return (
            <li
              style={{
                border: "1px solid #D1D5DB",
                padding: "10px",
                borderRadius: "5px",
                margin: "10px auto",
                width: "50%"
              }}
            >
              {ls}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
