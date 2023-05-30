import "./App.css";
import { data } from "./fma-data";
import Header from "./Components/Header/Header";
import CharacterRatings from "./Components/CharacterRatings/CharacterRatings";
import CharacterCards from "./Components/CharacterCards/CharacterCards";

function App() {
  return (
    <>
      <Header />
      <CharacterRatings characters={data} />
      <CharacterCards characters={data} />
    </>
  );
}

export default App;
