import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Title,
  MainContent,
  Text,
  Quote,
  Character,
  Options,
  Option,
  Button,
  Controllers,
  Results,
  Label,
} from "./css";

interface ICharacter {
  quote: string;
  character: string;
  image: string;
}

function App() {
  const [answer, setAnswer] = useState(0);
  const [messageToUser, setMessageToUser] = useState("");
  const [gameStatus, setGameStatus] = useState(false);
  const [options, setOptions] = useState<ICharacter[]>([] as ICharacter[]);
  const [optionSelected, setOptionSelected] = useState("");

  useEffect(() => {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=3")
      .then((res) => setOptions([...res.data]));

    setAnswer(Math.floor(Math.random() * (4 - 1)) + 1);
  }, []);

  const handleTryClick = () => {
    console.log(optionSelected, answer);
    if (optionSelected === options[answer].character) {
      setGameStatus(true);
    }
  };

  return (
    <Container>
      <Title>Simpsons Quote</Title>
      <MainContent>
        {!!options.length ? (
          <Quote>
            <Text>{options[answer]?.quote}</Text>
          </Quote>
        ) : (
          <Quote>
            <Text>Loading...</Text>
          </Quote>
        )}
        <Text>
          How said that
          <span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
            ?
          </span>
        </Text>
        <Controllers>
          <Options>
            {options.map((option, i) => (
              <>
                <Option
                  key={i}
                  type={"radio"}
                  id={`characterChoice${i}`}
                  name="optionsCharacter"
                  value={option.character}
                  onChange={(e) => {
                    setOptionSelected(e.target.value);
                  }}
                />
                <Label htmlFor={`characterChoice${i}`}>
                  {option.character}
                </Label>
              </>
            ))}
          </Options>
          <Button onClick={() => handleTryClick()}>Try</Button>
          <Button isRed>Give Up</Button>
        </Controllers>
        <Results>
          <Text>{messageToUser}</Text>
        </Results>
      </MainContent>
      {gameStatus && <Character src={options[answer]?.image} />}
    </Container>
  );
}

export default App;
