import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-300 flex justify-center">
      <div className="container bg-slate-400 flex justify-between">
        <Link to="/">Logo</Link>
        <nav>
          <menu className="flex gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/hotels/1">Single</Link>
            </li>
          </menu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
