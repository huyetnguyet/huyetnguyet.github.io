import React from "react";
import "components/page.css";
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
"timestamp": '29/07/2021 04:11 PM',
"title": 'Streamer Trang Lucy khiến CĐM “chao đảo" với bộ ảnh “nửa kín nửa hở", vén áo chạm đến khuôn ngực để tạo dáng gợi cảm',
"description": '“Biến hình” quá nhanh, nữ streamer quê Lạng Sơn vấp phải nhiều điều tiếng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/4/1432337828837734323861079012632147955526943n-1625354809507603698046.jpeg',
"alt": 'STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '29/07/2021',
"time": '04:11 PM',
"link": '/streamer-trang-lucy-khien-cdm-chao-dao-voi-bo-anh-nua-kin-nua-ho-ven-ao-cham-den-khuon-nguc-de-tao-dang-goi-cam',
"zcomponent": 'page_20210729161107',
"filepath": './20210729161107-streamer-trang-lucy-khien-cdm-chao-dao-voi-bo-anh-nua-kin-nua-ho-ven-ao-cham-den-khuon-nguc-de-tao-dang-goi-cam.js'
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
  'Streamer Trang Lucy khiến CĐM “chao đảo" với bộ ảnh “nửa kín nửa hở", vén áo chạm đến khuôn ngực để tạo dáng gợi cảm';
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:11 PM";
const description =
  "“Biến hình” quá nhanh, nữ streamer quê Lạng Sơn vấp phải nhiều điều tiếng.";
const link =
  "streamer-trang-lucy-khien-cdm-chao-dao-voi-bo-anh-nua-kin-nua-ho-ven-ao-cham-den-khuon-nguc-de-tao-dang-goi-cam";
const tagparam = [
  "STREAMER",
  "TRANG LUCY",
  "HỞ TÁO BẠO",
  "GÁI XINH",
  "CỘNG ĐỒNG MẠNG",
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

export default function page_20210729161107() {
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
                <div className="contentBody">
                  <p>
                    <strong>Trang Lucy</strong> là nữ <strong>streamer</strong>{" "}
                    thế hệ mới, được cộng đồng fan game biết đến với phong cách
                    ngây thơ, hồn nhiên.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-1625354740119871631056.jpg"
                    alt="1, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note="Việc chuyển hướng sang phong cách gợi cảm thời gian gần đây đã vô tình gây ra lời bàn tán xung quanh cô gái trẻ này."
                  />
                  <p>
                    Tên đầy đủ của cô là Trần Thu Trang (sinh năm 2001, Lạng
                    Sơn), theo học tại trường Đại học Sân khấu Điện ảnh Hà Nội.
                    Thời gian đầu vào nghề, cô nàng chưa định hình cho mình một
                    phong cách nào cụ thể, hot girl Lạng Sơn muốn hình ảnh của
                    bản thân luôn phong phú, nhiều màu nên xuất hiện với diện
                    mạo đa dạng, từ cá tính, dịu dàng đến sexy.
                  </p>
                  <p>
                    Và bộ ảnh hoá mỹ nữ Hong Kong mới đây cũng nằm trong thử
                    nghiệm đó.{" "}
                  </p>
                  <p>Cách tạo dáng khiến bộ ảnh gây chú ý</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/4/1432337828837734323861079012632147955526943n-1625354809507603698046.jpeg"
                    alt="2, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/4/1441746138838248290476344436650857674138343n-16253548096231263524698.jpeg"
                    alt="3, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note=""
                  />
                  <p>
                    Diện mạo mới mẻ này của cô nàng thu hút được sự chú ý, chỉ
                    trong vài giờ đăng tải đã nhận được chục nghìn lượt yêu
                    thích và bình luận. Bên cạnh những lời khen dành cho nhan
                    sắc của cô nàng thì CĐM cũng có ý kiến về lần “biến hình”
                    này khi cô nàng không ngại ngần mà tạo dáng táo bạo, vén áo
                    đến nửa khuôn ngực để trông sexy hơn.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/4/base64-1625354889881464726472.png"
                    alt="4, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Bên cạnh đó, <strong>Trang Lucy</strong> còn sở hữu phong
                    cách ăn mặc cực kỳ ấn tượng: đôi khi dịu dàng nữ tính, đôi
                    khi có chút thanh lịch nhưng cũng có khi vô cùng cá tính.
                    Dẫu vậy thì dù là ở phong cách nào, nữ{" "}
                    <strong>streamer</strong> cũng từng khẳng định sẽ vẫn giữ
                    quan điểm nói không với scandal, lộ clip, phải có cá tính
                    của bản thân.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/1194751747873487786952402327645970270102143n-1625355100124305982044.jpeg"
                    alt="5, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note=""
                  />
                  <p>Cùng ngắm thêm những hình ảnh khác của cô nàng này nhé:</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/1709489929239466117021227526552374688884877n-1625355100396823243425.jpeg"
                    alt="6, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/1733850609316777742623397026518581787503368n-16253551004071287557800.jpeg"
                    alt="7, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/1860613119466892760945223858095086594065937n-16253551004141834565667.jpeg"
                    alt="8, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/1864778249524155588552279113841023896894905n-1625355100435286980781.jpeg"
                    alt="9, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/1890900649563683384599494404397695522070995n-16253551004571072909716.jpeg"
                    alt="10, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/1948580739597696514531512365047911876936741n-1625355100694582166624.jpeg"
                    alt="11, STREAMER,TRANG LUCY,HỞ TÁO BẠO,GÁI XINH,CỘNG ĐỒNG MẠNG,"
                    note=""
                  />
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
