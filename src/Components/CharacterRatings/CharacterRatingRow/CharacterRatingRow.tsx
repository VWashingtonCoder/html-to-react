import "./CharacterRatingRow.css";
import { CharacterType } from "../../../fma-data";

type RatingRowPropsType = {
  character: CharacterType;
  theme: string;
};

export default function CharacterRatingRow({
  character: { name, skillset, votes },
  theme,
}: RatingRowPropsType) {
  return (
    <tr className={theme}>
      <td>{name}</td>
      <td>{skillset.join(", ")}</td>
      <td>{votes}</td>
    </tr>
  );
}
