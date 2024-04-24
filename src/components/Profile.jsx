import {
  BellNotification,
  IconoirProvider,
  Instagram,
  MoreVert,
  X,
} from "iconoir-react";
import Link from "./Link";
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
                src="/img/pfp-jared.jpeg"
                alt="profile pic"
              />
            </div>
            <div className="username-wrapper">
              <h3 className="username">@jaredcsv</h3>
              <p className="user-description">Salesforce & Web Developer</p>
            </div>
          </div>
          <section className="links-section">
            <Link
              sitename="LinkedIn"
              socialurl="https://www.linkedin.com/in/jaredcsv/"
            />
            <Link sitename="Medium" socialurl="https://medium.com/@jaredcsv" />
            <Link sitename="Github" socialurl="https://github.com/jaredcsv" />
            <Link
              sitename="Trailblazer"
              socialurl="https://www.salesforce.com/trailblazer/jaredcsv"
            />
          </section>
          <section className="social-section">
            <a className="social" href="https://twitter.com/Jaredcsv" target="blank">
              <X />
            </a>
            <a className="social" href="https://www.instagram.com/jaredcsv/" target="blank">
              <Instagram />
            </a>
          </section>
        </div>
      </IconoirProvider>
    </>
  );
}

export default Profile;
