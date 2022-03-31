import { React } from "react";
import nav_menu, { social_icons } from "./site-data";
import "./navbar.css";

const Navbar = () => {
  //   const [isSelected, setIsSelected] = useState([]);
  //   const handleSelect = (id) => {
  //     setIsSelected((prev) => {
  //       const newState = { ...prev };
  //       const keys = Object.keys(newState);
  //       // print all keys
  //       if (keys.length > 0) {
  //         keys.forEach((key, index) => {
  //           if (key === String(id)) {
  //             newState[id] = !newState[id];
  //           }
  //         });
  //       }

  //       return newState;
  //     });
  //   };

  //   useEffect(() => {
  //     console.log(isSelected);
  //   }, [isSelected]);
  return (
    <div className="no-container">
      <nav className="main-nav my-container">
        <div className="nav-logo">
          <a href="javascript:window.location.reload(true)">AK</a>
        </div>
        <ul className="nav-menu">
          {nav_menu.map((item) => {
            const { id, text, url } = item;
            return (
              <li key={id} className="nav-link">
                {/* <a
                  href={url}
                  className={isSelected[id - 1] ? "active" : ""}
                  onClick={() => handleSelect(id - 1)}
                > */}
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <ul className="social-icons">
          {social_icons.map((platform) => {
            const { id, type, library, url } = platform;
            return (
              <li key={id} className={`icon ${type}`}>
                <a href={url} rel="noreferrer noopener" target="_blank">
                  {library}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
