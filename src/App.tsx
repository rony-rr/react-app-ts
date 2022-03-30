import * as React from "react";

import ButtonComponent from "./components/atoms/Buttons";
import TextComponent from "./components/atoms/Texts";

import Container from "./components/templates/Container";

import logo from "./logo.svg";
import "./App.css";

// JSX APP Component
const App: React.FC = () => {
  const [result1, setResult1] = React.useState<string>("");
  const [result2, setResult2] = React.useState<string>("");

  React.useEffect(() => {
    setResult1(ParImpar(5));
    setResult2(ParImpar(8));
  }, []);

  const ParImpar = (numero: number): string => {
    if (numero % 2 === 0) {
      return `${numero} : Par`;
    }

    return `${numero} : Impar`;
  };

  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TextComponent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </TextComponent>
        <TextComponent>{result1}</TextComponent>
        <TextComponent>{result2}</TextComponent>
        <ButtonComponent>Texto botón</ButtonComponent>
      </Container>
    </div>
  );
};

export default App;
