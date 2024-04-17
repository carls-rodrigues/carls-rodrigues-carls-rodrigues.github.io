export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <header className="header">
          <nav id="menu"></nav>
          <button id="language" onClick={() => null} type="button"></button>
        </header>
        <div className="hero__content fade_in">
          <h1 id="name"></h1>
          <h2 id="description"></h2>
        </div>
        <footer className="footer">
          <p>@2024 Carlos Rodrigues</p>
        </footer>
      </div>
    </div>
  )
}