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
"timestamp": '14/06/2021 09:24 AM',
"title": 'Mỹ nữ Titanic từng gây sốc với loạt cảnh nóng hở 100% bên "người tình" kém 15 tuổi, nhận luôn Oscar vì quá xuất sắc',
"description": 'Kate Winslet luôn được biết đến như là một trong những cái tên chịu lăn xả vì cảnh nóng nhất nhì điện ảnh Hollywood.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614092415--11-609549.jpg',
"alt": 'Kate Winslet, Titanic, Titanic 1997, Canh Nong, Canh Nong Tao Bao, Canh Nong Hollywood, Phim Au My, The Reader, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:24 AM',
"link": '/my-nu-titanic-tung-gay-soc-voi-loat-canh-nong-ho-100-ben-nguoi-tinh-kem-15-tuoi-nhan-luon-oscar-vi-qua-xuat-sac',
"zcomponent": 'page_20210614092415',
"filepath": './20210614092415-my-nu-titanic-tung-gay-soc-voi-loat-canh-nong-ho-100-ben-nguoi-tinh-kem-15-tuoi-nhan-luon-oscar-vi-qua-xuat-sac.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  'Mỹ nữ Titanic từng gây sốc với loạt cảnh nóng hở 100% bên "người tình" kém 15 tuổi, nhận luôn Oscar vì quá xuất sắc';
const author = "HIEUTHUBA,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "14/06/2021 09:24 AM";
const description =
  "Kate Winslet luôn được biết đến như là một trong những cái tên chịu lăn xả vì cảnh nóng nhất nhì điện ảnh Hollywood.";
const link =
  "my-nu-titanic-tung-gay-soc-voi-loat-canh-nong-ho-100-ben-nguoi-tinh-kem-15-tuoi-nhan-luon-oscar-vi-qua-xuat-sac";
const tagparam = [
  "kate-winslet",
  "titanic",
  "titanic-1997",
  "canh-nong",
  "canh-nong-tao-bao",
  "canh-nong-hollywood",
  "phim-au-my",
  "the-reader",
];
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

export default function page_20210614092415() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    <strong>Kate Winslet</strong> vốn luôn được biết đến như một
                    cái tên hạng A tại xứ sở Hollywood nhờ tài năng xuất chúng
                    của mình, nổi bật nhất qua bom tấn <strong>Titanic</strong>{" "}
                    đã vắt nước mắt nhiều khán giả. Sau thành công của Titanic,
                    mỹ nhân sinh năm 1975 đã tham gia nhiều dự án điện ảnh lớn.
                    Đến năm 2009, cô chiến thắng giải Oscar đầu tiên trong sự
                    nghiệp với phim tâm lý - tình cảm{" "}
                    <strong>The Reader</strong> (Người Đọc). Cũng trong bộ phim
                    này, Kate Winslet khiến người xem "chết trân" với cảnh nóng
                    siêu bạo, hở trên hở dưới lại vô cùng "điên cuồng".
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092415--13-884991.jpg")
                        .default
                    }
                    alt="Kate Winslet, Titanic, Titanic 1997, Canh Nong, Canh Nong Tao Bao, Canh Nong Hollywood, Phim Au My, The Reader, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092415--10-340892.jpg")
                        .default
                    }
                    alt="Kate Winslet, Titanic, Titanic 1997, Canh Nong, Canh Nong Tao Bao, Canh Nong Hollywood, Phim Au My, The Reader, "
                    note="Hình ảnh trong phim The Reader"
                  />{" "}
                  <p>
                    Trong phim <strong>The Reader</strong>,{" "}
                    <strong>Kate Winslet</strong> đóng vai Hanna - một người phụ
                    nữ lớn tuổi mà chàng trai trẻ Michale Berg (do David Kross
                    và Ralph Fiennes thủ vai) đem lòng mê đắm kể từ khi 15 tuổi.
                    Từng yêu nhau tha thiết, ấy vậy mà nhiều năm sau khi gặp
                    lại, họ chẳng thể nhìn được vào mắt nhau bởi vì những mặc
                    cảm, trách nhiệm và tội lỗi đè nặng lên vai. Phim được thực
                    hiện dựa trên tiểu thuyết cùng tên của tác giả Bernhard
                    Schlink ra mắt năm 1995.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092415--11-609549.jpg")
                        .default
                    }
                    alt="Kate Winslet, Titanic, Titanic 1997, Canh Nong, Canh Nong Tao Bao, Canh Nong Hollywood, Phim Au My, The Reader, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092415--12-956800.jpg")
                        .default
                    }
                    alt="Kate Winslet, Titanic, Titanic 1997, Canh Nong, Canh Nong Tao Bao, Canh Nong Hollywood, Phim Au My, The Reader, "
                    note=""
                  />
                  <p>
                    Phân cảnh tình dục của <strong>Kate Winslet</strong> và nam
                    diễn viên David Kross là một trong những chi tiết chấn động
                    của <strong>The Reader</strong> vì mức độ bạo dạn. Thậm chí,
                    đoạn phim này còn bị nhiều khán giả đưa lên "web đen" để
                    tiêu thụ.
                  </p>
                  <p>
                    Sự thể hiện của <strong>Kate Winslet</strong> trong bộ phim{" "}
                    <strong>The Reader</strong> nhận về nhiều lời tán dương,
                    cũng như sự dũng cảm và tận tâm của nữ minh tinh khi chấp
                    nhận lăn xả cho hàng loạt các phân đoạn tình dục, ân ái hở
                    hang.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Đáng tiếc rằng giờ đây, <strong>Kate Winslet</strong> dường
                    như đã quyết định nói lời từ biệt với các cảnh nóng. Trong
                    một bài phỏng vấn, nữ minh tinh đã chia sẻ rằng cô sắp không
                    thể đóng được các trường đoạn ân ái, tình dục trên màn ảnh
                    nữa. "Cũng không phải là do tuổi tác. Sẽ đến một thời điểm
                    mà mọi người sẽ phản ứng kiểu 'Ôi, cô ta lại đóng cảnh nóng
                    nữa rồi'". Thực tế, trong bộ phim truyền hình Mare of
                    Easttown vừa ra mắt đang nhận được nhiều lời khen ngợi, nữ
                    diễn viên đã yêu cầu đạo diễn không được chỉnh sửa mỡ bụng
                    của mình trong cảnh nóng để phù hợp hơn với nhân vật.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092415--14-427665.jpg")
                        .default
                    }
                    alt="Kate Winslet, Titanic, Titanic 1997, Canh Nong, Canh Nong Tao Bao, Canh Nong Hollywood, Phim Au My, The Reader, "
                    note="Cảnh nóng trong Mare of Easttown để lộ phần bụng mỡ của Kate Winslet"
                  />
                  <p>Nguồn ảnh: The Weinstein Company, HBO</p>
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
