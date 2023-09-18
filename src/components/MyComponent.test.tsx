import { render, screen } from "../testUtils/testUtils";
import { TicTacToe } from "./TicTacToe";

//An example of using react-testing-library
describe("Tic Tac Toe", async () => {
    test("Should have text Tic Tac Toe on it", () => {
        render(<TicTacToe />);
        const elem = screen.getByText("X");
        expect(elem).toBeInTheDocument();
    });
});
