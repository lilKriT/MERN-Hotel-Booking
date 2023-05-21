const Header = () => {
  return (
    <header className="bg-slate-300 flex justify-center">
      <div className="container bg-slate-400 flex justify-between">
        <a href="logo">Logo</a>
        <nav>
          <menu className="flex gap-2">
            <li>
              <a href="navLink">Link</a>
            </li>
            <li>
              <a href="navLink">Link</a>
            </li>
            <li>
              <a href="navLink">Link</a>
            </li>
          </menu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
