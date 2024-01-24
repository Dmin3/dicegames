import Button from "./Button";
import Board from "./Board";
import { useState } from "react";

function ramdom() {
  const num = 6;
  return Math.ceil(Math.random() * num);
}

function App() {
  const [round, setRound] = useState(1);

  const [myNumbers, setMyNumbers] = useState([]);
  const [otherNumbers, setOtherNumbers] = useState([]);

  const reset = () => {
    setMyNumbers([]);
    setOtherNumbers([]);
    setRound(1);
  };

  function checkRound() {
    if (round < 5) {
      setRound(round + 1);
    } else {
      function result() {
        const mySum = myNumbers.reduce((a, b) => a + b, 0);
        const otherSum = otherNumbers.reduce((a, b) => a + b, 0);

        if (Number(mySum) > Number(otherSum)) {
          return `빨강이 ${mySum}점 으로 승리하였습니다!`;
        } else if (Number(mySum) < Number(otherSum)) {
          return `파랑이 ${otherSum}점 으로 승리하였습니다!`;
        } else {
          return "이런! 비겼군요!";
        }
      }

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

  return (
    <div className="App">
      <h1>Round : {round}</h1>
      <Button onClick={throwDice}>던지기</Button>
      <Button onClick={reset}>처음부터</Button>
      <div>
        <Board name="나" color="red" gameHistory={myNumbers}></Board>
        <Board name="상대" color="blue" gameHistory={otherNumbers}></Board>
      </div>
    </div>
  );
}

export default App;
