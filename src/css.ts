import styled, { keyframes } from "styled-components";
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
  position: relative;
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

const revelationChar = keyframes`
  0% {
  transform: scale(0.1);
  }
  20% {
  transform: scale(0.2);
  }
  40% {
  transform: scale(0.4);
  }
  60% {
  transform: scale(0.6);
  }
  80% {
  transform: scale(0.8);
  }
  100% {
  transform: scale(1);
}
`;

export const Character = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  animation: 1s ${revelationChar} ease-out;
`;

export const Controllers = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px auto;
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 15px;
  width: 100%;
  margin: 20px 0;

  input[type="radio"]:checked + label {
    color: black;
    border: black 0.5px dashed;
  }
`;

export const Option = styled.input`
  display: none;
`;

export const Button = styled.button<ButtonStyledProps>`
  background-color: ${(props) => (props.isRed ? "#ee0612" : "#2f64d6")};
  border-radius: 5px;
  color: #fff;
  width: 25%;
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

export const Label = styled.label`
  font-size: 14px;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 5px;
  padding: 10px;
  color: white;
  text-align: center;

  &:hover {
    color: black;
  }

`;
