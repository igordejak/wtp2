import "./App.scss";
import Header from "./Header";
import Maintitle from "./Maintitle";
import MoneyOut from "./MoneyOut";

function App() {
  return (
    <div>
      <Header />
      <div className="base-wrapper">
        <div className="type-block">
          <Maintitle icon="./img/money-icon.svg" title="Money" />
          <MoneyOut url="http://localhost:5173/money-out.json" />
        </div>
        <div className="type-block">
          <Maintitle icon="./img/stuff-icon.svg" title="Stuff" />
          /* place for table */
        </div>
      </div>
    </div>
  );
}

export default App;
