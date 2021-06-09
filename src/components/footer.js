import React, { Component } from "react";
import "components/footer.css";

import { dataContent } from "storages/database";

function Hot(props) {
  return (
    <>
      <li>
        <a href={props.link}>
          {props.id}. {props.title}
        </a>
      </li>
    </>
  );
}

export default function Footer() {
  var count = 0;
  return (
    <div className="footer">
      <div class="foot_top">
        <div class="container_24">
          <div class="grid_4 mobile">
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

          <div class="grid_14 mobile">
            <h3>Hot News:</h3>
            <ul class="list l1">
              {dataContent.map((obj) => {
                if (obj.category === "images" && count < 5) {
                  count += 1;
                  return (
                    <Hot
                      id={count}
                      title={obj.title.substring(0, 40)}
                      link={obj.link}
                    />
                  );
                }
              })}
            </ul>
          </div>

          <div class="grid_6">
            <h3>Contact</h3>
            <div className="contact">
              <p>Liên hệ quảng cáo: Admin</p>
              <p>Hotline hỗ trợ quảng cáo: 000 000 0000</p>
              <p>Email: huyetnguyetgames@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container_24">
        <div class="grid_24">
          <div class="copy">huyetnguyet.com © 2020. Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
