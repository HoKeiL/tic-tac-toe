import { boxProps } from "../utils/interface";

export function Box({ value, onClick }: boxProps): JSX.Element {
    const style = value === "X" ? "box X" : "box O";
    return (
        <div>
            <button className={style} onClick={() => onClick(value)}>
                {value}
            </button>
        </div>
    );
}
