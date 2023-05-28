import { RatingRowProps } from "../../types";

export default function RatingRow({
  rating: { name, skillSet, votes },
  theme,
}: RatingRowProps) {
  return (
    <tr className={theme}>
      <td>{name}</td>
      <td>{skillSet}</td>
      <td>{votes}</td>
    </tr>
  );
}
