import { Link } from "react-router-dom";
import "./index.scss";
function MainMenu() {
  return (
    <main className="menu-container">
      <div className="menu">
        <div className="title-container">
          <h1 className="title">Lexical</h1>
        </div>
        <ul className="option-container">
          <li className="option">
            <Link className="link" to={"plain"}>
              纯文本Demo
            </Link>
          </li>
          <li className="option">
            <Link className="link" to={"rich"}>
              富文本Demo
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default MainMenu;
