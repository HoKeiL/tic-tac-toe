interface scoreboardProps {
    score: {
        xScore: number;
        oScore: number;
    };
    xPlaying: boolean;
}

export function ScoreBoard({ score, xPlaying }: scoreboardProps): JSX.Element {
    const { xScore, oScore } = score;

    return (
        <div className="scoreBoard">
            <span className={`score x-score ${!xPlaying && "inactive"}`}>
                X - {xScore}
            </span>
            <span className={`score o-score ${xPlaying && "inactive"}`}>
                O - {oScore}
            </span>
        </div>
    );
}
