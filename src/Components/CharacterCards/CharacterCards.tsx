import { Component } from "react";
import "./CharacterCards.css";
import { cardData } from "../../data";

export default class CharacterCards extends Component {
    render() {
        return(
            <section id="character-cards">
                {cardData.map((card, idx) => {
                    const { name, nickname, imgSrc, description } = card;

                    return(
                        <div className="card" key={idx}>
                            <div className="card-titles">
                                <h3>{name}</h3>
                                <h4>{nickname}</h4>
                            </div>
                            <img src={imgSrc} alt="" />
                            <p>{description}</p>
                        </div>
                    )
                })}
            </section>
        )
    }
}