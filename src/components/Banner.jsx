import { useLocation } from "react-router-dom";
function Banner({ children }) {
  const { pathname } = useLocation();
  const lastWord = pathname.split("/").pop();
  const className = lastWord === "" ? "banner" : "banner-about";
  return <div className={className}>{children}</div>;
}

export default Banner;
