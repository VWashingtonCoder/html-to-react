import "./CharacterRatings.css";
import { ratingsData } from "../../data";
import RatingRow from "./RatingRow";

export default function CharacterRatings() {
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>

        {ratingsData.map((info, idx) => {
          const theme = Number(idx) % 2 === 0 ? "dark" : "light";
          return <RatingRow key={idx} rating={info} theme={theme} />;
        })}
      </table>
    </section>
  );
}
