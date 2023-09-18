import { boardProps } from "../utils/interface";
import { Box } from "./Box";

export function Board({ board, onClick }: boardProps): JSX.Element {
    return (
        <div className="board">
            {board.map((value, index) => {
                return (
                    <Box
                        key={index}
                        value={value}
                        onClick={() => {
                            value === null && onClick(index);
                        }}
                    />
                );
            })}
        </div>
    );
}
