import { Component } from "react";
import { CardPropsType } from "../../../types";
import "./CharacterCard.css";

export default class CharacterCard extends Component<CardPropsType> {
    render(){
        const {name, nickname, imgSrc, description} = this.props.card;
        return(
            <div className="card">
                <div className="card-titles">
                    <h3>{name}</h3>
                    <h4>{nickname}</h4>
                </div>
                <img src={imgSrc} alt="" />
                <p>{description}</p>
            </div>  
        )
    }
}