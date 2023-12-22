import { BellNotification, IconoirProvider, MoreVert } from "iconoir-react";
import Links from "./Link";
import "/src/styles/Profile.css";

function Profile() {
  return (
    <>
      <IconoirProvider>
        <div className="profile-container">
          <div>
            <nav className="top-bar">
              <ul className="menu-list">
                <li className="menu-item">
                  <a href="#">
                    <MoreVert />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#">
                    <BellNotification />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="profile-info-container">
            <div className="profile-pic-container">
              <img
                className="profile-pic"
                src="/src/assets/img/pfp-jared.jpeg"
                alt=""
              />
            </div>
            <div className="username-wrapper">
              <h3 className="username">@jaredcv04</h3>
            </div>
          </div>
          <div>
            <Links />
          </div>
        </div>
      </IconoirProvider>
    </>
  );
}

export default Profile;
