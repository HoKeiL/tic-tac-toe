import { useState } from "react";
import { Board } from "./Board";
import { ScoreBoard } from "./ScoreBoard";

export function TicTacToe(): JSX.Element {
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
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
        const winner = checkWinner(updateBoard);
        if (winner) {
            if (winner === "X") {
                let { xScore } = score;
                xScore++;
                setScore({ ...score, xScore });
            } else {
                let { oScore } = score;
                oScore++;
                setScore({ ...score, oScore });
            }
        }
        setboard(updateBoard);
        setXPlaying(!xPlaying);
        const draw = checkDraw(updateBoard);
        if (draw) {
            setboard(Array(9).fill(null));
        }
    };

    function checkWinner(board: string[]) {
        for (let i = 0; i < winCondition.length; i++) {
            const [a, b, c] = winCondition[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setGameOver(true);
                return board[a];
            }
        }
    }

    function checkDraw(board: (string | null)[]) {
        const hasNull = board.includes(null);
        if (!hasNull) {
            alert("it's a draw! Reset Board");
            return true;
        }
    }

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
