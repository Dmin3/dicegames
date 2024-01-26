import Button from "./Button";
import Board from "./Board";
import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

const inputStyle = {
  width: 200,
  height: 30,
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  border: "2px solid black",
  borderRadius: 20,
  textAlign: "center",
};

function ramdom() {
  const num = 6;
  return Math.ceil(Math.random() * num);
}

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [round, setRound] = useState(0);
  const [myNumbers, setMyNumbers] = useState([]);
  const [otherNumbers, setOtherNumbers] = useState([]);

  const reset = () => {
    setMyNumbers([]);
    setOtherNumbers([]);
    setRound(0);
    setInputValue(0);
  };

  function checkRound() {
    if (inputValue > round) {
      setRound(round + 1);
    } else {
      const result = () => {
        const mySum = myNumbers.reduce((a, b) => a + b, 0);
        const otherSum = otherNumbers.reduce((a, b) => a + b, 0);

        if (mySum > otherSum) {
          return `빨강이 ${mySum}점 으로 승리하였습니다!`;
        } else if (mySum < otherSum) {
          return `파랑이 ${otherSum}점 으로 승리하였습니다!`;
        } else {
          return "이런! 비겼군요!";
        }
      };

      alert(result());
      reset();
    }
  }

  const throwDice = () => {
    const myNum = ramdom();
    const otherNum = ramdom();
    setMyNumbers([...myNumbers, myNum]);
    setOtherNumbers([...otherNumbers, otherNum]);
    checkRound();
  };

  const settingRound = () => {
    setRound(inputValue);
    setRound(0);
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위 게임</h1>
      </div>
      <h1>Round : {round}</h1>
      <Button className="App-button" onClick={throwDice} color="blue">
        던지기
      </Button>
      <Button className="App-button" onClick={reset} color="red">
        처음부터
      </Button>

      <div>
        <input
          className="App-input"
          style={inputStyle}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          defaultValue={0}
          type="number"
          placeholder="라운드를 설정해주세요!"
        />
      </div>
      <div>
        <Button onClick={settingRound} className="App-button" color="purple">
          라운드 설정
        </Button>
      </div>

      <div className="App-boards">
        <Board
          className="App-board"
          name="나"
          color="red"
          gameHistory={myNumbers}
        ></Board>
        <Board
          className="App-board"
          name="상대"
          color="blue"
          gameHistory={otherNumbers}
        ></Board>
      </div>
    </div>
  );
}

export default App;
