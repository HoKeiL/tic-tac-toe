export function checkDraw(board: (string | null)[]) {
    const hasNull = board.includes(null);
    if (!hasNull) {
        alert("It's a draw! Reset Board");
        return true;
    }
}
