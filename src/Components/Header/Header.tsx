import { Component } from "react";
import "./Header.css";
import { headerItems } from "../../data";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          {headerItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </nav>
      </header>
    );
  }
}
