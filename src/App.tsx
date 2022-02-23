import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Title,
  MainContent,
  Text,
  Quote,
  Character,
  Guess,
  Button,
  Controllers,
  Results,
  SpanGuess,
} from "./css";
import fixName from "./Utils/fixName";
import similarity from "./Utils/similarity";

interface ICharacter {
  quote: string;
  character: string;
  image: string;
}

function App() {
  const [characterQuote, setCharacterQuote] = useState<ICharacter>();
  const [userGuess, setUserGuess] = useState("");
  const [userGuessCount, setUserGuessCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((res) => setCharacterQuote(res.data[0]));
  }, []);

  const handleTryClick = () => {
    setUserGuessCount(userGuessCount + 1);
    const character = characterQuote?.character as string;

    const hitPercentage = similarity(fixName(character), fixName(userGuess));

    if (hitPercentage >= 80) {
    }

    setUserGuess("");
  };

  return (
    <Container>
      <Title>Simpsons Quote</Title>
      <MainContent>
        {!!characterQuote ? (
          <Quote>
            <Text>
              Lorem ipsum dolor, provident sunt non sint magni maiores.
              Doloremque quae asperiores provident.
            </Text>
            {/* <Text>{characterQuote?.quote}</Text> */}
          </Quote>
        ) : (
          <Quote>
            <Text>Loading...</Text>
          </Quote>
        )}
        {/* <Character>
            <Text>Lorem ipsum dolor</Text>
            <Text>{characterQuote?.character}</Text>
          </Character> */}
        <Controllers>
          <Guess
            onChange={(e) => setUserGuess(e.target.value)}
            type="text"
            name="guess"
            id="guess"
            placeholder="Who said that"
          />
          <Button onClick={() => handleTryClick()}>Try</Button>
          <Button isRed>Give Up</Button>
        </Controllers>
        <Results>
          <Text>Lorem ipsum dolor sit.</Text>
          <SpanGuess>Attempts: {userGuessCount}</SpanGuess>
        </Results>
      </MainContent>
    </Container>
  );
}

export default App;
