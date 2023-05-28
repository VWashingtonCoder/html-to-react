import { RatingRowPropsType } from "../../../types";
import "./CharacterRatingRow.css";

export default function CharacterRatingRow({ 
    rating: { name, skillSet, votes }, theme 
} : RatingRowPropsType) {
    return(
        <tr className={theme} >
            <td>{name}</td>
            <td>{skillSet}</td>
            <td>{votes}</td>
        </tr>
    )
}