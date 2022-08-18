import "./components.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Philip Richert
      </a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/projects">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
