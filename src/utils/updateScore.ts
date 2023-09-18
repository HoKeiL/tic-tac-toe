import { updateScoreProps } from "./interface";

export function updateScore({
    winner,
    score,
    setScore,
}: updateScoreProps): void {
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
}
