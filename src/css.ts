import styled, { css } from "styled-components";
import bgImg from "./Assets/Springfield.jpeg";
import "./Assets/font.css";

interface ButtonStyledProps {
  isRed?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(${bgImg});
  background-size: cover;
`;

export const Title = styled.h2`
  color: #fbed22;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -3px 2px 0 #000,
    1px 1px 0 #000;
  font-size: 2rem;
  margin-left: 10px;
`;

export const MainContent = styled.div`
  background-color: #f8db27ba;
  border-radius: 10px;
  width: 40%;
  min-height: 350px;
  margin: 0 auto;
  padding: 25px;
  position: relative;
`;

export const Text = styled.p`
  text-align: center;
`;

export const Quote = styled.div`
  width: 90%;
  height: 30%;
  margin: 20px auto;
`;
export const Character = styled.div``;

export const Controllers = styled.div`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  margin: 10px auto;
`;

export const Guess = styled.input`
  background-color: transparent;
  border: black solid 1px;
  border-radius: 15px;
  padding-left: 15px;
  width: 100%;
`;

export const Button = styled.button<ButtonStyledProps>`
  background-color: ${(props) => (props.isRed ? "#ee0612" : "#2f64d6")};
  border-radius: 5px;
  color: #fff;
  width: 45%;
  margin: 10px 5px;
  cursor: pointer;
`;

export const Results = styled.div`
  width: 85%;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`;

export const SpanGuess = styled.span`
  font-size: 18px;
`;
