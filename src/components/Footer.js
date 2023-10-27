import "../styles/home.css";
import heart from "../assets/heartFill-icon.svg";

export default function Footer() {
  return (
    <div className="d-flex justify-content-end align-items-center position-fixed footer">
      Designed & developed by Janhavi&nbsp;
      <img className="heartFill" src={heart} alt="heart-icon" />
    </div>
  );
}
