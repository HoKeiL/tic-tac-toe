import { checkDraw } from "./checkDraw";

describe("TicTacToe", () => {
    test("if the board is full and it should return true", () => {
        const board = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
        expect(checkDraw(board)).toBe(true);
    });
});
