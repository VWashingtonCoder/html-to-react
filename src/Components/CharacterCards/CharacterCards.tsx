import { Component } from "react";
import "./CharacterCards.css";
import { cardData } from "../../data";
import { CharacterType } from "../../fma-data";
import CharacterCard from "./CharacterCard/CharacterCard";

type CardDataProps = {
  characters: CharacterType[];
};

export default class CharacterCards extends Component<CardDataProps> {
  render() {
    return (
      <section id="character-cards">
        {this.props.characters.map((info, idx) => (
          <CharacterCard key={idx} info={info} />
        ))}
      </section>
    );
  }
}
