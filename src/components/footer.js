/* eslint-disable array-callback-return */
import React from "react";
import "./footer.scss";

import { dataContent } from "storages/database";

function Hot(props) {
  return (
    <a href={props.link}>
      {props.id}. {props.title}
    </a>
  );
}

export default function Footer() {
  var count = 0;
  return (
    <div className="footerContainer">
      <div className="container_24">
        <div className="grid_4">
          <h3>NAVIGATION</h3>
          <ul>
            <div className="current">
              <li>
                <a href="/">HOME</a>
              </li>
            </div>
            <li>
              <a href="/games">GAMES</a>
            </li>
            <li>
              <a href="/guide">GUIDE</a>
            </li>
            <li>
              <a href="/news">NEWS</a>
            </li>
            <li>
              <a href="/travel">TRAVEL</a>
            </li>
          </ul>
        </div>

        <div className="grid_14">
          <h3>Hot News:</h3>
          <ul>
            {dataContent.map((obj, key) => {
              if (obj.category === "images" && count < 5) {
                count += 1;
                return (
                  <li key={key}>
                    <Hot
                      id={count}
                      title={obj.title.substring(0, 40)}
                      link={obj.link}
                    />
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <div className="grid_6">
          <h3>Contact</h3>
          <div className="contact">
            <p>
              Liên hệ quảng cáo: <strong>Admin</strong>
            </p>
            <p>
              Email:{"  "}
              <a href="mailto:huyetnguyetgames@gmail.com">
                huyetnguyetgames@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="grid_24">
        <div className="copy">huyetnguyet.com © 2020. Privacy Policy</div>
      </div>
    </div>
  );
}
