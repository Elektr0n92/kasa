import Logo from "./Logo";
import K from "../assets/Logo/Footer/K.svg";
import AHouse from "../assets/Logo/Footer/AHouse.svg";
import S from "../assets/Logo/Footer/S.svg";
import Door from "../assets/Logo/Footer/Door.svg";
import A from "../assets/Logo/Footer/A.svg";

function Footer() {
  const FooterImages = [K, AHouse, Door, S, A];
  return (
    <div className="footer-container">
      <div className="footer">
        <ul className="logo-footer">
          {FooterImages.map((img) => (
            <Logo
              key={img.toString()}
              src={img}
              class={
                img === Door ? "door-footer" : img === AHouse ? "house" : null
              }
            />
          ))}
        </ul>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
