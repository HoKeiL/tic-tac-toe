export interface scoreboardProps {
    score: {
        xScore: number;
        oScore: number;
    };
    xPlaying: boolean;
}

export interface boxProps {
    value: string;
    onClick: (value: string) => void;
}

export interface boardProps {
    board: string[];
    onClick: (boxIndex: number) => void;
}

export interface checkWinnerProps {
    updateBoard: string[];
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface updateScoreProps {
    winner: string | undefined;
    score: {
        xScore: number;
        oScore: number;
    };
    setScore: React.Dispatch<
        React.SetStateAction<{
            xScore: number;
            oScore: number;
        }>
    >;
}
