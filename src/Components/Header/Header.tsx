import { Component } from "react";
import "./Header.css";

export default class Header extends Component {
    render() {
        const headerItems = ["about us", "info", "support us"];

        return(
            <header>
                <h1>Fullmetal Alchemist</h1>
                <nav>
                    {headerItems.map(item => (<li>{item}</li>))}
                </nav>
            </header>
        );
    }
}