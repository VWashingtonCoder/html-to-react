import "./CharacterRatings.css";
import { ratingsData } from "../../data";
import { CharacterType } from "../../fma-data";
import CharacterRatingRow from "./CharacterRatingRow/CharacterRatingRow";

type CharacterRatingProps = {
  characters: CharacterType[];
};

export default function CharacterRatings({ characters }: CharacterRatingProps) {
  const sortedCharacters = characters.sort((a, b) => b.votes - a.votes);
  const topFiveCharacters = sortedCharacters.slice(0, 5);

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
          {topFiveCharacters.map((character, idx) => {
            const theme = Number(idx) % 2 === 0 ? "dark" : "light";

            return (
              <CharacterRatingRow
                key={idx}
                character={character}
                theme={theme}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
