import { config } from "./data/config";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">YT</a>
      <a href={`mailto:${config.social.email}`} className="navbar-email" title="Email me">
        {config.social.email}
      </a>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}