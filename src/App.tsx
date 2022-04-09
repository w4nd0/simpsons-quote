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
  const [repeat, setRepeat] = useState(true);

  const getData = async () => {
    const data = await axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=3")

      .then((res) => {
        const chars = res.data;

        const allChars = [
          chars[0].character,
          chars[1].character,
          chars[2].character,
        ];

        const unique = [...new Set(allChars)];

        if (unique.length === 3) {

          setOptions([...chars]);
          return;
        } else getData();
      });
  };

  useEffect(() => {
    getData();
    setAnswer(Math.floor(Math.random() * (4 - 1)) + 1);
  }, []);

  const handleTryClick = () => {
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
          Who said that
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
                  <img
                    src={option.image}
                    style={{ maxHeight: "250px" }}
                    alt="Character image"
                  />
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
