import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div class="foot_top">
          <div class="container_24">
            <div class="grid_6">
              <h3>NAVIGATION</h3>
              <ul>
                <div className="current">
                  <li>
                    <a href="index.html">HOME</a>
                  </li>
                </div>
                <li>
                  <a href="index-1.html">Games</a>
                </li>
                <li>
                  <a href="index-2.html">REVIEWS</a>
                </li>
                <li>
                  <a href="index-3.html">Videos</a>
                </li>
                <li>
                  <a href="index-4.html">Contacts</a>
                </li>
              </ul>
            </div>

            <div class="grid_12">
              <h3>Top Games:</h3>
              <ul class="list l1">
                <li>
                  <a href="#">
                    <span>1.</span>Lorem ipsum dolor sit amet{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>2.</span>Conse ctetur adipisicing{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>3.</span>Elit sed do eiusmod tempor
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>4.</span>Incididunt ut labore{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>5.</span>Et dolore magna aliqua
                  </a>
                </li>
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
            <div class="copy">
              <div class="socials">
                <a href="#">
                  <i class="icon-twitter"></i>
                </a>
                <a href="#">
                  <i class="icon-facebook"></i>
                </a>
                <a href="#">
                  <i class="icon-rss"></i>
                </a>
              </div>
              huyetnguyet.com © 2020. <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
