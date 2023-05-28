import "./CharacterRatings.css";
import { ratingsData } from "../../data";
import CharacterRatingRow from "./CharacterRatingRow/CharacterRatingRow";

export default function CharacterRatings() {
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        
        <tbody>
          {ratingsData.map((rating, idx) => {
            const theme = Number(idx) % 2 === 0 ? "dark" : "light";

            return (
              <CharacterRatingRow 
                key={idx} 
                rating={rating} 
                theme={theme} 
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
