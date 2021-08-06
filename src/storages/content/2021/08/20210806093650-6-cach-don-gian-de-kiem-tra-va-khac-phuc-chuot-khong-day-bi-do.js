import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '06/08/2021 09:36 AM',
"title": '6 cách đơn giản để kiểm tra và khắc phục chuột không dây bị đơ',
"description": 'Hãy thử làm theo những cách này nếu có vấn đề về chuột không dây.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628180440158944367743.jpg',
"alt": 'CHUỘT KHÔNG DÂY,CHUỘT MÁY TÍNH,CHUỘT,',
"category": 'tech',
"date": '06/08/2021',
"time": '09:36 AM',
"link": '/6-cach-don-gian-de-kiem-tra-va-khac-phuc-chuot-khong-day-bi-do',
"zcomponent": 'page_20210806093650',
"filepath": './20210806093650-6-cach-don-gian-de-kiem-tra-va-khac-phuc-chuot-khong-day-bi-do.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title = "6 cách đơn giản để kiểm tra và khắc phục chuột không dây bị đơ";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "06/08/2021 09:36 AM";
const description =
  "Hãy thử làm theo những cách này nếu có vấn đề về chuột không dây.";
const link = "6-cach-don-gian-de-kiem-tra-va-khac-phuc-chuot-khong-day-bi-do";
const tagparam = ["CHUỘT KHÔNG DÂY", "CHUỘT MÁY TÍNH", "CHUỘT"];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210806093650() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      <strong>
                        <strong>Chuột</strong> không dây
                      </strong>{" "}
                      hiện nay là lựa chọn của rất nhiều dân công sở hay những
                      tay game thủ. Chuột không dây kết nối đơn giản với máy
                      tính qua USB hay Bluetooth, không cần dây rườm rà như
                      chuột có dây. Trong bán kính khoảng 7m vẫn có thể điều
                      khiển chuột được, thích hợp cho việc trình chiếu hay
                      thuyết trình. Và trong quá trình sử dụng chuột không dây,
                      người dùng có thể gặp phải một số tình huống như chuột
                      nhảy lung tung , trỏ chuột đứng im khi bạn di chuyển
                      chuột, chuột không hoạt động dù đèn sáng ,…
                    </p>
                    <p>
                      Lỗi{" "}
                      <strong>
                        <strong>chuột</strong> không dây
                      </strong>{" "}
                      bị đơ có thể do rất nhiều nguyên nhân như hỏng phần cứng,
                      tín hiệu Bluetooth kém,… Bài viết dưới đây sẽ tổng hợp một
                      số cách sửa lỗi chuột không dây bị đơ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628180440158944367743.jpg"
                      alt="1, CHUỘT KHÔNG DÂY,CHUỘT MÁY TÍNH,CHUỘT,"
                      note=""
                    />
                    <h5>Cách 1: Kiểm tra mặt phẳng di chuột</h5>
                    <p>
                      <strong>
                        <strong>Chuột</strong> không dây
                      </strong>{" "}
                      chỉ hoạt động ở một vài môi trường nhất định. Những loại
                      mặt bàn như bàn bóng, dán nilong sẽ hạn chế việc thu tín
                      hiệu của chuột. Kiểm tra lại mặt bàn di chuột để xem chuột
                      đã hoạt động chưa.
                    </p>
                    <p>
                      Tuy nhiên hiện nay một số loại <strong>chuột</strong> cao
                      cấp có thể hoạt động trên nhiều loại mặt phẳng hơn.
                    </p>
                    <h5>Cách 2: Kiểm tra Bluetooth và công tắc chuột</h5>
                    <p>
                      Nếu{" "}
                      <strong>
                        <strong>chuột</strong> không dây
                      </strong>{" "}
                      sử dụng Bluetooth để kết nối thì máy tính cần có Bluetooth
                      , để có thể kết nối thiết bị Bluetooh với máy tính.
                    </p>
                    <p>
                      Sau đó cần kiểm tra tới công tắc <strong>chuột</strong> đã
                      bật hay chưa. Khi chuột được cấp điện sẽ có đèn báo phát
                      sáng ở mặt dưới. Cuối cùng hãy thử lại kết nối chuột với
                      máy tính qua Bluetooth.
                    </p>
                    <h5>
                      Cách 3: Thay pin <strong>chuột</strong> không dây
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281804887181753809756.jpg"
                        alt="2, CHUỘT KHÔNG DÂY,CHUỘT MÁY TÍNH,CHUỘT,"
                        note=""
                      />
                    </h5>
                    <p>
                      {" "}
                      Nguyên nhân xảy ra do lỏng pin hoặc hết pin. Hãy thử xoay
                      lại pin để kiểm tra lại hoạt động của{" "}
                      <strong>chuột</strong>. Nếu không được thì bạn cần thay
                      pin mới cho chuột.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      Cách 4: Đổi cổng USB kết nối <strong>chuột</strong> không
                      dây
                    </h5>
                    <p>
                      Bạn hãy thử tháo cổng USB{" "}
                      <strong>
                        <strong>chuột</strong> không dây
                      </strong>{" "}
                      và cắm sang cổng khác. Có thể do cổng USB bị hỏng nên
                      chúng ta không thể kết nối chuột với máy tính. Bạn cũng có
                      thể sử dụng những thiết bị USB khác để kiểm tra hiệu quả
                      kết nối của cổng USB.
                    </p>
                    <h5>Cách 5: Kiểm tra tại Device manager</h5>
                    <p>
                      Trong trường hợp{" "}
                      <strong>
                        <strong>chuột</strong> không dây
                      </strong>{" "}
                      không hoạt động, nhấn tổ hợp phím Windows + R để mở giao
                      diện hộp thoại Run. Sau đó nhập từ khóa devmgmt.msc.
                    </p>
                    <p>
                      Trong giao diện này nhấn chọn vào Universal Serial Bus
                      controllers để kiểm tra các cổng USB kết nối với máy tính.
                      Nếu không thấy tên cổng <strong>chuột</strong> kết nối thì
                      bạn nhấn vào biểu tượng Scan for hardware changes để quét
                      và kiểm tra lại danh sách kết nối USB.
                    </p>
                    <h5>Cách 6: Khởi động lại máy tính</h5>
                    <p>
                      {" "}
                      Cách giải quyết cuối cùng đó là khởi động lại máy tính.
                      Hầu hết những lỗi đơn giản trên máy tính sẽ được giải
                      quyết khi chúng ta khởi động lại máy tính.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
