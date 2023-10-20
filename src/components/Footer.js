import "../styles/page.css";
import heart from "../assets/heartFill-icon.svg";

export default function Footer() {
  return (
    <div className="footer">
      Designed & developed by Janhavi&nbsp;
      <img className="heartFill" src={heart} alt="heart-icon" />
    </div>
  );
}
