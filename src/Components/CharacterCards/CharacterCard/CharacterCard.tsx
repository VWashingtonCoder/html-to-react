import { Component } from "react";
import { CharacterType } from "../../../fma-data";
import "./CharacterCard.css";

type CardProps = {
  info: CharacterType;
};

export default class CharacterCard extends Component<CardProps> {
  render() {
    console.log(this.props.info);
    const { background, imageUrl, name, nickName } = this.props.info;
    return (
      <div className="card">
        <div className="card-titles">
          <h3>{name}</h3>
          <h4>{nickName}</h4>
        </div>
        <img src={imageUrl} alt="" />
        <p>{background}</p>
      </div>
    );
  }
}
