import "./App.scss";
import Header from "./Header";
import Maintitle from "./Maintitle";

function App() {
  return (
    <div>
      <Header />
      <div className="base-wrapper">
        <div className="type-block">
          <Maintitle icon="./img/money-icon.svg" children="Money" />
          /* place for table */
        </div>
        <div className="type-block">
          <Maintitle icon="./img/stuff-icon.svg" children="Stuff" />
          /* place for table */
        </div>
      </div>
    </div>
  );
}

export default App;
