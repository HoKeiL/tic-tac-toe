import { useState } from "react";
import { checkDraw } from "../utils/checkDraw";
import { checkWinner } from "../utils/checkWinner";
import { updateScore } from "../utils/updateScore";
import { Board } from "./Board";
import { ScoreBoard } from "./ScoreBoard";

export function TicTacToe(): JSX.Element {
    const [board, setboard] = useState(Array(9).fill(null));
    const [xPlaying, setXPlaying] = useState(true);
    const [score, setScore] = useState({ xScore: 0, oScore: 0 });
    const [gameOver, setGameOver] = useState(false);

    const handleBoxClick = (boxIndex: number) => {
        const updateBoard = board.map((value, index) => {
            if (index === boxIndex) {
                return xPlaying === true ? "X" : "O";
            } else {
                return value;
            }
        });
        const winner = checkWinner({ updateBoard, setGameOver });
        updateScore({
            winner,
            score,
            setScore,
        });
        setboard(updateBoard);
        setXPlaying(!xPlaying);
        const draw = checkDraw(updateBoard);
        if (draw) {
            setboard(Array(9).fill(null));
        }
    };

    function resetBoard() {
        setGameOver(false);
        setboard(Array(9).fill(null));
    }

    return (
        <div>
            <ScoreBoard score={score} xPlaying={xPlaying} />
            <Board
                board={board}
                onClick={gameOver ? resetBoard : handleBoxClick}
            />
            <button className="reset-btn" onClick={resetBoard}>
                Reset
            </button>
        </div>
    );
}
