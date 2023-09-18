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
