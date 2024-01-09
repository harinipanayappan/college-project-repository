import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faSquareXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { menuItems1, menuItems2, menuItems3 } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_info">
        <div className="footer_list-container">
          <ul className="footer_list">
            {[
              menuItems1.map((item) => (
                <li key={item} className="footer_list-item">
                  {item}
                </li>
              )),
            ]}
          </ul>
          <ul className="footer_list">
            {[
              menuItems2.map((item) => (
                <li key={item} className="footer_list-item">
                  {item}
                </li>
              )),
            ]}
          </ul>
          <ul className="footer_list">
            {[
              menuItems3.map((item) => (
                <li key={item} className="footer_list-item">
                  {item}
                </li>
              )),
            ]}
          </ul>
        </div>
        <div className="footer_social">
          <div className="footer_social-container">
            <p className="footer_social-label">Connect with us: </p>
            <div className="footer_social-icons">
              <a href="#">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  size={"2x"}
                  color="#3C5997"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size={"2x"}
                  color="#4C68D7"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faSquareXTwitter}
                  size={"2x"}
                  color="#04ABEE"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0D76A8" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} size="2x" color="#C42F2A" />
              </a>
              <p className="footer_social-trial">/psgitarofficial</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>
          Copyright © 2023 PSG INSTITUTE OF TECHNOLOGY AND APPLIED RESEARCH. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
