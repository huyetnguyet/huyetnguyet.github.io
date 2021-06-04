import React, { Component } from "react";
import "./footer.css";

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

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div class="foot_top">
          <div class="container_24">
            <div class="grid_4">
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

            <div class="grid_14">
              <h3>Hot News:</h3>
              <ul class="list l1">
                <Hot
                  id="1"
                  title="Ngọc Trinh vô tư đăng clip chỉnh sửa nội y"
                  link="/ngoc-trinh-vo-tu-dang-clip-chinh-sua-noi-y-de-lo-ca-do-bao-ho-ben-trong-nhin-ma-thot-tim"
                />
                <Hot
                  id="2"
                  title="Linh Chichan diện trang phục thả rông tới 90%"
                  link="/linh-chichan-dien-trang-phuc-tha-rong-toi-90-vong-mot-nu-streamer-viet-nhan-ve-nhieu-y-kien-trai-chieu"
                />
                <Hot
                  id="3"
                  title="Hot girl có khuôn ngực hơn 1m bất ngờ tiết lộ"
                  link="/hot-girl-co-khuon-nguc-hon-1m-bat-ngo-tiet-lo-tin-soc-dang-xa-tri-ung-thu-xin-cu-dan-mang-ngung-body-shaming"
                />
                <Hot
                  id="4"
                  title="Bị chế giễu vì nặng tới 1 tạ, nữ YouTuber giảm "
                  link="/bi-che-gieu-vi-nang-toi-1-ta-nu-youtuber-giam-30kg-than-toc-lot-xac-goi-cam-toi-kho-tin"
                />
                <Hot
                  id="5"
                  title="Nợ nần chồng chất, lừa cả tiền fan, nữ streamer"
                  link="/no-nan-chong-chat-lua-ca-tien-fan-nu-streamer-xinh-dep-tuyen-bo-cung-duong-dong-phim-18-de-tra-no"
                />
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
