import "./App.css";
import { Footer } from "./Footer";
import { TicTacToe } from "./TicTacToe";

function App() {
    return (
        <div className="App">
            <div className="main">
                <TicTacToe />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
