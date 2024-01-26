import Dice from "./Dice";
import "./Board.css";

function Board({ name, color, gameHistory }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);

  return (
    <div className="Board">
      <h1 className="Board-heading">{name}</h1>
      <Dice color={color} num={num}></Dice>
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
