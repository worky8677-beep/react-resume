
import "../index.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">MyResume</div>
      <ul className="menu">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};
