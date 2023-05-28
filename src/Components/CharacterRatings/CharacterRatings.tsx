import "./CharacterRatings.css";
import { ratingsData } from "../../data";

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

        {ratingsData.map((rating, idx) => {
          const { name, skillSet, votes } = rating;
          const theme = Number(idx) % 2 === 0 ? "dark" : "light";

          return (
            <tr className={theme}>
              <td>{name}</td>
              <td>{skillSet}</td>
              <td>{votes}</td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}
