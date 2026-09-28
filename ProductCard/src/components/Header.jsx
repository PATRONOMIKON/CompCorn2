import './Header.css';

function Header({ storeName }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1>{storeName}</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;