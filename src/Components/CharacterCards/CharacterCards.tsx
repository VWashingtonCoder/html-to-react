import { Component } from "react";
import "./CharacterCards.css";
import { cardData } from "../../data";
import CharacterCard from "./CharacterCard/CharacterCard";

export default class CharacterCards extends Component {
    render() {
        return(
            <section id="character-cards">
                {cardData.map((card, idx) => (
                    <CharacterCard key={idx} card={card} />
                ))}
            </section>
        )
    }
}